import Phaser from 'phaser'
import SpriteCreatorMains from '../helpers/SpriteCreatorMains'
import SpriteCreatorNPCs from '../helpers/SpriteCreatorNPCs'
import SpriteCreatorAnimals from '../helpers/SpriteCreatorAnimals'
import EnvironmentCreator from '../helpers/EnvironmentCreator'

export default class MapManager {

    static createSprites(scene: Phaser.Scene) {
        SpriteCreatorMains.playerGraphics(scene, "player");
        SpriteCreatorMains.playerLeftUpGraphics(scene, "player-left-up");
        SpriteCreatorMains.playerRightUpGraphics(scene, "player-right-up");
        SpriteCreatorMains.majaGraphics(scene, "maja");
        SpriteCreatorMains.andersGraphics(scene, "anders");
        SpriteCreatorMains.frejaGraphics(scene, "freja");
        SpriteCreatorMains.jonasGraphics(scene, "jonas");
        SpriteCreatorNPCs.couchNPCGraphics(scene, "couch-npc");
        SpriteCreatorNPCs.couchBGNPCGraphics(scene, "couch-bg-npc");
        SpriteCreatorNPCs.bgNpc1Graphics(scene, "bg-npc-1");
        SpriteCreatorNPCs.bgNpc2Graphics(scene, "bg-npc-2");
        SpriteCreatorNPCs.bgNpc3Graphics(scene, "bg-npc-3");
        SpriteCreatorNPCs.bgNpc4Graphics(scene, "bg-npc-4");
        SpriteCreatorAnimals.catStandGraphics(scene, "cat-stand");
        SpriteCreatorAnimals.catWalk1Graphics(scene, "cat-walk1");
        SpriteCreatorAnimals.catWalk2Graphics(scene, "cat-walk2");
        SpriteCreatorAnimals.teemoGraphics(scene, "teemo");
        EnvironmentCreator.floorGraphics(scene, "floor");
        EnvironmentCreator.concreteFloorGraphics(scene, "concrete-floor");
        EnvironmentCreator.wallGraphics(scene, "wall");
        EnvironmentCreator.innerWallGraphics(scene, "inner-wall");
        EnvironmentCreator.deskGraphics(scene, "desk");
        EnvironmentCreator.computerGraphicsTopLeft(scene, "computer-top-left");
        EnvironmentCreator.plantGraphics(scene, "plant");
        EnvironmentCreator.bigPlantGraphics(scene, "big-plant");
        EnvironmentCreator.bigPlant2Graphics(scene, "big-plant-2");
        EnvironmentCreator.bigPlant3Graphics(scene, "big-plant-3");
        EnvironmentCreator.rugGraphics(scene, "rug");
        EnvironmentCreator.couchGraphics(scene, "couch");
        EnvironmentCreator.tvGraphics(scene, "tv");
        EnvironmentCreator.consoleGraphics(scene, "console");
        EnvironmentCreator.flowerGraphics(scene, "flower");
        EnvironmentCreator.bugPlayGraphics(scene, "bug-play");
        EnvironmentCreator.windowGraphics(scene, "window");
        EnvironmentCreator.entranceDoorGraphics(scene, "entrance-door");
        EnvironmentCreator.pinballGraphics(scene, "pinball");
        EnvironmentCreator.bookshelfGraphics(scene, "bookshelf");
        EnvironmentCreator.tableGraphics(scene, "meeting-table");
        EnvironmentCreator.laptopGraphics(scene, "laptop");
        EnvironmentCreator.dogBedGraphics(scene, "dog-bed");
    }

