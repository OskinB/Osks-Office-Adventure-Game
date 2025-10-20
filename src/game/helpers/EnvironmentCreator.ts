import Phaser from 'phaser'

export default class EnvironmentCreator {

    static floorGraphics(scene: Phaser.Scene, key = 'floor'): string {
        if (scene.textures.exists(key)) return key
        const floorGraphics = scene.add.graphics();
        floorGraphics.fillStyle(0xd4d4d4);
        floorGraphics.fillRect(0, 0, 32, 32);
        // Subtle pattern
        floorGraphics.fillStyle(0xc8c8c8, 0.1);
        floorGraphics.fillRect(0, 0, 16, 16);
        floorGraphics.fillRect(16, 16, 16, 16);
        floorGraphics.generateTexture(key, 32, 32);
        floorGraphics.destroy();
        return key
    }

    static concreteFloorGraphics(scene: Phaser.Scene, key = 'concrete-floor'): string {
        if (scene.textures.exists(key)) return key
        const concreteFloorGraphics = scene.add.graphics();
        concreteFloorGraphics.fillStyle(0xd0d0d0);
        concreteFloorGraphics.fillRect(0, 0, 32, 32);
        // Concrete texture
        concreteFloorGraphics.fillStyle(0xc0c0c0, 0.3);
        concreteFloorGraphics.fillRect(4, 4, 8, 8);
        concreteFloorGraphics.fillRect(20, 12, 6, 6);
        concreteFloorGraphics.fillRect(8, 22, 10, 8);
        concreteFloorGraphics.fillStyle(0xe0e0e0, 0.2);
        concreteFloorGraphics.fillRect(16, 2, 12, 10);
        concreteFloorGraphics.fillRect(2, 18, 8, 12);
        concreteFloorGraphics.generateTexture(key, 32, 32);
        concreteFloorGraphics.destroy();
        return key
    }

    static wallGraphics(scene: Phaser.Scene, key = 'wall'): string {
        if (scene.textures.exists(key)) return key
        const wallGraphics = scene.add.graphics();
        wallGraphics.fillStyle(0x8b7355);
        wallGraphics.fillRect(0, 0, 32, 32);
        wallGraphics.generateTexture(key, 32, 32);
        wallGraphics.destroy();
        return key
    }

    static innerWallGraphics(scene: Phaser.Scene, key = 'inner-wall'): string {
        if (scene.textures.exists(key)) return key
        const innerWallGraphics = scene.add.graphics();
        innerWallGraphics.fillStyle(0xa89984);
        innerWallGraphics.fillRect(0, 0, 32, 32);
        innerWallGraphics.lineStyle(2, 0x6b5d52);
        innerWallGraphics.strokeRect(0, 0, 32, 32);
        innerWallGraphics.generateTexture(key, 32, 32);
        innerWallGraphics.destroy();
        return key
    }

    static windowGraphics(scene: Phaser.Scene, key = 'window'): string {
        if (scene.textures.exists(key)) return key
        const windowGraphics = scene.add.graphics();
        // Sky blue glass
        windowGraphics.fillStyle(0x87ceeb);
        windowGraphics.fillRect(0, 0, 32, 32);
        // Reflection
        windowGraphics.fillStyle(0xffffff, 0.4);
        windowGraphics.fillRect(3, 3, 26, 26);
        // Frame
        windowGraphics.lineStyle(2, 0x4a4a4a);
        windowGraphics.strokeRect(0, 0, 32, 32);
        windowGraphics.generateTexture(key, 32, 32);
        windowGraphics.destroy();
        return key
    }

