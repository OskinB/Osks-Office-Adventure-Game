import Phaser from 'phaser'

export default class SpriteCreatorAnimals {

    static catStandGraphics(scene: Phaser.Scene, key = 'cat-stand'): string {
        if (scene.textures.exists(key)) return key
        const catStandGraphics = scene.add.graphics();
        // Body
        catStandGraphics.fillStyle(0x000000);
        catStandGraphics.fillEllipse(24, 34, 32, 22);
        // Head
        catStandGraphics.fillCircle(24, 18, 14);
        // Ears 
        catStandGraphics.fillTriangle(13, 9, 17, 1, 21, 12);
        catStandGraphics.fillTriangle(29, 8, 33, 1, 37, 12);
        // Inner ears
        catStandGraphics.fillStyle(0xff69b4);
        catStandGraphics.fillTriangle(15, 11, 17, 5, 18, 9);
        catStandGraphics.fillTriangle(31, 9, 33, 5, 34, 11);
        // White patches
        catStandGraphics.fillStyle(0xffffff);
        catStandGraphics.fillCircle(25, 20, 9);
        catStandGraphics.fillEllipse(24, 36, 14, 10);
        // Legs and Paws
        catStandGraphics.fillStyle(0x000000);
        catStandGraphics.fillRect(26, 41, 9, 8);
        catStandGraphics.fillRect(13, 41, 9, 8);
        // Paws
        catStandGraphics.fillStyle(0xffffff);
        catStandGraphics.fillCircle(18, 49, 4);
        catStandGraphics.fillCircle(30, 49, 4);
        // Eyes
        catStandGraphics.fillStyle(0xfdea7b);
        catStandGraphics.fillRect(18, 16, 4, 4);
        catStandGraphics.fillRect(26, 16, 4, 4);
        catStandGraphics.fillStyle(0x000000);
        catStandGraphics.fillCircle(21, 19, 1);
        catStandGraphics.fillCircle(29, 19, 1);
        // Nose 
        catStandGraphics.fillStyle(0x222222);
        catStandGraphics.fillCircle(25, 23, 1);
        // Whiskers
        catStandGraphics.lineStyle(0.9, 0x5b5b5b);
        catStandGraphics.lineBetween(9, 22, 19, 21);
        catStandGraphics.lineBetween(9, 25, 20, 23);
        catStandGraphics.lineBetween(39, 22, 30, 21);
        catStandGraphics.lineBetween(38, 25, 29, 23);
        // Mouth
        catStandGraphics.fillStyle(0x444444);
        catStandGraphics.fillRect(23, 24, 4, 1);
        // Tail
        catStandGraphics.fillStyle(0x000000);
        catStandGraphics.fillEllipse(38, 31, 20, 6);
        catStandGraphics.generateTexture(key, 51, 53);
        catStandGraphics.destroy();
        return key
    }