    static createWorld(scene: Phaser.Scene, player?: Phaser.Physics.Arcade.Sprite) {
        // Floors
        for (let y = 0; y < 21; y++) {
            for (let x = 0; x < 28; x++) {
                // Concrete floor for reception area
                const isReceptionArea = x < 9 && y < 9;
                const floorTile = isReceptionArea ? "concrete-floor" : "floor";
                scene.add
                    .image(x * 32, y * 32, floorTile)
                    .setOrigin(0)
                    .setDepth(0);
            }
        }
        // Walls with windows and door
        const walls = scene.physics.add.staticGroup();
        for (let x = 0; x < 28; x++) {
            if (x === 3) {
                const door = scene.add.image(x * 32, 0, "entrance-door");
                door.setOrigin(0);
                door.setDepth(3);
            } else if (x === 4) {
                continue;
            } else {
                walls
                    .create(x * 32, 0, "wall")
                    .setOrigin(0)
                    .setDepth(3)
                    .refreshBody();
            }
        }
        // Bottom wall
        for (let x = 0; x < 28; x++) {
            walls
                .create(x * 32, 20 * 32, "wall")
                .setOrigin(0)
                .setDepth(3)
                .refreshBody();
        }
        // Left wall
        for (let y = 0; y < 21; y++) {
            walls
                .create(0, y * 32, "wall")
                .setOrigin(0)
                .setDepth(3)
                .refreshBody();
        }
        // Right wall
        for (let y = 0; y < 21; y++) {
            walls
                .create(27 * 32, y * 32, "wall")
                .setOrigin(0)
                .setDepth(3)
                .refreshBody();
        }
        // Reception area inner wall
        for (let y = 1; y < 9; y++) {
            walls
                .create(8 * 32, y * 32, "inner-wall")
                .setOrigin(0)
                .setDepth(3)
                .refreshBody();
        }
        // Meeting room inner walls
        for (let x = 1; x < 9; x++) {
            if (x !== 4 && x !== 5) {
                walls
                    .create(x * 32, 12 * 32, "inner-wall")
                    .setOrigin(0)
                    .setDepth(3)
                    .refreshBody();
            }
        }
        for (let y = 12; y < 20; y++) {
            walls
                .create(9 * 32, y * 32, "inner-wall")
                .setOrigin(0)
                .setDepth(3)
                .refreshBody();
        }
        // Meeting room windows
        for (let x = 3; x < 6; x++) {
            const window = scene.add.image(x * 32, 20 * 32, "window");
            window.setOrigin(0);
            window.setDepth(3);
        }
        // CTO office inner walls
        for (let x = 19; x < 27; x++) {
            if (x !== 23 && x !== 24) {
                walls
                    .create(x * 32, 14 * 32, "inner-wall")
                    .setOrigin(0)
                    .setDepth(3)
                    .refreshBody();
            }
        }
        for (let y = 14; y < 20; y++) {
            walls
                .create(19 * 32, y * 32, "inner-wall")
                .setOrigin(0)
                .setDepth(3)
                .refreshBody();
        }
        // CTO office windows
        for (let x = 22; x < 25; x++) {
            const window = scene.add.image(x * 32, 20 * 32, "window");
            window.setOrigin(0);
            window.setDepth(3);
        }
        // Top-right windows
        for (let x = 20; x < 24; x++) {
            const window = scene.add.image(x * 32, 0, "window");
            window.setOrigin(0);
            window.setDepth(3);
        }
        // Top-left windows
        for (let x = 10; x < 14; x++) {
            const window = scene.add.image(x * 32, 0, "window");
            window.setOrigin(0);
            window.setDepth(3);
        }
        // Collision after player is created
        if (player) {
            scene.physics.add.collider(player, walls);
        }
    }