    static entranceDoorGraphics(scene: Phaser.Scene, key = 'entrance-door'): string {
        if (scene.textures.exists(key)) return key
        const entranceDoorGraphics = scene.add.graphics();
        // Main door color
        entranceDoorGraphics.fillStyle(0x6b5d52);
        entranceDoorGraphics.fillRect(0, 0, 64, 32);
        // Door panels
        entranceDoorGraphics.lineStyle(2, 0x4a3f36);
        entranceDoorGraphics.strokeRect(4, 4, 26, 24);
        entranceDoorGraphics.strokeRect(34, 4, 26, 24);
        // Left knob
        entranceDoorGraphics.fillStyle(0xffd700);
        entranceDoorGraphics.fillCircle(30, 16, 6);
        entranceDoorGraphics.fillStyle(0xffed4e);
        entranceDoorGraphics.fillCircle(28, 14, 2);
        entranceDoorGraphics.fillStyle(0xb8860b);
        entranceDoorGraphics.fillCircle(32, 18, 2);
        entranceDoorGraphics.fillStyle(0x1a1a1a);
        entranceDoorGraphics.fillRect(29, 20, 2, 3);
        // Right knob
        entranceDoorGraphics.fillStyle(0xffd700);
        entranceDoorGraphics.fillCircle(34, 16, 6);
        entranceDoorGraphics.fillStyle(0xffed4e);
        entranceDoorGraphics.fillCircle(32, 14, 2);
        entranceDoorGraphics.fillStyle(0xb8860b);
        entranceDoorGraphics.fillCircle(36, 18, 2);
        entranceDoorGraphics.fillStyle(0x1a1a1a);
        entranceDoorGraphics.fillRect(33, 20, 2, 3);
        entranceDoorGraphics.generateTexture(key, 64, 32);
        entranceDoorGraphics.destroy();
        return key
    }

    static deskGraphics(scene: Phaser.Scene, key = 'desk'): string {
        if (scene.textures.exists(key)) return key
        const deskGraphics = scene.add.graphics();
        // Shadow
        deskGraphics.fillStyle(0x000000, 0.15);
        deskGraphics.fillEllipse(32, 50, 60, 12);
        // Main desk surface
        deskGraphics.fillStyle(0x8b6f47);
        deskGraphics.fillRect(0, 0, 64, 48);
        // Wood grain details
        deskGraphics.fillStyle(0x7b5f37);
        deskGraphics.fillRect(8, 12, 48, 2);
        deskGraphics.fillRect(10, 28, 44, 1);
        // Edge highlight
        deskGraphics.fillStyle(0x9b7f57);
        deskGraphics.fillRect(0, 0, 64, 3);
        deskGraphics.fillRect(0, 0, 3, 48);
        // Border
        deskGraphics.lineStyle(3, 0x6b5848);
        deskGraphics.strokeRect(3, 3, 58, 42);
        // Desk legs with shadow
        deskGraphics.fillStyle(0x6b5848);
        deskGraphics.fillRect(5, 40, 6, 8);
        deskGraphics.fillRect(53, 40, 6, 8);
        deskGraphics.fillStyle(0x5b4838);
        deskGraphics.fillRect(5, 46, 6, 2);
        deskGraphics.fillRect(53, 46, 6, 2);
        deskGraphics.generateTexture(key, 64, 48);
        deskGraphics.destroy();
        return key
    }

    static computerGraphicsTopLeft(scene: Phaser.Scene, key = 'computer-top-left'): string {
        if (scene.textures.exists(key)) return key
        const computerGraphicsTopLeft = scene.add.graphics();
        // Shadow
        computerGraphicsTopLeft.fillStyle(0x000000, 0.2);
        computerGraphicsTopLeft.fillEllipse(32, 48, 48, 8);
        // Monitor frame
        computerGraphicsTopLeft.fillStyle(0x2c3e50);
        computerGraphicsTopLeft.fillRect(16, 8, 32, 24);
        computerGraphicsTopLeft.fillStyle(0x1c2e40);
        computerGraphicsTopLeft.fillRect(16, 8, 32, 2);
        computerGraphicsTopLeft.fillRect(16, 8, 2, 24);
        // Screen
        computerGraphicsTopLeft.fillStyle(0x3c4e60);
        computerGraphicsTopLeft.fillRect(18, 10, 28, 20);
        // Screen with reflection
        computerGraphicsTopLeft.fillStyle(0x3498db);
        computerGraphicsTopLeft.fillRect(19, 11, 26, 18);
        computerGraphicsTopLeft.fillStyle(0xffffff, 0.15);
        computerGraphicsTopLeft.fillRect(20, 12, 12, 8);
        // Stand with detail
        computerGraphicsTopLeft.fillStyle(0x2c3e50);
        computerGraphicsTopLeft.fillRect(28, 32, 8, 6);
        computerGraphicsTopLeft.fillRect(24, 38, 16, 3);
        computerGraphicsTopLeft.fillStyle(0x3c4e60);
        computerGraphicsTopLeft.fillRect(28, 32, 8, 1);
        // Keyboard with keys
        computerGraphicsTopLeft.fillStyle(0x34495e);
        computerGraphicsTopLeft.fillRect(14, 42, 36, 5);
        computerGraphicsTopLeft.fillStyle(0x2c3e50);
        for (let i = 0; i < 8; i++) {
            computerGraphicsTopLeft.fillRect(16 + i * 4, 43, 3, 3);
        }
        computerGraphicsTopLeft.generateTexture(key, 64, 48);
        computerGraphicsTopLeft.destroy();
        return key
    }

