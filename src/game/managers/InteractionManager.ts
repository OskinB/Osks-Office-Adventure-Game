import Phaser from 'phaser'
import DialogueManager from './DialogueManager'

export default class InteractionManager {
    private scene: Phaser.Scene;
    private player?: Phaser.Physics.Arcade.Sprite;
    private npcs: Map<string, Phaser.Physics.Arcade.Sprite> = new Map();
    private dialogueManager?: DialogueManager;
    private tokens: Set<string> = new Set();
    private teemoHasJumped: boolean = false;
    private teemoSprite?: Phaser.GameObjects.Image;
    private initialThinkBubbleShown: boolean = false;
    private interactionPrompt?: Phaser.GameObjects.Container;
    private tvBubble?: Phaser.GameObjects.Container;
    private dogBedBubble?: Phaser.GameObjects.Container;
    private topRightNPCBubble?: Phaser.GameObjects.Container;
    private topWindowBubble?: Phaser.GameObjects.Container;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    checkNearbyNPC() {
        this.npcs.forEach((npc, name) => {
            const distance = Phaser.Math.Distance.Between(
                this.player!.x,
                this.player!.y,
                npc.x,
                npc.y
            );

            if (distance < 100 && this.canTalkToNPC(name)) {
                this.dialogueManager?.startDialogue(name);
            }
        });

        const breakRoomX = 482;
        const breakRoomY = 560;
        const couchLeftX = breakRoomX - 30;
        const couchLeftY = breakRoomY;

        const couchLeftDistance = Phaser.Math.Distance.Between(
            this.player!.x,
            this.player!.y,
            couchLeftX,
            couchLeftY
        );

        if (couchLeftDistance < 100) {
            this.dialogueManager?.startDialogue("couch-npc");
        }
    }

    canTalkToNPC(name: string): boolean {
        const tokenRequirements: Record<string, string> = {
            "anders": "visitor-badge",
            "freja": "hr-token",
            "jonas": "dev-token",
        };

        const requiredToken = tokenRequirements[name];
        return !requiredToken || this.tokens.has(requiredToken);
    }

    checkTVProximity() {
        if (!this.player) return;

        const tvX = 482;
        const tvY = 490;

        const distance = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            tvX,
            tvY
        );

        if (this.dialogueManager?.getInDialogue() && this.tvBubble) {
            this.tvBubble.destroy();
            this.tvBubble = undefined;
            return;
        }