    static createPlayer(scene: Phaser.Scene, onPlayerReady: () => void) {
        // Start position in reception area
        const player = scene.physics.add.sprite(140, 24, "player");
        player.setCollideWorldBounds(true);
        player.setDepth(10);
        player.setAlpha(0);
        // Fade in from the top
        scene.time.delayedCall(1000, () => {
            if (player) {
                scene.tweens.add({
                    targets: player,
                    alpha: 1,
                    y: player.y + 48,
                    duration: 2000,
                    ease: "Power2",
                    onComplete: () => {
                        onPlayerReady();
                    },
                });
            }
        });
        // Walking animations
        scene.anims.create({
            key: "walk-down",
            frames: [{ key: "player-left-up" }, { key: "player-right-up" }],
            frameRate: 8,
            repeat: -1,
        });
        scene.anims.create({
            key: "walk-up",
            frames: [{ key: "player-left-up" }, { key: "player-right-up" }],
            frameRate: 8,
            repeat: -1,
        });
        scene.anims.create({
            key: "walk-left",
            frames: [{ key: "player-left-up" }, { key: "player-right-up" }],
            frameRate: 8,
            repeat: -1,
        });
        scene.anims.create({
            key: "walk-right",
            frames: [{ key: "player-left-up" }, { key: "player-right-up" }],
            frameRate: 8,
            repeat: -1,
        });

        const nameTagBg = scene.add.graphics();
        nameTagBg.fillStyle(0x94788f);
        nameTagBg.fillRoundedRect(0, 0, 60, 24, 3);
        nameTagBg.generateTexture("osk-nametag-bg", 60, 24);
        nameTagBg.destroy();

        const nameTag = scene.add.text(player.x, player.y + 36, "Ósk", {
            fontSize: "14px",
            color: "#ffffff",
            backgroundColor: "#94788f",
            padding: { x: 6, y: 3 },
        });
        nameTag.setOrigin(0.5);
        nameTag.setDepth(11);
        nameTag.setAlpha(0);
        // Fade in the nametag
        scene.time.delayedCall(1000, () => {
            scene.tweens.add({
                targets: nameTag,
                alpha: 1,
                duration: 1000,
                ease: "Power2",
            });
        });
        // Nametag position
        scene.events.on("postupdate", () => {
            if (player) {
                nameTag.setPosition(player.x, player.y + 36);
            }
        });

        return player;
    }