    static plantGraphics(scene: Phaser.Scene, key = 'plant'): string {
        if (scene.textures.exists(key)) return key
        const plantGraphics = scene.add.graphics();
        // Detailed terracotta pot with shadow
        plantGraphics.fillStyle(0x000000, 0.15);
        plantGraphics.fillEllipse(24, 44, 16, 4);
        // Pot rim
        plantGraphics.fillStyle(0x8b5a2b);
        plantGraphics.fillEllipse(24, 30, 16, 4);
        // Pot body
        plantGraphics.fillStyle(0x6b4423);
        plantGraphics.fillRect(16, 30, 16, 12);
        plantGraphics.fillStyle(0x7b5433);
        plantGraphics.fillRect(17, 31, 2, 11);
        // Pot base
        plantGraphics.fillStyle(0x5b3413);
        plantGraphics.fillEllipse(24, 42, 18, 4);
        // Soil
        plantGraphics.fillStyle(0x3d2817);
        plantGraphics.fillEllipse(24, 30, 14, 3);
        // Multiple colorful flowers
        plantGraphics.fillStyle(0xff6b9d);
        plantGraphics.fillCircle(20, 22, 6);
        plantGraphics.fillStyle(0xffd93d);
        plantGraphics.fillCircle(28, 20, 6);
        plantGraphics.fillStyle(0x9d4edd);
        plantGraphics.fillCircle(24, 18, 5);
        plantGraphics.fillStyle(0x28c6c9);
        plantGraphics.fillCircle(24, 26, 5);
        // Flower centers
        plantGraphics.fillStyle(0xffffff);
        plantGraphics.fillCircle(20, 22, 2);
        plantGraphics.fillCircle(28, 20, 2);
        plantGraphics.fillCircle(24, 18, 1.5);
        plantGraphics.fillCircle(24, 26, 1.5);
        // Stems
        plantGraphics.fillStyle(0x2ecc71);
        plantGraphics.fillRect(23, 22, 2, 8);
        plantGraphics.fillRect(19, 24, 2, 6);
        plantGraphics.fillRect(27, 24, 2, 6);
        plantGraphics.generateTexture(key, 48, 48);
        plantGraphics.destroy();
        return key
    }

    static bigPlantGraphics(scene: Phaser.Scene, key = 'big-plant'): string {
        if (scene.textures.exists(key)) return key
        const bigPlantGraphics = scene.add.graphics();
        // Pot shadow
        bigPlantGraphics.fillStyle(0x000000, 0.15);
        bigPlantGraphics.fillEllipse(24, 50, 18, 4);
        // Pot
        bigPlantGraphics.fillStyle(0x8b5a2b);
        bigPlantGraphics.fillEllipse(24, 40, 16, 4);
        bigPlantGraphics.fillStyle(0x6b4423);
        bigPlantGraphics.fillRect(16, 40, 16, 8);
        bigPlantGraphics.fillStyle(0x5b3413);
        bigPlantGraphics.fillEllipse(24, 48, 18, 4);
        // Foliage
        bigPlantGraphics.fillStyle(0x1e8449);
        bigPlantGraphics.fillCircle(24, 24, 20);
        bigPlantGraphics.fillStyle(0x27ae60);
        bigPlantGraphics.fillCircle(20, 20, 13);
        bigPlantGraphics.fillCircle(28, 22, 11);
        bigPlantGraphics.fillCircle(16, 26, 8);
        bigPlantGraphics.fillCircle(32, 28, 7);
        bigPlantGraphics.generateTexture(key, 48, 52);
        bigPlantGraphics.destroy();
        return key
    }

