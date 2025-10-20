import Phaser from 'phaser'

export default class SpriteCreatorNPCs {

    static couchNPCGraphics(scene: Phaser.Scene, key = 'couch-npc'): string {
        if (scene.textures.exists(key)) return key
        const couchNPCGraphics = scene.add.graphics();
        // Shadow
        couchNPCGraphics.fillStyle(0x000000, 0.2);
        couchNPCGraphics.fillEllipse(24, 44, 20, 6);
        // Legs
        couchNPCGraphics.fillStyle(0xd2b48c);
        couchNPCGraphics.fillRect(14, 32, 9, 12);
        couchNPCGraphics.fillRect(25, 32, 9, 12);
        // Pants shading
        couchNPCGraphics.fillStyle(0x000000, 0.15);
        couchNPCGraphics.fillRect(14, 35, 9, 9);
        couchNPCGraphics.fillRect(25, 35, 9, 9);
        couchNPCGraphics.fillStyle(0x000000, 0.08);
        couchNPCGraphics.fillRect(15, 32, 1, 12);
        couchNPCGraphics.fillRect(28, 32, 1, 12);
        // Shoes
        couchNPCGraphics.fillStyle(0x1a1a1a);
        couchNPCGraphics.fillRect(14, 42, 9, 3);
        couchNPCGraphics.fillRect(25, 42, 9, 3);
        // Body
        couchNPCGraphics.fillStyle(0xff8c00);
        couchNPCGraphics.fillRect(14, 20, 20, 14);
        // Top shading
        couchNPCGraphics.fillStyle(0x000000, 0.08);
        couchNPCGraphics.fillRect(14, 25, 20, 9);
        couchNPCGraphics.fillStyle(0x000000, 0.04);
        couchNPCGraphics.fillRect(16, 20, 2, 14);
        couchNPCGraphics.fillRect(30, 20, 2, 14);
        // Arms
        couchNPCGraphics.fillStyle(0xe8b896);
        couchNPCGraphics.fillRect(10, 22, 5, 10);
        couchNPCGraphics.fillRect(33, 22, 5, 10);
        // Neck
        couchNPCGraphics.fillStyle(0xe8b896);
        couchNPCGraphics.fillRect(20, 17, 8, 4);
        // Head
        couchNPCGraphics.fillStyle(0xe8b896);
        couchNPCGraphics.fillCircle(24, 11, 8);
        // Hair
        couchNPCGraphics.fillStyle(0x4a4a4a);
        // Hair back
        couchNPCGraphics.fillEllipse(24, 18, 20, 16);
        couchNPCGraphics.fillRect(14, 12, 20, 12);
        // Hair top and sides
        couchNPCGraphics.fillCircle(24, 7, 8);
        couchNPCGraphics.fillEllipse(24, 10, 16, 10);
        // Side hair strands
        couchNPCGraphics.fillStyle(0x3a3a3a);
        couchNPCGraphics.fillEllipse(16, 14, 4, 10);
        couchNPCGraphics.fillEllipse(32, 14, 4, 10);
        // Hair highlights
        couchNPCGraphics.fillStyle(0x6a6a6a);
        couchNPCGraphics.fillEllipse(22, 8, 4, 6);
        couchNPCGraphics.fillEllipse(26, 8, 4, 6);
        couchNPCGraphics.generateTexture(key, 48, 48);
        couchNPCGraphics.destroy();
        return key
    }