    static createNPCs(scene: Phaser.Scene, player: Phaser.Physics.Arcade.Sprite, npcs: Map<string, Phaser.Physics.Arcade.Sprite>, npcNameTags: Map<string, Phaser.GameObjects.Text>) {
        if (!player) return;
        const npcConfigs = [
            {
                name: "maja",
                x: 120,
                y: 170,
                label: "Maja",
                deskX: 120,
                deskY: 130,
            },
            {
                name: "jonas",
                x: 732,
                y: 580,
                label: "Jonas",
                deskX: 732,
                deskY: 540,
            },
        ];

        npcConfigs.forEach((config) => {
            const deskGroup = scene.physics.add.staticGroup();
            const desk = deskGroup.create(config.deskX - 32, config.deskY, "desk");
            desk.setOrigin(0);
            desk.setDepth(5);
            desk.refreshBody();
            scene.physics.add.collider(player, deskGroup);

            const computer = scene.add.image(
                config.deskX,
                config.deskY + 10,
                "computer-top-left"
            );
            computer.setDepth(6);

            const npc = scene.physics.add.sprite(config.x, config.y, config.name);
            npc.setImmovable(true);
            npc.setDepth(10);
            npcs.set(config.name, npc);
            scene.physics.add.collider(player, npc);

            const nameTag = scene.add.text(config.x, config.y + 36, config.label, {
                fontSize: "14px",
                color: "#ffffff",
                backgroundColor: "#20b2aa",
                padding: { x: 6, y: 3 },
            });
            nameTag.setOrigin(0.5);
            nameTag.setDepth(5);

            npcNameTags.set(config.name, nameTag);
            const savedTokens = localStorage.getItem("osk-game-tokens");
            const tokenSet = savedTokens
                ? new Set(JSON.parse(savedTokens))
                : new Set();

            const shouldShowNametag =
                config.name === "maja" ||
                (config.name === "anders" && tokenSet.has("visitor-badge")) ||
                (config.name === "jonas" && tokenSet.has("dev-token"));
            nameTag.setAlpha(shouldShowNametag ? 1 : 0);

            if (config.name === "maja") {
                const flowerGroup = scene.physics.add.staticGroup();
                const plant = flowerGroup.create(
                    config.deskX + 80 - 32,
                    config.deskY + 20,
                    "plant"
                );
                plant.setScale(0.98);
                plant.setDepth(6);
                plant.refreshBody();
                const rug = scene.add.image(config.x, config.y + 40, "rug");
                rug.setDepth(1);
            }
        });

        const plantPositions = [
            { x: 350, y: 60, variant: "big-plant" },
            { x: 700, y: 60, variant: "big-plant-2" },
            { x: 850, y: 350, variant: "big-plant-3" },
        ];
        plantPositions.forEach((pos) => {
            const bigPlant = scene.add.image(pos.x, pos.y, pos.variant);
            bigPlant.setDepth(4);
        });

        const pinballGroup = scene.physics.add.staticGroup();
        const breakRoomLeftWallX = 9 * 32;
        const breakRoomTopY = 12 * 32;
        const pinball = pinballGroup.create(
            breakRoomLeftWallX + 32 + 32,
            breakRoomTopY + 30,
            "pinball"
        );
        pinball.setOrigin(0.5);
        pinball.setDepth(4);
        pinball.refreshBody();
        scene.physics.add.collider(player, pinballGroup);
        let pinballBubble: Phaser.GameObjects.Container | null = null;
        scene.events.on("postupdate", () => {
            if (!player) return;

            const distance = Phaser.Math.Distance.Between(
                player.x,
                player.y,
                pinball.x,
                pinball.y
            );
            if (distance < 60) {
                if (!pinballBubble) {
                    pinballBubble = scene.add.container(pinball.x, pinball.y - 50);
                    pinballBubble.setDepth(15);

                    const bubbleBg = scene.add.graphics();
                    // Shadow
                    bubbleBg.fillStyle(0x000000, 0.3);
                    bubbleBg.beginPath();
                    bubbleBg.moveTo(0, -28);
                    bubbleBg.lineTo(5, -18);
                    bubbleBg.lineTo(15, -30);
                    bubbleBg.lineTo(20, -18);
                    bubbleBg.lineTo(30, -20);
                    bubbleBg.lineTo(26, -8);
                    bubbleBg.lineTo(35, 0);
                    bubbleBg.lineTo(26, 8);
                    bubbleBg.lineTo(28, 18);
                    bubbleBg.lineTo(18, 12);
                    bubbleBg.lineTo(12, 25);
                    bubbleBg.lineTo(5, 15);
                    bubbleBg.lineTo(0, 22);
                    bubbleBg.lineTo(-5, 15);
                    bubbleBg.lineTo(-12, 25);
                    bubbleBg.lineTo(-18, 12);
                    bubbleBg.lineTo(-28, 18);
                    bubbleBg.lineTo(-26, 8);
                    bubbleBg.lineTo(-35, 0);
                    bubbleBg.lineTo(-26, -8);
                    bubbleBg.lineTo(-30, -20);
                    bubbleBg.lineTo(-20, -18);
                    bubbleBg.lineTo(-15, -30);
                    bubbleBg.lineTo(-5, -18);
                    bubbleBg.closePath();
                    bubbleBg.fillPath();
                    // Spiky bubble shape
                    bubbleBg.fillStyle(0xffffff, 1);
                    bubbleBg.lineStyle(2.5, 0xffd966, 1);
                    bubbleBg.beginPath();
                    bubbleBg.moveTo(0, -30);
                    bubbleBg.lineTo(3, -20);
                    bubbleBg.lineTo(13, -32);
                    bubbleBg.lineTo(18, -20);
                    bubbleBg.lineTo(28, -22);
                    bubbleBg.lineTo(24, -10);
                    bubbleBg.lineTo(33, -2);
                    bubbleBg.lineTo(24, 6);
                    bubbleBg.lineTo(26, 16);
                    bubbleBg.lineTo(16, 10);
                    bubbleBg.lineTo(10, 23);
                    bubbleBg.lineTo(3, 13);
                    bubbleBg.lineTo(0, 20);
                    bubbleBg.lineTo(-3, 13);
                    bubbleBg.lineTo(-10, 23);
                    bubbleBg.lineTo(-16, 10);
                    bubbleBg.lineTo(-26, 16);
                    bubbleBg.lineTo(-24, 6);
                    bubbleBg.lineTo(-33, -2);
                    bubbleBg.lineTo(-24, -10);
                    bubbleBg.lineTo(-28, -22);
                    bubbleBg.lineTo(-18, -20);
                    bubbleBg.lineTo(-13, -32);
                    bubbleBg.lineTo(-3, -20);
                    bubbleBg.closePath();
                    bubbleBg.fillPath();
                    bubbleBg.strokePath();
                    const bubbleText = scene.add.text(4, -4, "PING!", {
                        fontSize: "12px",
                        color: "#000000",
                        fontStyle: "bold",
                    });
                    bubbleText.setOrigin(0.5);
                    pinballBubble.add([bubbleBg, bubbleText]);
                }
            } else {
                if (pinballBubble) {
                    pinballBubble.destroy();
                    pinballBubble = null;
                }
            }
        });

        // Company logo on the floor
        const floorLogoX = 570;
        const floorLogoY = 355;
        let floorLogo = scene.add.image(floorLogoX, floorLogoY, "company-logo");
        if (floorLogo?.texture?.key === "__MISSING") {
            floorLogo.destroy();
        }
        else {
            floorLogo.setAlpha(0.16);
            floorLogo.setDepth(0);
            floorLogo.setScale(0.18);
        }

        // Break room furniture
        const breakRoomX = 482;
        const breakRoomY = 560;
        const breakRoomObjects = scene.physics.add.staticGroup();
        const couch = breakRoomObjects.create(breakRoomX, breakRoomY, "couch");
        couch.setOrigin(0.5);
        couch.setDepth(4);
        couch.refreshBody();

        const tv = breakRoomObjects.create(breakRoomX, breakRoomY - 70, "tv");
        tv.setOrigin(0.5);
        tv.setDepth(4);
        tv.refreshBody();

        const gameConsole = scene.add.image(breakRoomX, breakRoomY - 40, "console");
        gameConsole.setScale(0.6);
        gameConsole.setDepth(4);

        const breakRoomPlant1 = scene.add.image(
            breakRoomX - 80,
            breakRoomY + 40,
            "big-plant-2"
        );
        breakRoomPlant1.setDepth(4);
        const breakRoomPlant2 = scene.add.image(
            breakRoomX + 80,
            breakRoomY + 40,
            "big-plant-3"
        );
        breakRoomPlant2.setDepth(4);

        scene.physics.add.collider(player, breakRoomObjects);

        // Employees on couch
        const couch1 = scene.physics.add.sprite(breakRoomX - 30, breakRoomY, "couch-npc");
        couch1.setImmovable(true);
        couch1.setDepth(10);

        const couch2 = scene.physics.add.sprite(
            breakRoomX + 30,
            breakRoomY,
            "couch-bg-npc"
        );
        couch2.setImmovable(true);
        couch2.setDepth(10);

        // Meeting room table
        const meetingTableX = 5 * 32;
        const meetingTableY = 16 * 32;

        const meetingTableGroup = scene.physics.add.staticGroup();
        const table = meetingTableGroup.create(
            meetingTableX,
            meetingTableY,
            "meeting-table"
        );
        table.setOrigin(0.5);
        table.setDepth(4);
        table.refreshBody();
        scene.physics.add.collider(player, meetingTableGroup);

        const flower = scene.add.image(meetingTableX, meetingTableY - 16, "flower");
        flower.setDepth(6);

        const frejaX = meetingTableX;
        const frejaY = meetingTableY + 48;
        const freja = scene.physics.add.sprite(frejaX, frejaY, "freja");
        freja.setImmovable(true);
        freja.setDepth(10);
        npcs.set("freja", freja);
        scene.physics.add.collider(player, freja);

        const laptop = scene.add.image(frejaX, meetingTableY + 20, "laptop");
        laptop.setScale(0.8);
        laptop.setDepth(6);

        const frejaTag = scene.add.text(frejaX, frejaY + 36, "Freja", {
            fontSize: "14px",
            color: "#ffffff",
            backgroundColor: "#20b2aa",
            padding: { x: 6, y: 3 },
        });
        frejaTag.setOrigin(0.5);
        frejaTag.setDepth(5);

        npcNameTags.set("freja", frejaTag);
        const savedTokens = localStorage.getItem("osk-game-tokens");
        const tokenSet = savedTokens ? new Set(JSON.parse(savedTokens)) : new Set();
        frejaTag.setAlpha(tokenSet.has("hr-token") ? 1 : 0);

        const bookshelf = scene.physics.add.staticGroup();
        const shelf = bookshelf.create(
            64,
            336,
            "bookshelf"
        );
        shelf.setOrigin(0.5);
        shelf.setDepth(15);
        shelf.refreshBody();
        scene.physics.add.collider(player, bookshelf);

        const bugPlay = scene.add.image(
            64,
            276,
            "bug-play"
        );
        bugPlay.setScale(1.2);
        bugPlay.setDepth(15);

        const dogBedX = 832;
        const dogBedY = 608;
        const dogBed = scene.add.image(dogBedX, dogBedY, "dog-bed");
        dogBed.setDepth(3);
    }