    static bigPlant2Graphics(scene: Phaser.Scene, key = 'big-plant-2'): string {
        if (scene.textures.exists(key)) return key
        const bigPlant2Graphics = scene.add.graphics();
        // Pot shadow
        bigPlant2Graphics.fillStyle(0x000000, 0.15);
        bigPlant2Graphics.fillEllipse(25, 50, 16, 4);
        // Pot
        bigPlant2Graphics.fillStyle(0x8b5a2b);
        bigPlant2Graphics.fillEllipse(25, 38, 14, 4);
        bigPlant2Graphics.fillStyle(0x6b4423);
        bigPlant2Graphics.fillRect(18, 38, 14, 10);
        bigPlant2Graphics.fillStyle(0x5b3413);
        bigPlant2Graphics.fillEllipse(25, 48, 16, 4);
        // Foliage
        bigPlant2Graphics.fillStyle(0x2ecc71);
        bigPlant2Graphics.fillCircle(25, 22, 16);
        bigPlant2Graphics.fillStyle(0x58d68d);
        bigPlant2Graphics.fillCircle(22, 18, 10);
        bigPlant2Graphics.fillCircle(28, 20, 9);
        bigPlant2Graphics.fillCircle(18, 24, 7);
        bigPlant2Graphics.fillCircle(32, 22, 6);
        bigPlant2Graphics.generateTexture(key, 48, 52);
        bigPlant2Graphics.destroy();
        return key
    }

    static bigPlant3Graphics(scene: Phaser.Scene, key = 'big-plant-3'): string {
        if (scene.textures.exists(key)) return key
        const bigPlant3Graphics = scene.add.graphics();
        // Pot shadow
        bigPlant3Graphics.fillStyle(0x000000, 0.15);
        bigPlant3Graphics.fillEllipse(24, 50, 16, 4);
        // Pot
        bigPlant3Graphics.fillStyle(0x8b5a2b);
        bigPlant3Graphics.fillEllipse(24, 36, 15, 4);
        bigPlant3Graphics.fillStyle(0x6b4423);
        bigPlant3Graphics.fillRect(17, 36, 14, 12);
        bigPlant3Graphics.fillStyle(0x5b3413);
        bigPlant3Graphics.fillEllipse(24, 48, 17, 4);
        // Foliage
        bigPlant3Graphics.fillStyle(0x27ae60);
        bigPlant3Graphics.fillCircle(24, 20, 17);
        bigPlant3Graphics.fillStyle(0x2ecc71);
        bigPlant3Graphics.fillCircle(21, 17, 11);
        bigPlant3Graphics.fillCircle(27, 19, 10);
        // Small flowers
        bigPlant3Graphics.fillStyle(0xff6b9d);
        bigPlant3Graphics.fillCircle(18, 14, 3);
        bigPlant3Graphics.fillCircle(30, 16, 3);
        bigPlant3Graphics.fillStyle(0xffd93d);
        bigPlant3Graphics.fillCircle(24, 12, 2);
        bigPlant3Graphics.generateTexture(key, 48, 52);
        bigPlant3Graphics.destroy();
        return key
    }

    static rugGraphics(scene: Phaser.Scene, key = 'rug'): string {
        if (scene.textures.exists(key)) return key
        const rugGraphics = scene.add.graphics();
        rugGraphics.fillStyle(0xf9dc5c);
        rugGraphics.fillRect(0, 0, 96, 64);
        rugGraphics.fillStyle(0xff7f66);
        rugGraphics.fillRect(8, 8, 80, 48);
        rugGraphics.generateTexture(key, 96, 64);
        rugGraphics.destroy();
        return key
    }