    static catWalk1Graphics(scene: Phaser.Scene, key = 'cat-walk1'): string {
        if (scene.textures.exists(key)) return key
        const catWalk1Graphics = scene.add.graphics();
        // Body
        catWalk1Graphics.fillStyle(0x000000);
        catWalk1Graphics.fillEllipse(24, 34, 32, 22);
        // Head
        catWalk1Graphics.fillCircle(24, 18, 14);
        // Ears
        catWalk1Graphics.fillTriangle(13, 9, 17, 1, 21, 12);
        catWalk1Graphics.fillTriangle(29, 8, 33, 1, 37, 12);
        // Inner ears
        catWalk1Graphics.fillStyle(0xff69b4);
        catWalk1Graphics.fillTriangle(15, 11, 17, 5, 18, 9);
        catWalk1Graphics.fillTriangle(31, 9, 33, 5, 34, 11);
        // White patches
        catWalk1Graphics.fillStyle(0xffffff);
        catWalk1Graphics.fillCircle(25, 20, 9);
        catWalk1Graphics.fillEllipse(24, 36, 14, 10);
        // Legs and Paws
        catWalk1Graphics.fillStyle(0x000000);
        catWalk1Graphics.fillRect(26, 41, 9, 8);
        // Paw shadow
        catWalk1Graphics.fillStyle(0x000000, 0.2);
        catWalk1Graphics.fillCircle(18, 42, 5);
        // Paw (white)
        catWalk1Graphics.fillStyle(0xffffff);
        catWalk1Graphics.fillCircle(18, 43, 4);
        catWalk1Graphics.fillCircle(30, 49, 4);
        // Eyes 
        catWalk1Graphics.fillStyle(0xfdea7b);
        catWalk1Graphics.fillRect(18, 16, 4, 4);
        catWalk1Graphics.fillRect(26, 16, 4, 4);
        catWalk1Graphics.fillStyle(0x000000);
        catWalk1Graphics.fillCircle(21, 19, 1);
        catWalk1Graphics.fillCircle(29, 19, 1);
        // Nose
        catWalk1Graphics.fillStyle(0x222222);
        catWalk1Graphics.fillCircle(25, 23, 1);
        // Whiskers
        catWalk1Graphics.lineStyle(0.9, 0x5b5b5b);
        catWalk1Graphics.lineBetween(9, 22, 19, 21);
        catWalk1Graphics.lineBetween(9, 25, 20, 23);
        catWalk1Graphics.lineBetween(39, 22, 30, 21);
        catWalk1Graphics.lineBetween(38, 25, 29, 23);
        // Mout
        catWalk1Graphics.fillStyle(0x444444);
        catWalk1Graphics.fillRect(23, 24, 4, 1);
        // Tail
        catWalk1Graphics.fillStyle(0x000000);
        catWalk1Graphics.fillEllipse(38, 31, 20, 6);
        catWalk1Graphics.generateTexture(key, 51, 53);
        catWalk1Graphics.destroy();
        return key
    }

    static catWalk2Graphics(scene: Phaser.Scene, key = 'cat-walk2'): string {
        if (scene.textures.exists(key)) return key
        const catWalk2Graphics = scene.add.graphics();
        // Body
        catWalk2Graphics.fillStyle(0x000000);
        catWalk2Graphics.fillEllipse(24, 34, 32, 22);
        // Head
        catWalk2Graphics.fillCircle(24, 18, 14);
        // Ears
        catWalk2Graphics.fillTriangle(13, 9, 17, 1, 21, 12);
        catWalk2Graphics.fillTriangle(29, 8, 33, 1, 37, 12);
        // Inner ears
        catWalk2Graphics.fillStyle(0xff69b4);
        catWalk2Graphics.fillTriangle(15, 11, 17, 5, 18, 9);
        catWalk2Graphics.fillTriangle(31, 9, 33, 5, 34, 11);
        // White patches
        catWalk2Graphics.fillStyle(0xffffff);
        catWalk2Graphics.fillCircle(25, 20, 9);
        catWalk2Graphics.fillEllipse(24, 36, 14, 10);
        // Legs and Paws
        catWalk2Graphics.fillStyle(0x000000);
        catWalk2Graphics.fillRect(13, 41, 9, 8);
        // Paw shadow
        catWalk2Graphics.fillStyle(0x000000, 0.2);
        catWalk2Graphics.fillCircle(30, 42, 5);
        // Paw (white)
        catWalk2Graphics.fillStyle(0xffffff);
        catWalk2Graphics.fillCircle(18, 49, 4);
        catWalk2Graphics.fillCircle(30, 43, 4);
        // Eyes
        catWalk2Graphics.fillStyle(0xfdea7b);
        catWalk2Graphics.fillRect(18, 16, 4, 4);
        catWalk2Graphics.fillRect(26, 16, 4, 4);
        catWalk2Graphics.fillStyle(0x000000);
        catWalk2Graphics.fillCircle(21, 19, 1);
        catWalk2Graphics.fillCircle(29, 19, 1);
        // Nose
        catWalk2Graphics.fillStyle(0x222222);
        catWalk2Graphics.fillCircle(25, 23, 1);
        // Whiskers
        catWalk2Graphics.lineStyle(0.9, 0x5b5b5b)
        catWalk2Graphics.lineBetween(9, 22, 19, 21);
        catWalk2Graphics.lineBetween(9, 25, 20, 23);
        catWalk2Graphics.lineBetween(39, 22, 30, 21);
        catWalk2Graphics.lineBetween(38, 25, 29, 23);
        // Mouth
        catWalk2Graphics.fillStyle(0x444444);
        catWalk2Graphics.fillRect(23, 24, 4, 1);
        // Tail
        catWalk2Graphics.fillStyle(0x000000);
        catWalk2Graphics.fillEllipse(38, 31, 20, 6);
        catWalk2Graphics.generateTexture(key, 51, 53);
        catWalk2Graphics.destroy();
        return key
    }