    static createBackgroundNPCs(scene: Phaser.Scene, player: Phaser.Physics.Arcade.Sprite, npcs: Map<string, Phaser.Physics.Arcade.Sprite>, npcNameTags: Map<string, Phaser.GameObjects.Text>) {
        if (!player) return;
        for (let i = 0; i < 2; i++) {
            for (let side = 0; side < 2; side++) {
                const bgNPCIndex = i * 2 + side + 1;

                const deskX = 650 + (side === 0 ? 0 : 120);
                const deskY = 120 + i * 90;
                const npcX = deskX;
                const npcY = deskY + 40;

                const deskGroup = scene.physics.add.staticGroup();
                const desk = deskGroup.create(deskX - 32, deskY, "desk");
                desk.setOrigin(0);
                desk.setDepth(5);
                desk.refreshBody();
                scene.physics.add.collider(player, deskGroup);

                const compGraphics = scene.add.graphics();
                compGraphics.fillStyle(0x2c3e50);
                compGraphics.fillRect(16, 8, 32, 24);

                const screenColors = [0x9b59b6, 0x1abc9c, 0xf39c12, 0xe74c3c];
                compGraphics.fillStyle(screenColors[i * 2 + side]);
                compGraphics.fillRect(19, 11, 26, 18);
                compGraphics.fillStyle(0x2c3e50);
                compGraphics.fillRect(28, 32, 8, 6);
                compGraphics.fillRect(24, 38, 16, 3);
                compGraphics.fillStyle(0x34495e);
                compGraphics.fillRect(14, 42, 36, 5);
                compGraphics.generateTexture(`computer-tr-${bgNPCIndex}`, 64, 48);
                compGraphics.destroy();

                const computer = scene.add.image(
                    deskX,
                    deskY + 10,
                    `computer-tr-${bgNPCIndex}`
                );
                computer.setDepth(6);

                const bgNPC = scene.physics.add.sprite(
                    npcX,
                    npcY,
                    `bg-npc-${bgNPCIndex}`
                );
                bgNPC.setImmovable(true);
                bgNPC.setDepth(10);
                scene.physics.add.collider(player, bgNPC);
            }
        }

        const topLeftDesks = [
            { x: 320, y: 120, hasNPC: true, npcType: "bg" },
            { x: 320, y: 210, hasNPC: false },
            { x: 440, y: 120, hasNPC: false },
            { x: 440, y: 210, hasNPC: true, npcType: "anders" },
        ];

        topLeftDesks.forEach((deskConfig, idx) => {
            const deskGroup = scene.physics.add.staticGroup();
            const desk = deskGroup.create(deskConfig.x - 32, deskConfig.y, "desk");
            desk.setOrigin(0);
            desk.setDepth(5);
            desk.refreshBody();
            scene.physics.add.collider(player, deskGroup);

            let computerTexture = "computer-top-left";
            if (deskConfig.hasNPC) {
                const compGraphics = scene.add.graphics();
                compGraphics.fillStyle(0x2c3e50);
                compGraphics.fillRect(16, 8, 32, 24);

                if (deskConfig.npcType === "anders") {
                    compGraphics.fillStyle(0x27ae60);
                } else {
                    compGraphics.fillStyle(0xe74c3c);
                }
                compGraphics.fillRect(19, 11, 26, 18);
                compGraphics.fillStyle(0x2c3e50);
                compGraphics.fillRect(28, 32, 8, 6);
                compGraphics.fillRect(24, 38, 16, 3);
                compGraphics.fillStyle(0x34495e);
                compGraphics.fillRect(14, 42, 36, 5);
                compGraphics.generateTexture(`computer-tl-${idx}`, 64, 48);
                compGraphics.destroy();
                computerTexture = `computer-tl-${idx}`;
            }

            const computer = scene.add.image(
                deskConfig.x,
                deskConfig.y + 10,
                computerTexture
            );
            computer.setDepth(6);

            if (deskConfig.hasNPC) {
                const npcX = deskConfig.x;
                const npcY = deskConfig.y + 40;

                if (deskConfig.npcType === "anders") {
                    const anders = scene.physics.add.sprite(npcX, npcY, "anders");
                    anders.setImmovable(true);
                    anders.setDepth(10);
                    npcs.set("anders", anders);
                    scene.physics.add.collider(player, anders);

                    const andersTag = scene.add.text(npcX, npcY + 36, "Anders", {
                        fontSize: "14px",
                        color: "#ffffff",
                        backgroundColor: "#20b2aa",
                        padding: { x: 6, y: 3 },
                    });
                    andersTag.setOrigin(0.5);
                    andersTag.setDepth(5);

                    npcNameTags.set("anders", andersTag);
                    const savedTokens = localStorage.getItem("osk-game-tokens");
                    const tokenSet = savedTokens
                        ? new Set(JSON.parse(savedTokens))
                        : new Set();
                    andersTag.setAlpha(tokenSet.has("visitor-badge") ? 1 : 0);
                } else {
                    SpriteCreatorNPCs.bgNPCGraphics(scene, `bg-npc-tl-${idx}`);

                    const bgNPC = scene.physics.add.sprite(npcX, npcY, `bg-npc-tl-${idx}`);
                    bgNPC.setImmovable(true);
                    bgNPC.setDepth(10);
                    scene.physics.add.collider(player, bgNPC);
                }
            }
        });
    }