    static couchBGNPCGraphics(scene: Phaser.Scene, key = 'couch-bg-npc'): string {
        if (scene.textures.exists(key)) return key
        const couchBGNPCGraphics = scene.add.graphics();
        // Shadow
        couchBGNPCGraphics.fillStyle(0x000000, 0.2);
        couchBGNPCGraphics.fillEllipse(24, 44, 20, 6);
        // Legs
        couchBGNPCGraphics.fillStyle(0x2d5016);
        couchBGNPCGraphics.fillRect(14, 32, 9, 12);
        couchBGNPCGraphics.fillRect(25, 32, 9, 12);
        // Pants shading
        couchBGNPCGraphics.fillStyle(0x000000, 0.10);
        couchBGNPCGraphics.fillRect(14, 35, 9, 9);
        couchBGNPCGraphics.fillRect(25, 35, 9, 9);
        couchBGNPCGraphics.fillStyle(0x000000, 0.05);
        couchBGNPCGraphics.fillRect(15, 32, 1, 12);
        couchBGNPCGraphics.fillRect(28, 32, 1, 12);
        // Shoes
        couchBGNPCGraphics.fillStyle(0x8b0000);
        couchBGNPCGraphics.fillRect(14, 42, 9, 3);
        couchBGNPCGraphics.fillRect(25, 42, 9, 3);
        // Body
        couchBGNPCGraphics.fillStyle(0xffd700);
        couchBGNPCGraphics.fillRect(14, 20, 20, 14);
        // Shirt shading
        couchBGNPCGraphics.fillStyle(0x000000, 0.12);
        couchBGNPCGraphics.fillRect(14, 25, 20, 9);
        couchBGNPCGraphics.fillStyle(0x000000, 0.06);
        couchBGNPCGraphics.fillRect(16, 20, 2, 14);
        couchBGNPCGraphics.fillRect(30, 20, 2, 14);
        // Arms
        couchBGNPCGraphics.fillStyle(0xf4a460);
        couchBGNPCGraphics.fillRect(10, 22, 5, 10);
        couchBGNPCGraphics.fillRect(33, 22, 5, 10);
        // Neck
        couchBGNPCGraphics.fillStyle(0xf4a460);
        couchBGNPCGraphics.fillRect(20, 17, 8, 4);
        // Head
        couchBGNPCGraphics.fillStyle(0xf4a460);
        couchBGNPCGraphics.fillCircle(24, 11, 8);
        // Hair
        couchBGNPCGraphics.fillStyle(0x2a2a2a);
        couchBGNPCGraphics.fillCircle(24, 8, 8);
        couchBGNPCGraphics.fillRect(17, 8, 14, 5);
        couchBGNPCGraphics.fillCircle(19, 9, 3);
        couchBGNPCGraphics.fillCircle(29, 9, 3);
        couchBGNPCGraphics.generateTexture(key, 48, 48);
        couchBGNPCGraphics.destroy();
        return key
    }

    static bgNpc1Graphics(scene: Phaser.Scene, key = 'bg-npc-1'): string {
        if (scene.textures.exists(key)) return key
        const bgNpc1Graphics = scene.add.graphics();
        bgNpc1Graphics.fillStyle(0x000000, 0.2);
        bgNpc1Graphics.fillEllipse(24, 44, 20, 6);
        bgNpc1Graphics.fillStyle(0x2c3e50);
        bgNpc1Graphics.fillRect(14, 32, 9, 12);
        bgNpc1Graphics.fillRect(25, 32, 9, 12);
        bgNpc1Graphics.fillStyle(0x1a1a1a);
        bgNpc1Graphics.fillRect(14, 42, 9, 3);
        bgNpc1Graphics.fillRect(25, 42, 9, 3);
        bgNpc1Graphics.fillStyle(0xe74c3c);
        bgNpc1Graphics.fillRect(14, 20, 20, 14);
        bgNpc1Graphics.fillStyle(0xc39b77);
        bgNpc1Graphics.fillRect(10, 22, 5, 10);
        bgNpc1Graphics.fillRect(33, 22, 5, 10);
        bgNpc1Graphics.fillRect(20, 17, 8, 4);
        bgNpc1Graphics.fillCircle(24, 11, 8);
        bgNpc1Graphics.fillStyle(0x784212);
        bgNpc1Graphics.fillCircle(24, 8, 8);
        bgNpc1Graphics.fillRect(17, 8, 14, 6);
        // Style variation
        bgNpc1Graphics.fillCircle(19, 10, 3);
        bgNpc1Graphics.fillCircle(29, 10, 3);
        bgNpc1Graphics.generateTexture(key, 48, 48);
        bgNpc1Graphics.destroy();
        return key
    }