        if (distance < 80) {
            if (!this.tvBubble) {
                this.tvBubble = this.scene.add.container(this.player.x, this.player.y - 60);
                this.tvBubble.setDepth(15);

                const cloudBg = this.scene.add.graphics();
                // Shadow
                cloudBg.fillStyle(0x000000, 0.1);
                cloudBg.fillCircle(-60 + 2, 0 + 2, 35);
                cloudBg.fillCircle(-22.5 + 2, -12 + 2, 42);
                cloudBg.fillCircle(22.5 + 2, -12 + 2, 42);
                cloudBg.fillCircle(60 + 2, 0 + 2, 35);
                cloudBg.fillCircle(2, 8, 28);
                // Main cloud body
                cloudBg.fillStyle(0xffffff, 1);
                cloudBg.fillCircle(-60, 0, 35);
                cloudBg.fillCircle(-22.5, -12, 42);
                cloudBg.fillCircle(22.5, -12, 42);
                cloudBg.fillCircle(60, 0, 35);
                cloudBg.fillCircle(0, 6, 28);

                const smallCircle1 = this.scene.add.circle(-30, 42, 6, 0xffffff, 1);
                const smallCircle2 = this.scene.add.circle(-20, 54, 4, 0xffffff, 1);

                const bubbleText = this.scene.add.text(0, 0, "They're having \nfun 😊", {
                    fontSize: "14px",
                    color: "#000000",
                    align: "center",
                    lineSpacing: 2,
                    padding: { x: 20, y: 20 },
                });
                bubbleText.setOrigin(0.5);

                this.tvBubble.add([cloudBg, smallCircle1, smallCircle2, bubbleText]);
                this.scene.events.on("postupdate", () => {
                    if (this.tvBubble && this.player) {
                        this.tvBubble.setPosition(this.player.x, this.player.y - 60);
                    }
                });
            }
        } else {
            if (this.tvBubble) {
                this.tvBubble.destroy();
                this.tvBubble = undefined;
            }
        }
    }

    checkDogBedProximity() {
        if (!this.player) return;

        const dogBedX = 26 * 32;
        const dogBedY = 19 * 32;

        const distance = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            dogBedX,
            dogBedY
        );

        if (this.dialogueManager?.getInDialogue() && this.dogBedBubble) {
            this.dogBedBubble.destroy();
            this.dogBedBubble = undefined;
            return;
        }

        if (distance < 70) {
            if (!this.dogBedBubble) {
                this.dogBedBubble = this.scene.add.container(
                    this.player.x,
                    this.player.y - 70
                );
                this.dogBedBubble.setDepth(15);

                const cloudBg = this.scene.add.graphics();
                // Shadow
                cloudBg.fillStyle(0x000000, 0.1);
                cloudBg.fillCircle(-50.5, 2, 34.5);
                cloudBg.fillCircle(-16, -10, 39);
                cloudBg.fillCircle(20, -14, 39);
                cloudBg.fillCircle(54.5 + 2, 2, 34.5);
                cloudBg.fillCircle(2, 14, 30);
                // Main cloud body
                cloudBg.fillStyle(0xffffff, 1);
                cloudBg.fillCircle(-52.5, 0, 34.5);
                cloudBg.fillCircle(-18, -12, 39);
                cloudBg.fillCircle(18, -12, 39);
                cloudBg.fillCircle(52.5, 0, 34.5);
                cloudBg.fillCircle(0, 12, 30);

                const smallCircle1 = this.scene.add.circle(-30, 45, 6, 0xffffff, 1);
                const smallCircle2 = this.scene.add.circle(-20, 58, 4, 0xffffff, 1);

                const bubbleText = this.scene.add.text(
                    0,
                    0,
                    "Aww a dog bed for \nthe office dog! ",
                    {
                        fontSize: "14px",
                        color: "#000000",
                        align: "center",
                        lineSpacing: 2,
                        padding: { x: 20, y: 20 },
                    }
                );
                bubbleText.setOrigin(0.5);

                this.dogBedBubble.add([
                    cloudBg,
                    smallCircle1,
                    smallCircle2,
                    bubbleText,
                ]);

                this.scene.events.on("postupdate", () => {
                    if (this.dogBedBubble && this.player) {
                        this.dogBedBubble.setPosition(this.player.x, this.player.y - 70);
                    }
                });
            }
        } else {
            if (this.dogBedBubble) {
                this.dogBedBubble.destroy();
                this.dogBedBubble = undefined;
            }
        }
    }

    checkTopRightNPCProximity() {
        if (!this.player) return;

        const topRightNPCX = 650;
        const topRightNPCY = 160;

        const distance = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            topRightNPCX,
            topRightNPCY
        );

        if (this.dialogueManager?.getInDialogue() && this.topRightNPCBubble) {
            this.topRightNPCBubble.destroy();
            this.topRightNPCBubble = undefined;
            return;
        }

        if (distance < 80) {
            if (!this.topRightNPCBubble) {
                this.topRightNPCBubble = this.scene.add.container(
                    this.player.x,
                    this.player.y - 70
                );
                this.topRightNPCBubble.setDepth(15);

                const cloudBg = this.scene.add.graphics();
                // Shadow
                cloudBg.fillStyle(0x000000, 0.1);
                cloudBg.fillCircle(-52.5 + 2, 0 + 2, 34.5);
                cloudBg.fillCircle(-18 + 2, -12 + 2, 39);
                cloudBg.fillCircle(18 + 2, -12 + 2, 39);
                cloudBg.fillCircle(52.5 + 2, 0 + 2, 34.5);
                cloudBg.fillCircle(0 + 2, 12 + 2, 30);
                // Main cloud body
                cloudBg.fillStyle(0xffffff, 1);
                cloudBg.fillCircle(-52.5, 0, 34.5);
                cloudBg.fillCircle(-18, -12, 39);
                cloudBg.fillCircle(18, -12, 39);
                cloudBg.fillCircle(52.5, 0, 34.5);
                cloudBg.fillCircle(0, 12, 30);

                const smallCircle1 = this.scene.add.circle(-30, 51, 6, 0xffffff, 1);
                const smallCircle2 = this.scene.add.circle(-20, 61, 4, 0xffffff, 1);

                const bubbleText = this.scene.add.text(0, 0, "That looks\ncool!", {
                    fontSize: "14px",
                    color: "#000000",
                    align: "center",
                    lineSpacing: 2,
                    padding: { x: 20, y: 20 },
                });
                bubbleText.setOrigin(0.5);

                this.topRightNPCBubble.add([
                    cloudBg,
                    smallCircle1,
                    smallCircle2,
                    bubbleText,
                ]);

                this.scene.events.on("postupdate", () => {
                    if (this.topRightNPCBubble && this.player) {
                        this.topRightNPCBubble.setPosition(
                            this.player.x,
                            this.player.y - 70
                        );
                    }
                });
            }
        } else {
            if (this.topRightNPCBubble) {
                this.topRightNPCBubble.destroy();
                this.topRightNPCBubble = undefined;
            }
        }
    }

    checkTopWindowProximity() {
        if (!this.player) return;

        const windowX = 12 * 32;
        const windowY = 16;

        const distance = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            windowX,
            windowY
        );

        if (this.dialogueManager?.getInDialogue() && this.topWindowBubble) {
            this.topWindowBubble.destroy();
            this.topWindowBubble = undefined;
            return;
        }

        if (distance < 90) {
            if (!this.topWindowBubble) {
                this.topWindowBubble = this.scene.add.container(
                    this.player.x - 32,
                    this.player.y + 70
                );
                this.topWindowBubble.setDepth(15);

                const cloudBg = this.scene.add.graphics();
                // Shadow
                cloudBg.fillStyle(0x000000, 0.1);
                cloudBg.fillCircle(-52.5 + 2, 0 + 2, 34.5);
                cloudBg.fillCircle(-18 + 2, -12 + 2, 39);
                cloudBg.fillCircle(18 + 2, -12 + 2, 39);
                cloudBg.fillCircle(52.5 + 2, 0 + 2, 34.5);
                cloudBg.fillCircle(0 + 2, 12 + 2, 30);
                // Main cloud body
                cloudBg.fillStyle(0xffffff, 1);
                cloudBg.fillCircle(-52.5, 0, 34.5);
                cloudBg.fillCircle(-18, -12, 39);
                cloudBg.fillCircle(18, -12, 39);
                cloudBg.fillCircle(52.5, 0, 34.5);
                cloudBg.fillCircle(0, 12, 30);

                const smallCircle1 = this.scene.add.circle(0, -56, 6, 0xffffff, 1);
                const smallCircle2 = this.scene.add.circle(10, -66, 4, 0xffffff, 1);

                const bubbleText = this.scene.add.text(0, 0, "Look at that\nview 😯", {
                    fontSize: "14px",
                    color: "#000000",
                    align: "center",
                    lineSpacing: 2,
                    padding: { x: 20, y: 20 },
                });
                bubbleText.setOrigin(0.5);

                this.topWindowBubble.add([
                    cloudBg,
                    smallCircle1,
                    smallCircle2,
                    bubbleText,
                ]);

                this.scene.events.on("postupdate", () => {
                    if (this.topWindowBubble && this.player) {
                        this.topWindowBubble.setPosition(
                            this.player.x - 32,
                            this.player.y + 70
                        );
                    }
                });
            }
        } else {
            if (this.topWindowBubble) {
                this.topWindowBubble.destroy();
                this.topWindowBubble = undefined;
            }
        }
    }

    checkTeemoSpawn() {
        if (!this.player || this.teemoHasJumped) return;
        if (!this.tokens.has("gamer-chat")) return;

        const plantX = 850;
        const plantY = 350;

        const distance = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            plantX,
            plantY
        );

        if (distance < 140) {
            this.teemoHasJumped = true;

            this.teemoSprite = this.scene.add.image(plantX - 10, plantY - 0, "teemo");
            this.teemoSprite.setScale(1.5);
            this.teemoSprite.setDepth(20);
            this.teemoSprite.setAlpha(0);
            this.dialogueManager?.setTeemoSprite(this.teemoSprite);

            const teemoBubble = this.scene.add.container(plantX - 20, plantY - 60);
            teemoBubble.setDepth(100);

            const bubbleBg = this.scene.add.ellipse(-15, -5, 105, 50, 0xffffff, 1);
            bubbleBg.setStrokeStyle(2, 0xffd966);

            const bubbleText = this.scene.add.text(-15, -5, "Reporting in!", {
                fontSize: "12px",
                color: "#000000",
                fontStyle: "bold",
            });
            bubbleText.setOrigin(0.5);

            teemoBubble.add([bubbleBg, bubbleText]);

            // Animate Teemo jumping out
            this.scene.tweens.add({
                targets: this.teemoSprite,
                x: plantX - 40,
                y: plantY - 10,
                alpha: 1,
                duration: 500,
                ease: "Back.easeOut",
                onComplete: () => {
                    // Make Teemo jump up and down
                    this.scene.tweens.add({
                        targets: this.teemoSprite,
                        y: plantY - 20,
                        duration: 100,
                        ease: "Sine.easeInOut",
                        yoyo: true,
                        repeat: 1,
                        onComplete: () => {
                            this.scene.time.delayedCall(500, () => {
                                this.dialogueManager?.showTeemoDialogue(plantX, plantY);
                                teemoBubble.destroy();
                            });
                        },
                    });
                },
            });
        }
    }

    checkInteractionPrompt() {
        let nearbyNPC: { name: string; npc: Phaser.Physics.Arcade.Sprite } | null = null;

        this.npcs.forEach((npc, name) => {
            const distance = Phaser.Math.Distance.Between(
                this.player!.x,
                this.player!.y,
                npc.x,
                npc.y
            );

            if (distance < 100) {
                const tokenRequirements: Record<string, string> = {
                    "anders": "visitor-badge",
                    "freja": "hr-token",
                    "jonas": "dev-token",
                };

                const requiredToken = tokenRequirements[name];
                const canTalk = !requiredToken || this.tokens.has(requiredToken);

                if (canTalk) {
                    nearbyNPC = { name, npc };
                }
            }
        });

        const breakRoomX = 482;
        const breakRoomY = 560;
        const couchLeftX = breakRoomX - 30;
        const couchLeftY = breakRoomY;

        const couchLeftDistance = Phaser.Math.Distance.Between(
            this.player!.x,
            this.player!.y,
            couchLeftX,
            couchLeftY
        );

        if (couchLeftDistance < 100 && !nearbyNPC) {
            nearbyNPC = {
                name: "couch-npc",
                npc: { x: couchLeftX, y: couchLeftY } as Phaser.Physics.Arcade.Sprite,
            };
        }

        if (nearbyNPC && this.interactionPrompt && !this.dialogueManager?.getInDialogue()) {
            const displayName =
                nearbyNPC.name === "couch-npc"
                    ? "the gamer"
                    : nearbyNPC.name.charAt(0).toUpperCase() + nearbyNPC.name.slice(1);
            const promptText = this.interactionPrompt
                .list[1] as Phaser.GameObjects.Text;
            promptText.setText(`Press E to talk to ${displayName}`);
            this.interactionPrompt.setPosition(nearbyNPC.npc.x, nearbyNPC.npc.y - 50);
            this.interactionPrompt.setVisible(true);
        } else if (this.interactionPrompt) {
            this.interactionPrompt.setVisible(false);
        }
    }

    showInitialThinkBubble() {
        if (!this.player || this.initialThinkBubbleShown) return;
        this.initialThinkBubbleShown = true;

        const initialBubble = this.scene.add.container(this.player.x, this.player.y - 70);
        initialBubble.setDepth(15);

        const cloudBg = this.scene.add.graphics();
        // Shadow
        cloudBg.fillStyle(0x000000, 0.1);
        cloudBg.fillCircle(-52.5 + 2, 0 + 2, 34.5);
        cloudBg.fillCircle(-18 + 2, -12 + 2, 39);
        cloudBg.fillCircle(18 + 2, -12 + 2, 39);
        cloudBg.fillCircle(52.5 + 2, 0 + 2, 34.5);
        cloudBg.fillCircle(0 + 2, 12 + 2, 30);
        // Main cloud body
        cloudBg.fillStyle(0xffffff, 1);
        cloudBg.fillCircle(-52.5, 0, 34.5);
        cloudBg.fillCircle(-18, -12, 39);
        cloudBg.fillCircle(18, -12, 39);
        cloudBg.fillCircle(52.5, 0, 34.5);
        cloudBg.fillCircle(0, 12, 30);

        const smallCircle1 = this.scene.add.circle(-30, 51, 6, 0xffffff, 1);
        const smallCircle2 = this.scene.add.circle(-20, 61, 4, 0xffffff, 1);

        const bubbleText = this.scene.add.text(0, 0, "Wow, nice\noffice.", {
            fontSize: "14px",
            color: "#000000",
            align: "center",
            lineSpacing: 2,
            padding: { x: 20, y: 20 },
        });
        bubbleText.setOrigin(0.5);

        initialBubble.add([cloudBg, smallCircle1, smallCircle2, bubbleText]);

        const updateHandler = () => {
            if (initialBubble && this.player) {
                initialBubble.setPosition(this.player.x, this.player.y - 70);
            }
        };
        this.scene.events.on("postupdate", updateHandler);

        this.scene.time.delayedCall(5000, () => {
            this.scene.events.off("postupdate", updateHandler);
            this.scene.tweens.add({
                targets: initialBubble,
                alpha: 0,
                duration: 500,
                onComplete: () => {
                    initialBubble.destroy();
                },
            });
        });
    }
    
    setPlayer(player: Phaser.Physics.Arcade.Sprite) {
        this.player = player;
    }

    setNPCs(npcs: Map<string, Phaser.Physics.Arcade.Sprite>) {
        this.npcs = npcs;
    }

    setDialogueManager(dialogueManager: DialogueManager) {
        this.dialogueManager = dialogueManager;
    }

    setTokens(tokens: Set<string>) {
        this.tokens = tokens;
    }

    setTeemoHasJumped(teemoHasJumped: boolean) {
        this.teemoHasJumped = teemoHasJumped;
    }

    getTeemoHasJumped(): boolean {
        return this.teemoHasJumped;
    }

    setTeemoSprite(teemoSprite: Phaser.GameObjects.Image) {
        this.teemoSprite = teemoSprite;
    }

    setInteractionPrompt(interactionPrompt: Phaser.GameObjects.Container) {
        this.interactionPrompt = interactionPrompt;
    }
}