    static createAreaLabels(scene: Phaser.Scene) {
        const areas = [
            { name: "Reception", x: 145, y: 88 },
            { name: "Open Office", x: 532, y: 96 },
            { name: "Break Room", x: 482, y: 436 },
            { name: "Meeting Room", x: 80, y: 432 },
            { name: "CTO Office", x: 752, y: 500 },
        ];

        areas.forEach((area) => {
            const label = scene.add.text(area.x, area.y, area.name, {
                fontSize: "20px",
                color: "#1c8a8c",
                fontStyle: "bold",
                stroke: "#ffffff",
                strokeThickness: 3,
            });
            label.setOrigin(area.name === "Meeting Room" ? 0 : 0.5);
            label.setDepth(2);
            label.setAlpha(0.7);
        });
    }

    static createInteractionPrompt(scene: Phaser.Scene) {
        const interactionPrompt = scene.add.container(0, 0);
        interactionPrompt.setScrollFactor(1);
        interactionPrompt.setDepth(500);

        const bg = scene.add.rectangle(10, 0, 250, 40, 0x1a1a2e, 0.9);
        bg.setStrokeStyle(2, 0xf9dc5c);

        const text = scene.add.text(10, 0, "", {
            fontSize: "14px",
            color: "#ffffff",
            fontStyle: "bold",
        });
        text.setOrigin(0.5);

        interactionPrompt.add([bg, text]);
        interactionPrompt.setVisible(false);
        return interactionPrompt;
    }