    static bgNpc2Graphics(scene: Phaser.Scene, key = 'bg-npc-2'): string {
        if (scene.textures.exists(key)) return key
        const bgNpc2Graphics = scene.add.graphics();
        bgNpc2Graphics.fillStyle(0x000000, 0.2);
        bgNpc2Graphics.fillEllipse(24, 44, 20, 6);
        bgNpc2Graphics.fillStyle(0x34495e);
        bgNpc2Graphics.fillRect(14, 32, 9, 12);
        bgNpc2Graphics.fillRect(25, 32, 9, 12);
        bgNpc2Graphics.fillStyle(0x2c3e50);
        bgNpc2Graphics.fillRect(14, 42, 9, 3);
        bgNpc2Graphics.fillRect(25, 42, 9, 3);
        bgNpc2Graphics.fillStyle(0xf39c12);
        bgNpc2Graphics.fillRect(14, 20, 20, 14);
        bgNpc2Graphics.fillStyle(0xd4a574);
        bgNpc2Graphics.fillRect(10, 22, 5, 10);
        bgNpc2Graphics.fillRect(33, 22, 5, 10);
        bgNpc2Graphics.fillRect(20, 17, 8, 4);
        bgNpc2Graphics.fillCircle(24, 11, 8);
        bgNpc2Graphics.fillStyle(0x1c1c1c);
        bgNpc2Graphics.fillCircle(24, 8, 8);
        bgNpc2Graphics.fillRect(17, 8, 14, 5);
        // Style variation
        bgNpc2Graphics.fillCircle(20, 9, 3);
        bgNpc2Graphics.fillCircle(28, 9, 3);
        bgNpc2Graphics.generateTexture(key, 48, 48);
        bgNpc2Graphics.destroy();
        return key
    }

    static bgNpc3Graphics(scene: Phaser.Scene, key = 'bg-npc-3'): string {
        if (scene.textures.exists(key)) return key
        const bgNpc3Graphics = scene.add.graphics();
        bgNpc3Graphics.fillStyle(0x000000, 0.2);
        bgNpc3Graphics.fillEllipse(24, 44, 20, 6);
        bgNpc3Graphics.fillStyle(0x5f6368);
        bgNpc3Graphics.fillRect(14, 32, 9, 12);
        bgNpc3Graphics.fillRect(25, 32, 9, 12);
        bgNpc3Graphics.fillStyle(0x4a3f35);
        bgNpc3Graphics.fillRect(14, 42, 9, 3);
        bgNpc3Graphics.fillRect(25, 42, 9, 3);
        bgNpc3Graphics.fillStyle(0x16a085);
        bgNpc3Graphics.fillRect(14, 20, 20, 14);
        bgNpc3Graphics.fillStyle(0xf0c9a0);
        bgNpc3Graphics.fillRect(10, 22, 5, 10);
        bgNpc3Graphics.fillRect(33, 22, 5, 10);
        bgNpc3Graphics.fillRect(20, 17, 8, 4);
        bgNpc3Graphics.fillCircle(24, 11, 8);
        bgNpc3Graphics.fillStyle(0x8b4513);
        bgNpc3Graphics.fillCircle(24, 8, 8);
        bgNpc3Graphics.fillRect(17, 8, 14, 8);
        // Wavy variation
        bgNpc3Graphics.fillCircle(18, 12, 4);
        bgNpc3Graphics.fillCircle(30, 12, 4);
        bgNpc3Graphics.fillCircle(24, 13, 3);
        bgNpc3Graphics.generateTexture(key, 48, 48);
        bgNpc3Graphics.destroy();
        return key
    }

