import Phaser from 'phaser'
import { dialogues } from '../data/dialogues'

export default class DialogueManager {
    private scene: Phaser.Scene;
    private dialogueBox?: Phaser.GameObjects.Container;
    private dialogueText?: Phaser.GameObjects.Text;
    private nameText?: Phaser.GameObjects.Text;
    private dialogueIndex: number = 0;
    private currentDialogue: any[] = [];
    private inDialogue: boolean = false;
    private waitingForChoice: boolean = false;
    private choiceTexts: Phaser.GameObjects.Text[] = [];
    private choiceBoxes: Phaser.GameObjects.Graphics[] = [];
    private selectedChoiceIndex: number = 0;
    private currentQuestionIndex: number = 0;
    private currentNPC?: string;
    private teemoDialogueOpen: boolean = false;
    private teemoDialogueContainer?: Phaser.GameObjects.Container;
    private teemoDialoguePlantX?: number;
    private teemoDialoguePlantY?: number;
    private teemoSprite?: Phaser.GameObjects.Image;
    private tokens: Set<string> = new Set();
    private npcNameTags: Map<string, Phaser.GameObjects.Text> = new Map();
    private interactionPrompt?: Phaser.GameObjects.Container;
    private receptionistConversationEnded: boolean = false;
    private catSpawned: boolean = false;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    setDialogueUI(dialogueBox: Phaser.GameObjects.Container, nameText: Phaser.GameObjects.Text, dialogueText: Phaser.GameObjects.Text) {
        this.dialogueBox = dialogueBox;
        this.nameText = nameText;
        this.dialogueText = dialogueText;
    }

    setInteractionPrompt(interactionPrompt: Phaser.GameObjects.Container) {
        this.interactionPrompt = interactionPrompt;
    }

    setTokens(tokens: Set<string>) {
        this.tokens = tokens;
    }

    setNPCNameTags(npcNameTags: Map<string, Phaser.GameObjects.Text>) {
        this.npcNameTags = npcNameTags;
    }

    startDialogue(npcName: string) {
        this.currentNPC = npcName;
        this.inDialogue = true;
        this.dialogueIndex = 0;

        if (this.interactionPrompt) {
            this.interactionPrompt.setVisible(false);
        }
        const dialogue = dialogues[npcName];
        this.currentDialogue = [...dialogue.intro];

        if (dialogue.questions && dialogue.questions.length > 0) {
            this.currentDialogue.push(dialogue.questions[0].ask);
            this.currentQuestionIndex = 0;
        }
        this.showDialogue();
    }

    showDialogue() {
        if (this.dialogueBox) {
            this.dialogueBox.setVisible(true);
        }
        this.showCurrentDialogueLine();
    }

    showCurrentDialogueLine() {
        if (this.dialogueIndex >= this.currentDialogue.length) {
            this.endDialogue();
            return;
        }

        const line = this.currentDialogue[this.dialogueIndex];
        const dialogue = dialogues[this.currentNPC!];

        const originalQuestionIndex = dialogue.intro.length;
        const isOriginalNPCQuestion =
            dialogue.questions &&
            dialogue.questions.length > 0 &&
            this.dialogueIndex === originalQuestionIndex;

        if (isOriginalNPCQuestion) {
            const speakerName = line.name || "NPC";
            this.nameText?.setText(speakerName);
            this.dialogueText?.setText(line.text);
            return;
        }

        const speakerName = line.speaker === "osk" ? "Ósk" : line.name || "NPC";
        this.nameText?.setText(speakerName);
        this.dialogueText?.setText(line.text);
    }