    static teemoGraphics(scene: Phaser.Scene, key = 'teemo'): string {
        if (scene.textures.exists(key)) return key
        const teemoGraphics = scene.add.graphics();
        // Shadow
        teemoGraphics.fillStyle(0x000000, 0.2);
        teemoGraphics.fillEllipse(12, 22, 10, 3);
        // Body (mix of light and dark brown)
        teemoGraphics.fillStyle(0x8b4513);
        teemoGraphics.fillRect(8, 12, 8, 8);
        teemoGraphics.fillStyle(0xd2b48c);
        teemoGraphics.fillRect(9, 13, 6, 6);
        // Arms (light brown)
        teemoGraphics.fillStyle(0xd2b48c);
        teemoGraphics.fillRect(6, 14, 3, 4);
        teemoGraphics.fillRect(15, 14, 3, 4);
        // Head (light brown)
        teemoGraphics.fillStyle(0xd2b48c);
        teemoGraphics.fillCircle(12, 7, 5);
        // Smile using lower arc only
        teemoGraphics.lineStyle(1, 0x744700);
        teemoGraphics.beginPath();
        teemoGraphics.arc(12, 9, 1.0, 0, Math.PI, false);
        teemoGraphics.strokePath();
        // Green hat
        teemoGraphics.fillStyle(0x228b22);
        teemoGraphics.fillRect(8, 0, 8, 6);
        teemoGraphics.fillRect(6, 2, 12, 5);
        // Goggles band on hat
        teemoGraphics.fillStyle(0xce7e00);
        teemoGraphics.fillRect(6, 3, 12, 2);
        // Red goggles on hat
        teemoGraphics.fillStyle(0xdc143c);
        teemoGraphics.fillRect(9, 3, 2, 2);
        teemoGraphics.fillRect(13, 3, 2, 2);
        teemoGraphics.fillStyle(0xffffff);
        teemoGraphics.fillRect(9, 3, 1, 1);
        teemoGraphics.fillRect(13, 3, 1, 1);
        // Eyes
        teemoGraphics.fillStyle(0x5b5b5b);
        teemoGraphics.fillRect(9, 7, 2, 1);
        teemoGraphics.fillRect(13, 7, 2, 1);
        // Blow dart (held in right hand)
        teemoGraphics.fillStyle(0x8b4513);
        teemoGraphics.fillRect(17, 15, 4, 1);
        teemoGraphics.fillStyle(0x654321);
        teemoGraphics.fillRect(20, 14, 1, 3);
        // Legs (dark brown)
        teemoGraphics.fillStyle(0x8b4513);
        teemoGraphics.fillRect(9, 20, 2, 4);
        teemoGraphics.fillRect(13, 20, 2, 4);
        // Feet (dark brown)
        teemoGraphics.fillStyle(0x654321);
        teemoGraphics.fillRect(8, 24, 3, 1);
        teemoGraphics.fillRect(13, 24, 3, 1);
        teemoGraphics.generateTexture(key, 24, 24);
        teemoGraphics.destroy();
        return key
    }
}