    static couchGraphics(scene: Phaser.Scene, key = 'couch'): string {
        if (scene.textures.exists(key)) return key
        const couchGraphics = scene.add.graphics();
        // Shadow
        couchGraphics.fillStyle(0x000000, 0.2);
        couchGraphics.fillEllipse(48, 60, 96, 16);
        // Main couch body
        couchGraphics.fillStyle(0x8b4789);
        couchGraphics.fillRect(0, 10, 96, 48);
        // Cushion shadows
        couchGraphics.fillStyle(0x6b3569);
        couchGraphics.fillRect(8, 43, 25, 2);
        couchGraphics.fillRect(36, 43, 25, 2);
        couchGraphics.fillRect(64, 43, 25, 2);
        // Cushions
        couchGraphics.fillStyle(0xa060a0);
        couchGraphics.fillRect(8, 15, 25, 30);
        couchGraphics.fillRect(36, 15, 25, 30);
        couchGraphics.fillRect(64, 15, 25, 30);
        // Cushion highlights
        couchGraphics.fillStyle(0xb070b0);
        couchGraphics.fillRect(10, 17, 21, 3);
        couchGraphics.fillRect(38, 17, 21, 3);
        couchGraphics.fillRect(66, 17, 21, 3);
        // Arms with gradient
        couchGraphics.fillStyle(0x6b3569);
        couchGraphics.fillRect(0, 10, 8, 48);
        couchGraphics.fillRect(88, 10, 8, 48);
        couchGraphics.fillStyle(0x7b4579);
        couchGraphics.fillRect(1, 10, 3, 48);
        couchGraphics.fillRect(92, 10, 3, 48);
        couchGraphics.generateTexture(key, 96, 64);
        couchGraphics.destroy();
        return key
    }

    static tvGraphics(scene: Phaser.Scene, key = 'tv'): string {
        if (scene.textures.exists(key)) return key
        const tvGraphics = scene.add.graphics();
        // Shadow
        tvGraphics.fillStyle(0x000000, 0.25);
        tvGraphics.fillEllipse(40, 62, 80, 12);
        // TV frame
        tvGraphics.fillStyle(0x1a1a2e);
        tvGraphics.fillRect(0, 0, 80, 60);
        tvGraphics.fillStyle(0x0a0a1e);
        tvGraphics.fillRect(0, 0, 80, 3);
        tvGraphics.fillRect(0, 0, 3, 60);
        // Screen
        tvGraphics.fillStyle(0x2a2a3e);
        tvGraphics.fillRect(3, 3, 74, 50);
        // Sky background
        tvGraphics.fillStyle(0x5c94fc);
        tvGraphics.fillRect(5, 5, 70, 48);
        // Brown blocks
        tvGraphics.fillStyle(0x8b4513);
        tvGraphics.fillRect(10, 15, 15, 15);
        tvGraphics.fillRect(30, 15, 15, 15);
        tvGraphics.fillStyle(0xa0522d);
        tvGraphics.fillRect(11, 16, 13, 2);
        tvGraphics.fillRect(31, 16, 13, 2);
        // Green pipe
        tvGraphics.fillStyle(0x00b000);
        tvGraphics.fillRect(55, 25, 15, 28);
        tvGraphics.fillStyle(0x00d000);
        tvGraphics.fillRect(56, 25, 2, 28);
        // Red and blue
        tvGraphics.fillStyle(0xff0000);
        tvGraphics.fillCircle(35, 40, 5);
        tvGraphics.fillStyle(0x0000ff);
        tvGraphics.fillRect(32, 45, 6, 5);
        // Screen reflection
        tvGraphics.fillStyle(0xffffff, 0.1);
        tvGraphics.fillRect(7, 7, 30, 20);
        // Stand with detail
        tvGraphics.fillStyle(0x2c3e50);
        tvGraphics.fillRect(32, 53, 16, 7);
        tvGraphics.fillStyle(0x3c4e60);
        tvGraphics.fillRect(33, 53, 14, 2);
        tvGraphics.generateTexture(key, 80, 64);
        tvGraphics.destroy();
        return key
    }

    static consoleGraphics(scene: Phaser.Scene, key = 'console'): string {
        if (scene.textures.exists(key)) return key
        const consoleGraphics = scene.add.graphics();
        // Shadow
        consoleGraphics.fillStyle(0x000000, 0.2);
        consoleGraphics.fillEllipse(24, 34, 48, 8);
        // Console body
        consoleGraphics.fillStyle(0x2c3e50);
        consoleGraphics.fillRect(0, 0, 48, 32);
        // Top detail
        consoleGraphics.fillStyle(0x1c2e40);
        consoleGraphics.fillRect(0, 0, 48, 4);
        // Power button
        consoleGraphics.fillStyle(0x3498db);
        consoleGraphics.fillCircle(24, 16, 6);
        consoleGraphics.fillStyle(0x5dade2, 0.5);
        consoleGraphics.fillCircle(24, 16, 8);
        // Vents
        consoleGraphics.lineStyle(1, 0x1c2e40);
        for (let i = 0; i < 5; i++) {
            consoleGraphics.lineBetween(8 + i * 4, 24, 8 + i * 4, 28);
            consoleGraphics.lineBetween(28 + i * 4, 24, 28 + i * 4, 28);
        }
        consoleGraphics.generateTexture(key, 48, 36);
        consoleGraphics.destroy();
        return key
    }