    showDialogueChoices() {
        this.waitingForChoice = true;
        this.selectedChoiceIndex = 0;
        const dialogue = dialogues[this.currentNPC!];

        if (!dialogue.questions || dialogue.questions.length === 0) return;

        this.nameText?.setText("");
        this.dialogueText?.setText("");

        const choices = dialogue.questions[this.currentQuestionIndex || 0].choices;
        const dialogueWidth = 600;
        const dialogueHeight = 110;
        const dialogueY = 470;
        const dialogueX = 640;

        const choiceBoxWidth = dialogueWidth;
        const choiceBoxHeight = 40;
        const startY = dialogueY - dialogueHeight / 2 + 30;
        const spacing = 50;

        choices.forEach((choice, index) => {
            const yPos = startY + index * spacing;

            const choiceBox = this.scene.add.graphics();
            choiceBox.setScrollFactor(0);
            choiceBox.setDepth(2000);

            const isSelected = index === 0;
            choiceBox.fillStyle(0x1c8a8c, 1);
            choiceBox.fillRoundedRect(
                dialogueX - choiceBoxWidth / 2,
                yPos - choiceBoxHeight / 2,
                choiceBoxWidth,
                choiceBoxHeight,
                8
            );

            if (isSelected) {
                choiceBox.lineStyle(3, 0xc3a523, 0.8);
                choiceBox.strokeRoundedRect(
                    dialogueX - choiceBoxWidth / 2,
                    yPos - choiceBoxHeight / 2,
                    choiceBoxWidth,
                    choiceBoxHeight,
                    8
                );
            }
            this.choiceBoxes.push(choiceBox);

            const previewText = choice.text.slice(0, 65);
            const previewTextEllipsis = previewText + "...";
            const choiceText = this.scene.add.text(dialogueX, yPos, previewTextEllipsis, {
                fontSize: "14px",
                color: "#ffffff",
                lineSpacing: 4,
                wordWrap: { width: choiceBoxWidth - 20 },
                align: "center",
            });

            choiceText.setOrigin(0.5);
            choiceText.setInteractive({ useHandCursor: true });
            choiceText.on("pointerdown", () => this.selectChoice(index));
            choiceText.setScrollFactor(0);
            choiceText.setDepth(2001);

            this.choiceTexts.push(choiceText);
        });
    }

    updateDialogueChoiceHighlight() {
        const dialogue = dialogues[this.currentNPC!];
        if (!dialogue.questions || dialogue.questions.length === 0) return;

        const dialogueWidth = 600;
        const dialogueHeight = 110;
        const dialogueY = 470;
        const dialogueX = 640;
        const choiceBoxWidth = dialogueWidth;
        const choiceBoxHeight = 40;
        const startY = dialogueY - dialogueHeight / 2 + 30;
        const spacing = 50;

        this.choiceBoxes.forEach((box, index) => {
            box.clear();
            const yPos = startY + index * spacing;
            const isSelected = index === this.selectedChoiceIndex;

            box.fillStyle(0x1c8a8c, 1);
            box.fillRoundedRect(
                dialogueX - choiceBoxWidth / 2,
                yPos - choiceBoxHeight / 2,
                choiceBoxWidth,
                choiceBoxHeight,
                8
            );

            if (isSelected) {
                box.lineStyle(3, 0xc3a523, 0.8);
                box.strokeRoundedRect(
                    dialogueX - choiceBoxWidth / 2,
                    yPos - choiceBoxHeight / 2,
                    choiceBoxWidth,
                    choiceBoxHeight,
                    8
                );
            }
        });
    }

    selectChoice(index: number) {
        const dialogue = dialogues[this.currentNPC!];
        if (!dialogue.questions || dialogue.questions.length === 0) return;

        const currentQuestion = dialogue.questions[this.currentQuestionIndex || 0];
        const choice = currentQuestion.choices[index];

        // Clear choices
        this.choiceTexts.forEach((t) => t.destroy());
        this.choiceTexts = [];
        this.choiceBoxes.forEach((b) => b.destroy());
        this.choiceBoxes = [];
        this.waitingForChoice = false;

        // Add player's choice and NPC response to dialogue
        this.currentDialogue.push(
            { speaker: "osk", text: choice.text },
            {
                speaker: "npc",
                name: currentQuestion.ask.name,
                text: choice.response,
            }
        );

        // Check for more questions
        if (
            dialogue.questions &&
            (this.currentQuestionIndex || 0) < dialogue.questions.length - 1
        ) {
            this.currentQuestionIndex = (this.currentQuestionIndex || 0) + 1;
            this.currentDialogue.push(
                dialogue.questions[this.currentQuestionIndex].ask
            );
        } else {
            this.currentDialogue.push(...dialogue.outro);
        }

        this.dialogueIndex++;
        this.showCurrentDialogueLine();
    }