    static bgNpc4Graphics(scene: Phaser.Scene, key = 'bg-npc-4'): string {
        if (scene.textures.exists(key)) return key
        const bgNpc4Graphics = scene.add.graphics();
        bgNpc4Graphics.fillStyle(0x000000, 0.2);
        bgNpc4Graphics.fillEllipse(24, 44, 20, 6);
        bgNpc4Graphics.fillStyle(0x2c3e50);
        bgNpc4Graphics.fillRect(14, 32, 9, 12);
        bgNpc4Graphics.fillRect(25, 32, 9, 12);
        bgNpc4Graphics.fillStyle(0xf5f5f5);
        bgNpc4Graphics.fillRect(14, 42, 9, 3);
        bgNpc4Graphics.fillRect(25, 42, 9, 3);
        bgNpc4Graphics.fillStyle(0x8e44ad);
        bgNpc4Graphics.fillRect(14, 20, 20, 14);
        bgNpc4Graphics.fillStyle(0xe8b896);
        bgNpc4Graphics.fillRect(10, 22, 5, 10);
        bgNpc4Graphics.fillRect(33, 22, 5, 10);
        bgNpc4Graphics.fillRect(20, 17, 8, 4);
        bgNpc4Graphics.fillCircle(24, 11, 8);
        bgNpc4Graphics.fillStyle(0xd35400);
        bgNpc4Graphics.fillCircle(24, 8, 9);
        bgNpc4Graphics.fillRect(15, 8, 18, 6);
        // Long hair style
        bgNpc4Graphics.fillCircle(18, 11, 4);
        bgNpc4Graphics.fillCircle(30, 11, 4);
        bgNpc4Graphics.fillCircle(21, 9, 3);
        bgNpc4Graphics.fillCircle(27, 9, 3);
        bgNpc4Graphics.generateTexture(key, 48, 48);
        bgNpc4Graphics.destroy();
        return key
    }

    static bgNPCGraphics(scene: Phaser.Scene, key: string): string {
        if (scene.textures.exists(key)) return key
        const bgNPCGraphics = scene.add.graphics();
        // Shadow
        bgNPCGraphics.fillStyle(0x000000, 0.2);
        bgNPCGraphics.fillEllipse(24, 44, 20, 6);
        // Legs 
        bgNPCGraphics.fillStyle(0xc3b091);
        bgNPCGraphics.fillRect(14, 32, 9, 12);
        bgNPCGraphics.fillRect(25, 32, 9, 12);
        // Pants shading
        bgNPCGraphics.fillStyle(0x000000, 0.08);
        bgNPCGraphics.fillRect(14, 35, 9, 9);
        bgNPCGraphics.fillRect(25, 35, 9, 9);
        bgNPCGraphics.fillStyle(0x000000, 0.04);
        bgNPCGraphics.fillRect(15, 32, 1, 12);
        bgNPCGraphics.fillRect(28, 32, 1, 12);
        // Shoes 
        bgNPCGraphics.fillStyle(0x6d4c41);
        bgNPCGraphics.fillRect(14, 42, 9, 3);
        bgNPCGraphics.fillRect(25, 42, 9, 3);
        // Body
        bgNPCGraphics.fillStyle(0x2d5016);
        bgNPCGraphics.fillRect(14, 20, 20, 14);
        // Shirt shading
        bgNPCGraphics.fillStyle(0x000000, 0.08);
        bgNPCGraphics.fillRect(14, 25, 20, 9);
        bgNPCGraphics.fillStyle(0x000000, 0.04);
        bgNPCGraphics.fillRect(16, 20, 2, 14);
        bgNPCGraphics.fillRect(30, 20, 2, 14);
        // Arms
        bgNPCGraphics.fillStyle(0xe8b896);
        bgNPCGraphics.fillRect(10, 22, 5, 10);
        bgNPCGraphics.fillRect(33, 22, 5, 10);
        // Neck
        bgNPCGraphics.fillStyle(0xe8b896);
        bgNPCGraphics.fillRect(20, 17, 8, 4);
        // Head
        bgNPCGraphics.fillStyle(0xe8b896);
        bgNPCGraphics.fillCircle(24, 11, 8);
        // Hair
        bgNPCGraphics.fillStyle(0x3e2723);
        bgNPCGraphics.fillCircle(24, 7, 7);
        bgNPCGraphics.fillCircle(24, 10, 8);
        bgNPCGraphics.fillStyle(0x4a2c2a);
        bgNPCGraphics.fillCircle(24, 5, 5);
        bgNPCGraphics.fillCircle(22, 6, 3);
        bgNPCGraphics.fillCircle(26, 6, 3);
        bgNPCGraphics.generateTexture(key, 48, 48);
        bgNPCGraphics.destroy();
        return key
    }
}