    static flowerGraphics(scene: Phaser.Scene, key = 'flower'): string {
        if (scene.textures.exists(key)) return key
        const flowerGraphics = scene.add.graphics();
        flowerGraphics.fillStyle(0xff6b9d);
        flowerGraphics.fillCircle(16, 12, 6);
        flowerGraphics.fillStyle(0xffd93d);
        flowerGraphics.fillCircle(24, 12, 6);
        flowerGraphics.fillStyle(0x6bcf7f);
        flowerGraphics.fillCircle(20, 18, 6);
        flowerGraphics.fillStyle(0x9d4edd);
        flowerGraphics.fillCircle(20, 6, 6);
        flowerGraphics.fillStyle(0x28c6c9);
        flowerGraphics.fillCircle(20, 12, 4);
        flowerGraphics.generateTexture(key, 40, 24);
        flowerGraphics.destroy();
        return key
    }

    static bugPlayGraphics(scene: Phaser.Scene, key = 'bug-play'): string {
        if (scene.textures.exists(key)) return key
        const bugPlayGraphics = scene.add.graphics();
        // Bug body
        bugPlayGraphics.fillStyle(0x2d3748);
        bugPlayGraphics.fillEllipse(20, 24, 28, 18);
        // Body highlight
        bugPlayGraphics.fillStyle(0x4a5568);
        bugPlayGraphics.fillEllipse(18, 22, 24, 14);
        // Bug head
        bugPlayGraphics.fillStyle(0x1a202c);
        bugPlayGraphics.fillEllipse(20, 14, 16, 12);
        // Eyes
        bugPlayGraphics.fillStyle(0xffffff);
        bugPlayGraphics.fillCircle(16, 12, 2);
        bugPlayGraphics.fillCircle(24, 12, 2);
        // Eye pupils
        bugPlayGraphics.fillStyle(0x000000);
        bugPlayGraphics.fillCircle(16, 12, 1);
        bugPlayGraphics.fillCircle(24, 12, 1);
        // Antennae
        bugPlayGraphics.lineStyle(2, 0x1a202c);
        bugPlayGraphics.lineBetween(18, 8, 14, 4);
        bugPlayGraphics.lineBetween(22, 8, 26, 4);
        // Antennae tips
        bugPlayGraphics.fillStyle(0x1a202c);
        bugPlayGraphics.fillCircle(14, 4, 1);
        bugPlayGraphics.fillCircle(26, 4, 1);
        // Legs
        bugPlayGraphics.lineStyle(2, 0x2d3748);
        // Left side legs
        bugPlayGraphics.lineBetween(12, 20, 8, 24);
        bugPlayGraphics.lineBetween(12, 24, 6, 30);
        bugPlayGraphics.lineBetween(12, 28, 8, 34);
        // Right side legs
        bugPlayGraphics.lineBetween(28, 20, 32, 24);
        bugPlayGraphics.lineBetween(28, 24, 34, 30);
        bugPlayGraphics.lineBetween(28, 28, 32, 34);
        // Wings
        bugPlayGraphics.fillStyle(0x4a5568, 0.7);
        bugPlayGraphics.fillEllipse(16, 20, 6, 4);
        bugPlayGraphics.fillEllipse(24, 20, 6, 4);
        // Play button
        bugPlayGraphics.fillStyle(0xffffff);
        bugPlayGraphics.fillTriangle(18, 18, 18, 26, 26, 22);
        // Play button border
        bugPlayGraphics.lineStyle(1, 0x000000);
        bugPlayGraphics.lineBetween(18, 18, 18, 26);
        bugPlayGraphics.lineBetween(18, 26, 26, 22);
        bugPlayGraphics.lineBetween(26, 22, 18, 18);
        // Bug body segments
        bugPlayGraphics.lineStyle(1, 0x1a202c);
        bugPlayGraphics.lineBetween(16, 28, 24, 28);
        bugPlayGraphics.lineBetween(16, 32, 24, 32);
        bugPlayGraphics.generateTexture(key, 40, 48);
        bugPlayGraphics.destroy();
        return key
    }