    advanceDialogue() {
        if (this.waitingForChoice) return;

        const dialogue = dialogues[this.currentNPC!];
        const questionIndex =
            dialogue.intro.length + (this.currentQuestionIndex || 0) * 3;
        const isAtNPCQuestion =
            dialogue.questions &&
            dialogue.questions.length > 0 &&
            this.dialogueIndex === questionIndex;

        if (isAtNPCQuestion) {
            this.showDialogueChoices();
            return;
        }

        this.dialogueIndex++;
        this.showCurrentDialogueLine();
    }

    endDialogue() {
        this.inDialogue = false;
        if (this.dialogueBox) {
            this.dialogueBox.setVisible(false);
        }

        const dialogue = dialogues[this.currentNPC!];
        if (dialogue.token) {
            this.tokens.add(dialogue.token);
            localStorage.setItem("osk-game-tokens", JSON.stringify([...this.tokens]));
            this.updateTokenDisplay();

            const tokenToNextNPC: Record<string, string> = {
                "visitor-badge": "anders",
                "hr-token": "freja",
                "dev-token": "jonas",
            };

            const nextNPC = tokenToNextNPC[dialogue.token];
            if (nextNPC) {
                const nextTag = this.npcNameTags.get(nextNPC);

                if (nextTag) {
                    this.scene.tweens.add({
                        targets: nextTag,
                        alpha: 1,
                        duration: 2000,
                        ease: "Power2",
                    });
                }
            }

            // Check for game completion
            if (dialogue.token === "job-offer") {
                this.scene.time.delayedCall(1000, () => {
                    window.location.href = "/credits";
                });
            }

            // Trigger cat appearance after receptionist conversation
            if (this.currentNPC === "maja" && !this.receptionistConversationEnded) {
                this.receptionistConversationEnded = true;
                this.scene.time.delayedCall(1000, () => {
                    this.spawnCat();
                });
            }
        }
    }

    spawnCat() {
        if (this.catSpawned) return;
        this.catSpawned = true;

        const cat = this.scene.physics.add.sprite(116, 32, "cat-stand");
        cat.setDepth(10);
        cat.setScale(0.7);

        // Store cat reference for later exit animation
        (this as any).catSprite = cat;

        const meowBubble = this.scene.add.container(cat.x, cat.y - 40);
        meowBubble.setDepth(100);

        const meowBg = this.scene.add.ellipse(0, -5, 70, 40, 0xffffff, 1);
        meowBg.setStrokeStyle(2, 0xffd966);

        const meowText = this.scene.add.text(0, -5, "Meow", {
            fontSize: "12px",
            color: "#000000",
            fontStyle: "bold",
        });
        meowText.setOrigin(0.5);

        meowBubble.add([meowBg, meowText]);

        const targetX = 212;
        const targetY = 240;

        // Cat walking animations
        this.scene.anims.create({
            key: "cat-walk",
            frames: [
                { key: "cat-walk1" },
                { key: "cat-walk2" },
            ],
            frameRate: 8,
            repeat: -1,
        });

        cat.anims.play("cat-walk", true);
        this.scene.tweens.add({
            targets: cat,
            x: targetX,
            duration: 1000,
            ease: "Linear",
            onUpdate: (tween) => {
                // Bobbing motion
                const progress = tween.progress;
                cat.y = 32 + Math.sin(progress * Math.PI * 8) * 3;
                meowBubble.setPosition(cat.x, cat.y - 40);
            },
            onComplete: () => {
                this.scene.tweens.add({
                    targets: cat,
                    y: targetY,
                    duration: 2000,
                    ease: "Linear",
                    onUpdate: (tween) => {
                        // Bobbing motion
                        const progress = tween.progress;
                        const baseY = 32 + (targetY - 32) * progress;
                        cat.y = baseY + Math.sin(progress * Math.PI * 8) * 3;
                        meowBubble.setPosition(cat.x, cat.y - 40);
                    },
                    onComplete: () => {
                        cat.anims.stop();
                        meowBubble.destroy();
                        this.showCatDialogue(cat);
                    },
                });
            },
        });
    }