    static createDialogueUI(scene: Phaser.Scene) {
        const width = 680;
        const height = 140;
        const x = 640;
        const y = 480;

        const dialogueBox = scene.add.container(x, y);
        dialogueBox.setScrollFactor(0);
        dialogueBox.setDepth(2000);

        const bg = scene.add.rectangle(0, 0, width, height, 0x1a1a2e, 0.95);
        bg.setStrokeStyle(2, 0x28c6c9);

        const nameText = scene.add.text(-width / 2 + 20, -height / 2 + 10, "", {
            fontSize: "18px",
            color: "#f9dc5c",
            fontStyle: "bold",
        });

        const dialogueText = scene.add.text(-width / 2 + 20, -height / 2 + 40, "", {
            fontSize: "14px",
            color: "#ffffff",
            wordWrap: { width: width - 40 },
            lineSpacing: 8,
        });

        const hintText = scene.add.text(
            width / 2 - 20,
            height / 2 - 15,
            "Enter to continue",
            {
                fontSize: "12px",
                color: "#aaaaaa",
            }
        );
        hintText.setOrigin(1, 0.5);

        dialogueBox.add([bg, nameText, dialogueText, hintText]);
        dialogueBox.setVisible(false);
        return { dialogueBox, nameText, dialogueText };
    }
}