    static pinballGraphics(scene: Phaser.Scene, key = 'pinball'): string {
        if (scene.textures.exists(key)) return key
        const pinballGraphics = scene.add.graphics();
        // Shadow
        pinballGraphics.fillStyle(0x000000, 0.3);
        pinballGraphics.fillEllipse(26, 68, 48, 12);
        // Legs
        pinballGraphics.fillStyle(0xc0c0c0);
        pinballGraphics.fillRect(8, 58, 6, 12);
        pinballGraphics.fillRect(34, 58, 6, 12);
        pinballGraphics.fillStyle(0xe8e8e8);
        pinballGraphics.fillRect(9, 58, 2, 12);
        pinballGraphics.fillRect(35, 58, 2, 12);
        // Cabinet
        pinballGraphics.fillStyle(0xff6b9d);
        pinballGraphics.fillRect(0, 0, 48, 64);
        pinballGraphics.fillStyle(0xff5a8c);
        pinballGraphics.fillRect(0, 0, 48, 4);
        // Side panels
        pinballGraphics.fillStyle(0xff4a7c);
        pinballGraphics.fillRect(0, 0, 4, 64);
        pinballGraphics.fillRect(44, 0, 4, 64);
        // Playfield glass
        pinballGraphics.fillStyle(0x5c94fc, 0.5);
        pinballGraphics.fillRect(4, 8, 40, 48);
        pinballGraphics.fillStyle(0xffffff, 0.2);
        pinballGraphics.fillRect(6, 10, 10, 20);
        // Backglass
        pinballGraphics.fillStyle(0xffd93d);
        pinballGraphics.fillRect(4, 4, 40, 4);
        pinballGraphics.fillStyle(0xffc700);
        pinballGraphics.fillCircle(24, 6, 3);
        // Flippers
        pinballGraphics.lineStyle(3, 0xff0000);
        // Left flipper
        pinballGraphics.lineBetween(20, 54, 12, 46);
        // Right flipper
        pinballGraphics.lineBetween(28, 54, 36, 46);
        // Bumpers
        pinballGraphics.fillStyle(0xff0000);
        pinballGraphics.fillCircle(24, 24, 4);
        pinballGraphics.fillStyle(0xff6666, 0.5);
        pinballGraphics.fillCircle(24, 24, 6);
        // Left bumper
        pinballGraphics.fillStyle(0x00ff00);
        pinballGraphics.fillCircle(16, 32, 4);
        pinballGraphics.fillStyle(0x66ff66, 0.5);
        pinballGraphics.fillCircle(16, 32, 6);
        // Right bumper
        pinballGraphics.fillStyle(0x0000ff);
        pinballGraphics.fillCircle(32, 32, 4);
        pinballGraphics.fillStyle(0x6666ff, 0.5);
        pinballGraphics.fillCircle(32, 32, 6);
        // Score display
        pinballGraphics.fillStyle(0x1a1a1a);
        pinballGraphics.fillRect(8, 14, 32, 8);
        pinballGraphics.fillStyle(0xff0000, 0.8);
        pinballGraphics.fillRect(10, 16, 28, 4);
        pinballGraphics.generateTexture(key, 48, 70);
        pinballGraphics.destroy();
        return key
    }

    static bookshelfGraphics(scene: Phaser.Scene, key = 'bookshelf'): string {
        if (scene.textures.exists(key)) return key
        const bookshelfGraphics = scene.add.graphics();
        // Shelves
        bookshelfGraphics.fillStyle(0x6b4423);
        bookshelfGraphics.fillRect(0, 0, 64, 96);
        bookshelfGraphics.fillStyle(0x4a2f1a);
        bookshelfGraphics.fillRect(2, 2, 60, 22);
        bookshelfGraphics.fillRect(2, 26, 60, 22);
        bookshelfGraphics.fillRect(2, 50, 60, 22);
        bookshelfGraphics.fillRect(2, 74, 60, 20);
        // Books
        const bookColors = [
            0xff6b6b, 0x4ecdc4, 0xffe66d, 0x95e1d3, 0xf38181, 0xa29bfe, 0xfd79a8,
        ];
        for (let shelf = 0; shelf < 4; shelf++) {
            for (let i = 0; i < 6; i++) {
                const bookColor = bookColors[(shelf + i) % bookColors.length];
                bookshelfGraphics.fillStyle(bookColor);
                bookshelfGraphics.fillRect(4 + i * 10, 4 + shelf * 24, 8, 18);
                // Book spine
                bookshelfGraphics.lineStyle(1, 0xffffff, 0.5);
                bookshelfGraphics.lineBetween(
                    6 + i * 10,
                    6 + shelf * 24,
                    6 + i * 10,
                    20 + shelf * 24
                );
                bookshelfGraphics.fillStyle(0x000000, 0.2);
                bookshelfGraphics.fillRect(4 + i * 10, 20 + shelf * 24, 8, 2);
            }
        }
        bookshelfGraphics.generateTexture(key, 64, 96);
        bookshelfGraphics.destroy();
        return key
    }