    showCatDialogue(cat: Phaser.Physics.Arcade.Sprite) {
        this.inDialogue = true;

        const dialogueContainer = this.scene.add.container(640, 360);
        dialogueContainer.setScrollFactor(0);
        dialogueContainer.setDepth(3000);

        const bg = this.scene.add.rectangle(0, 0, 350, 280, 0x1a1a2e, 0.9);
        bg.setStrokeStyle(3, 0x28c6c9);

        const catAvatar = this.scene.add.text(-24, -105, "😸", {
            fontSize: "30px",
            color: "#ffffff",
        });

        const nameLabel = this.scene.add.text(0, -60, "", {
            fontSize: "20px",
            color: "#7A77A9",
            fontStyle: "bold",
        });
        nameLabel.setOrigin(0.5);

        const speakerName1 = this.scene.add.text(-138, -50, "Ósk", {
            fontSize: "18px",
            color: "#f9dc5c",
            fontStyle: "bold",
            align: "center",
        });
        speakerName1.setOrigin(0.5);

        const dialogueText1 = this.scene.add.text(
            0,
            -6,
            "Arya! What are you doing here?\nGo back home and take a nap\nwhile I interview for this job.",
            {
                fontSize: "16px",
                color: "#ffffff",
                align: "center",
                wordWrap: { width: 310 },
                lineSpacing: 10,
            }
        );
        dialogueText1.setOrigin(0.5);

        const speakerName2 = this.scene.add.text(-130, 60, "Arya", {
            fontSize: "18px",
            color: "#f9dc5c",
            fontStyle: "bold",
            align: "center",
        });
        speakerName2.setOrigin(0.5);

        const dialogueText2 = this.scene.add.text(-100, 78, "Meeoow 😽", {
            fontSize: "16px",
            color: "#ffffff",
            align: "center",
            wordWrap: { width: 310 },
            lineSpacing: 11,
        });
        dialogueText2.setOrigin(0.5);

        const closeButton = this.scene.add.text(0, 110, "Press Enter to close", {
            fontSize: "12px",
            color: "#aaaaaa",
        });
        closeButton.setOrigin(0.5);

        dialogueContainer.add([
            bg,
            catAvatar,
            nameLabel,
            speakerName1,
            speakerName2,
            dialogueText1,
            dialogueText2,
            closeButton,
        ]);

        const closeHandler = () => {
            dialogueContainer.destroy();
            this.scene.input.keyboard!.off("keydown-ENTER", closeHandler);
            this.inDialogue = false;
            const currentY = cat.y;

            cat.anims.play("cat-walk", true);

            this.scene.tweens.add({
                targets: cat,
                y: 32,
                duration: 2000,
                ease: "Linear",
                onUpdate: (tween) => {
                    // Bobbing motion
                    const progress = tween.progress;
                    const baseY = currentY - (currentY - 32) * progress;
                    cat.y = baseY + Math.sin(progress * Math.PI * 8) * 3;
                },
                onComplete: () => {
                    this.scene.tweens.add({
                        targets: cat,
                        x: 100 + 16,
                        y: 0,
                        duration: 1000,
                        ease: "Linear",
                        onUpdate: (tween) => {
                            // Bobbing motion
                            const progress = tween.progress;
                            cat.y = 32 - 32 * progress + Math.sin(progress * Math.PI * 8) * 3;
                        },
                        onComplete: () => {
                            cat.anims.stop();
                            cat.destroy();
                        },
                    });
                },
            });
        };
        this.scene.input.keyboard!.on("keydown-ENTER", closeHandler);
    }

    showTeemoDialogue(plantX: number, plantY: number) {
        this.teemoDialogueOpen = true;

        const dialogueContainer = this.scene.add.container(640, 360);
        dialogueContainer.setScrollFactor(0);
        dialogueContainer.setDepth(3000);

        const bg = this.scene.add.rectangle(0, 0, 350, 220, 0x1a1a2e, 0.9);
        bg.setStrokeStyle(3, 0x28c6c9);

        const teemoAvatar = this.scene.add.text(-16, -85, "🍄", {
            fontSize: "30px",
            color: "#ffffff",
        });

        const speakerName = this.scene.add.text(-130, -40, "Ósk", {
            fontSize: "18px",
            color: "#f9dc5c",
            fontStyle: "bold",
            align: "center",
        });
        speakerName.setOrigin(0.5);

        const dialogueText = this.scene.add.text(
            0,
            10,
            "Teemo?! What? How? Anyway, go back! I don't have the licence for you to be in my game!",
            {
                fontSize: "14px",
                color: "#ffffff",
                align: "center",
                wordWrap: { width: 300 },
                lineSpacing: 10,
            }
        );
        dialogueText.setOrigin(0.5);

        const closeButton = this.scene.add.text(0, 80, "Press Enter to close", {
            fontSize: "12px",
            color: "#aaaaaa",
        });
        closeButton.setOrigin(0.5);

        dialogueContainer.add([
            bg,
            teemoAvatar,
            speakerName,
            dialogueText,
            closeButton,
        ]);

        this.teemoDialogueContainer = dialogueContainer;
        this.teemoDialoguePlantX = plantX;
        this.teemoDialoguePlantY = plantY;
    }

    closeTeemoDialogue() {
        if (!this.teemoDialogueContainer) return;

        this.teemoDialogueContainer.destroy();
        this.teemoDialogueContainer = undefined;
        this.teemoDialogueOpen = false;

        if (this.teemoSprite && this.teemoDialoguePlantX !== undefined && this.teemoDialoguePlantY !== undefined) {
            // Make Teemo jump up and down before going back
            this.scene.tweens.add({
                targets: this.teemoSprite,
                y: this.teemoDialoguePlantY - 20,
                duration: 100,
                ease: "Sine.easeInOut",
                yoyo: true,
                repeat: 0,
                onComplete: () => {
                    this.scene.tweens.add({
                        targets: this.teemoSprite,
                        x: this.teemoDialoguePlantX - 10,
                        y: this.teemoDialoguePlantY - 0,
                        alpha: 0,
                        duration: 300,
                        ease: "Back.easeIn",
                        onComplete: () => {
                            this.teemoSprite?.destroy();
                            this.teemoSprite = undefined;
                        },
                    });
                },
            });
        }
    }

    updateTokenDisplay() {
        window.dispatchEvent(
            new StorageEvent("storage", {
                key: "osk-game-tokens",
                newValue: JSON.stringify([...this.tokens]),
            })
        );
    }

    // Getters for GameScene to access dialogue state
    getInDialogue(): boolean {
        return this.inDialogue;
    }

    getTeemoDialogueOpen(): boolean {
        return this.teemoDialogueOpen;
    }

    getWaitingForChoice(): boolean {
        return this.waitingForChoice;
    }

    getSelectedChoiceIndex(): number {
        return this.selectedChoiceIndex;
    }

    setSelectedChoiceIndex(index: number) {
        this.selectedChoiceIndex = index;
    }

    setTeemoSprite(teemoSprite: Phaser.GameObjects.Image) {
        this.teemoSprite = teemoSprite;
    }
}