    static tableGraphics(scene: Phaser.Scene, key = 'meeting-table'): string {
        if (scene.textures.exists(key)) return key
        const tableGraphics = scene.add.graphics();
        // Table shadow
        tableGraphics.fillStyle(0x000000, 0.15);
        tableGraphics.fillRect(4, 4, 144, 86);
        // Main table
        tableGraphics.fillStyle(0x6b4423);
        tableGraphics.fillRect(0, 0, 144, 86);
        // Wood grain details
        tableGraphics.fillStyle(0x5b3413);
        tableGraphics.fillRect(10, 18, 124, 3);
        tableGraphics.fillRect(15, 40, 114, 2);
        tableGraphics.fillRect(12, 63, 120, 3);
        // Edge highlight
        tableGraphics.fillStyle(0x8b5a2b);
        tableGraphics.fillRect(0, 0, 144, 4);
        tableGraphics.fillRect(0, 0, 4, 86);
        // Border
        tableGraphics.lineStyle(4, 0x4a2f1a);
        tableGraphics.strokeRect(0, 0, 144, 86);
        // Corners
        tableGraphics.fillStyle(0x3d2817);
        tableGraphics.fillCircle(8, 8, 6);
        tableGraphics.fillCircle(136, 8, 6);
        tableGraphics.fillCircle(8, 78, 6);
        tableGraphics.fillCircle(136, 78, 6);
        tableGraphics.generateTexture(key, 148, 90);
        tableGraphics.destroy();
        return key
    }

    static laptopGraphics(scene: Phaser.Scene, key = 'laptop'): string {
        if (scene.textures.exists(key)) return key
        const laptopGraphics = scene.add.graphics();
        laptopGraphics.fillStyle(0x2c3e50);
        laptopGraphics.fillRect(0, 0, 40, 28);
        laptopGraphics.fillStyle(0x3498db);
        laptopGraphics.fillRect(2, 2, 36, 24);
        laptopGraphics.generateTexture(key, 40, 28);
        laptopGraphics.destroy();
        return key
    }

    static dogBedGraphics(scene: Phaser.Scene, key = 'dog-bed'): string {
        if (scene.textures.exists(key)) return key
        const dogBedGraphics = scene.add.graphics();
        // Shadow
        dogBedGraphics.fillStyle(0x000000, 0.15);
        dogBedGraphics.fillEllipse(32, 50, 60, 12);
        // Bed base
        dogBedGraphics.fillStyle(0x8b4789);
        dogBedGraphics.fillEllipse(32, 32, 56, 48);
        // Bed rim
        dogBedGraphics.fillStyle(0x9b5799);
        dogBedGraphics.fillEllipse(32, 28, 60, 20);
        // Inner cushion
        dogBedGraphics.fillStyle(0xb070b0);
        dogBedGraphics.fillEllipse(32, 34, 40, 32);
        // Texture
        dogBedGraphics.fillStyle(0xa060a0);
        dogBedGraphics.fillCircle(26, 32, 3);
        dogBedGraphics.fillCircle(38, 32, 3);
        dogBedGraphics.fillCircle(32, 36, 3);
        dogBedGraphics.fillCircle(32, 28, 3);
        // Highlights
        dogBedGraphics.fillStyle(0xc080c0, 0.4);
        dogBedGraphics.fillEllipse(28, 30, 16, 12);
        dogBedGraphics.generateTexture(key, 64, 52);
        dogBedGraphics.destroy();
        return key
    }
}