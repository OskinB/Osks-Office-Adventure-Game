import Phaser from 'phaser'

export default class SpriteCreatorMains {
    static playerHair = 0xb57f50;
    static playerSkin = 0xf5d6c6;
    static playerNose = 0xc4ab9e
    static playerEye = 0x0b5394;
    static playerEyeWhite = 0xF5F5F5;
    static playerMouth = 0x783f04;
    static playerShirt = 0xa64d79;
    static playerPants = 0x5b5b5b;
    static playerShoe = 0x351c75;

    static playerGraphics(scene: Phaser.Scene, key = 'player'): string {
        if (scene.textures.exists(key)) return key
        const oskGraphics = scene.add.graphics();
        // Shadow
        oskGraphics.fillStyle(0x000000, 0.2);
        oskGraphics.fillEllipse(24, 44, 22, 7);
        // Long hair
        oskGraphics.fillStyle(SpriteCreatorMains.playerHair);
        oskGraphics.fillEllipse(24, 22, 22, 18);
        oskGraphics.fillRect(12, 18, 24, 14);
        // Body
        oskGraphics.fillStyle(SpriteCreatorMains.playerShirt);
        oskGraphics.fillRect(14, 22, 20, 10);
        // Shirt
        oskGraphics.fillStyle(0x000000, 0.12);
        oskGraphics.fillRect(14, 27, 20, 5);
        oskGraphics.fillStyle(0x000000, 0.06);
        oskGraphics.fillRect(16, 22, 2, 10);
        oskGraphics.fillRect(30, 22, 2, 10);
        // Arms
        oskGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskGraphics.fillRect(10, 23, 5, 9);
        oskGraphics.fillRect(33, 23, 5, 9);
        // Pants
        oskGraphics.fillStyle(SpriteCreatorMains.playerPants);
        oskGraphics.fillRect(13, 32, 10, 10);
        oskGraphics.fillRect(25, 32, 10, 10);
        oskGraphics.fillStyle(0x000000, 0.10);
        oskGraphics.fillRect(22, 32, 2, 10);
        oskGraphics.fillStyle(0x000000, 0.06);
        oskGraphics.fillRect(14, 32, 1, 10);
        oskGraphics.fillRect(29, 32, 1, 10);
        // Shoes
        oskGraphics.fillStyle(SpriteCreatorMains.playerShoe);
        oskGraphics.fillRect(13, 41, 10, 3);
        oskGraphics.fillRect(25, 41, 10, 3);
        // Neck
        oskGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskGraphics.fillRect(20, 18, 8, 5);
        // Head
        oskGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskGraphics.fillCircle(24, 12, 9);
        oskGraphics.fillStyle(0x000000, 0.06);
        oskGraphics.fillEllipse(24, 16, 12, 6);
        // Hair in front
        oskGraphics.fillStyle(SpriteCreatorMains.playerHair);
        oskGraphics.fillCircle(24, 8, 9);
        oskGraphics.fillRect(16, 6, 16, 4);
        oskGraphics.fillCircle(18, 9, 4);
        oskGraphics.fillCircle(30, 9, 4);
        // Shape hair in front
        oskGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskGraphics.fillCircle(24, 11, 6);
        oskGraphics.fillRect(18, 13, 12, 4);
        // Eyes
        oskGraphics.fillStyle(SpriteCreatorMains.playerEye, 1);
        oskGraphics.fillRect(19, 8, 4, 4);
        oskGraphics.fillRect(26, 8, 4, 4);
        oskGraphics.fillStyle(SpriteCreatorMains.playerEyeWhite, 0.8);
        oskGraphics.fillRect(19, 8, 2, 2);
        oskGraphics.fillRect(26, 8, 2, 2);
        // Nose 
        oskGraphics.fillStyle(SpriteCreatorMains.playerNose, 1);
        oskGraphics.fillRect(23, 13, 2, 1);
        // Smile using lower arc only
        oskGraphics.lineStyle(1.2, SpriteCreatorMains.playerMouth);
        oskGraphics.beginPath();
        oskGraphics.arc(24, 15, 2.0, 0, Math.PI, false);
        oskGraphics.strokePath();
        oskGraphics.generateTexture(key, 48, 48);
        oskGraphics.destroy();
        return key
    }

    static playerLeftUpGraphics(scene: Phaser.Scene, key = 'player-left-up'): string {
        if (scene.textures.exists(key)) return key
        // Left foot up for walking animation
        const oskLeftGraphics = scene.add.graphics();
        // Shadow
        oskLeftGraphics.fillStyle(0x000000, 0.2);
        oskLeftGraphics.fillEllipse(24, 44, 22, 7);
        // Long hair
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerHair);
        oskLeftGraphics.fillEllipse(24, 22, 22, 18);
        oskLeftGraphics.fillRect(12, 18, 24, 14);
        // Body
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerShirt);
        oskLeftGraphics.fillRect(14, 22, 20, 10);
        // Shirt shading
        oskLeftGraphics.fillStyle(0x000000, 0.12);
        oskLeftGraphics.fillRect(14, 27, 20, 5);
        oskLeftGraphics.fillStyle(0x000000, 0.06);
        oskLeftGraphics.fillRect(16, 22, 2, 10);
        oskLeftGraphics.fillRect(30, 22, 2, 10);
        // Arms
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskLeftGraphics.fillRect(10, 23, 5, 9);
        oskLeftGraphics.fillRect(33, 23, 5, 9);
        // Pants
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerPants);
        oskLeftGraphics.fillRect(13, 32, 10, 10);
        oskLeftGraphics.fillRect(25, 32, 10, 10);
        oskLeftGraphics.fillStyle(0x000000, 0.10);
        oskLeftGraphics.fillRect(22, 32, 2, 10);
        oskLeftGraphics.fillStyle(0x000000, 0.06);
        oskLeftGraphics.fillRect(14, 32, 1, 10);
        oskLeftGraphics.fillRect(29, 32, 1, 10);
        // Shoes
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerShoe);
        oskLeftGraphics.fillRect(13, 38, 10, 3);
        oskLeftGraphics.fillRect(25, 41, 10, 3);
        // Neck
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskLeftGraphics.fillRect(20, 18, 8, 5);
        // Head
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskLeftGraphics.fillCircle(24, 12, 9);
        oskLeftGraphics.fillStyle(0x000000, 0.06);
        oskLeftGraphics.fillEllipse(24, 16, 12, 6);
        // Hair in front
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerHair);
        oskLeftGraphics.fillCircle(24, 8, 9);
        oskLeftGraphics.fillRect(16, 6, 16, 4);
        oskLeftGraphics.fillCircle(18, 9, 4);
        oskLeftGraphics.fillCircle(30, 9, 4);
        // Shape hair in front
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskLeftGraphics.fillCircle(24, 11, 6);
        oskLeftGraphics.fillRect(18, 13, 12, 4);
        // Eyes
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerEye, 1);
        oskLeftGraphics.fillRect(19, 8, 4, 4);
        oskLeftGraphics.fillRect(26, 8, 4, 4);
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerEyeWhite, 0.8);
        oskLeftGraphics.fillRect(19, 8, 2, 2);
        oskLeftGraphics.fillRect(26, 8, 2, 2);
        // Nose 
        oskLeftGraphics.fillStyle(SpriteCreatorMains.playerNose, 1);
        oskLeftGraphics.fillRect(23, 13, 2, 1);
        // Smile using lower arc only
        oskLeftGraphics.lineStyle(1.2, SpriteCreatorMains.playerMouth);
        oskLeftGraphics.beginPath();
        oskLeftGraphics.arc(24, 15, 2.0, 0, Math.PI, false);
        oskLeftGraphics.strokePath();
        oskLeftGraphics.generateTexture(key, 48, 48);
        oskLeftGraphics.destroy();
        return key
    }

    static playerRightUpGraphics(scene: Phaser.Scene, key = 'player-right-up'): string {
        if (scene.textures.exists(key)) return key
        // Right foot up for walking animation
        const oskRightGraphics = scene.add.graphics();
        // Shadow
        oskRightGraphics.fillStyle(0x000000, 0.2);
        oskRightGraphics.fillEllipse(24, 44, 22, 7);
        // Hair back
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerHair);
        oskRightGraphics.fillEllipse(24, 22, 22, 18);
        oskRightGraphics.fillRect(12, 18, 24, 14);
        // Body
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerShirt);
        oskRightGraphics.fillRect(14, 22, 20, 10);
        // Shirt shading
        oskRightGraphics.fillStyle(0x000000, 0.12);
        oskRightGraphics.fillRect(14, 27, 20, 5);
        oskRightGraphics.fillStyle(0x000000, 0.06);
        oskRightGraphics.fillRect(16, 22, 2, 10);
        oskRightGraphics.fillRect(30, 22, 2, 10);
        // Arms
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskRightGraphics.fillRect(10, 23, 5, 9);
        oskRightGraphics.fillRect(33, 23, 5, 9);
        // Pants
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerPants);
        oskRightGraphics.fillRect(13, 32, 10, 10);
        oskRightGraphics.fillRect(25, 32, 10, 10);
        oskRightGraphics.fillStyle(0x000000, 0.10);
        oskRightGraphics.fillRect(22, 32, 2, 10);
        oskRightGraphics.fillStyle(0x000000, 0.06);
        oskRightGraphics.fillRect(14, 32, 1, 10);
        oskRightGraphics.fillRect(29, 32, 1, 10);
        // Shoes
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerShoe);
        oskRightGraphics.fillRect(13, 41, 10, 3);
        oskRightGraphics.fillRect(25, 38, 10, 3);
        // Neck
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskRightGraphics.fillRect(20, 18, 8, 5);
        // Head
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskRightGraphics.fillCircle(24, 12, 9);
        oskRightGraphics.fillStyle(0x000000, 0.06);
        oskRightGraphics.fillEllipse(24, 16, 12, 6);
        // Hair in front
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerHair);
        oskRightGraphics.fillCircle(24, 8, 9);
        oskRightGraphics.fillRect(16, 6, 16, 4);
        oskRightGraphics.fillCircle(18, 9, 4);
        oskRightGraphics.fillCircle(30, 9, 4);
        // Shape hair in front
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerSkin);
        oskRightGraphics.fillCircle(24, 11, 6);
        oskRightGraphics.fillRect(18, 13, 12, 4);
        // Eyes
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerEye, 1);
        oskRightGraphics.fillRect(19, 8, 4, 4);
        oskRightGraphics.fillRect(26, 8, 4, 4);
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerEyeWhite, 0.8);
        oskRightGraphics.fillRect(19, 8, 2, 2);
        oskRightGraphics.fillRect(26, 8, 2, 2);
        // Nose 
        oskRightGraphics.fillStyle(SpriteCreatorMains.playerNose, 1);
        oskRightGraphics.fillRect(23, 13, 2, 1);
        // Smile using lower arc only
        oskRightGraphics.lineStyle(1.2, SpriteCreatorMains.playerMouth);
        oskRightGraphics.beginPath();
        oskRightGraphics.arc(24, 15, 2.0, 0, Math.PI, false);
        oskRightGraphics.strokePath();
        oskRightGraphics.generateTexture(key, 48, 48);
        oskRightGraphics.destroy();
        return key
    }

    static majaGraphics(scene: Phaser.Scene, key = 'maja'): string {
        if (scene.textures.exists(key)) return key
        const majaGraphics = scene.add.graphics();
        // Shadow
        majaGraphics.fillStyle(0x000000, 0.2);
        majaGraphics.fillEllipse(24, 44, 20, 6);
        // Legs
        majaGraphics.fillStyle(0x2c3e50);
        majaGraphics.fillRect(14, 32, 9, 12);
        majaGraphics.fillRect(25, 32, 9, 12);
        // Pants
        majaGraphics.fillStyle(0x000000, 0.15);
        majaGraphics.fillRect(14, 35, 9, 9);
        majaGraphics.fillRect(25, 35, 9, 9);
        majaGraphics.fillStyle(0x000000, 0.08);
        majaGraphics.fillRect(15, 32, 1, 12);
        majaGraphics.fillRect(28, 32, 1, 12);
        // Shoes
        majaGraphics.fillStyle(0x1a1a1a);
        majaGraphics.fillRect(14, 42, 9, 3);
        majaGraphics.fillRect(25, 42, 9, 3);
        // Body
        majaGraphics.fillStyle(0x89cff0);
        majaGraphics.fillRect(14, 20, 20, 14);
        // Blouse shading
        majaGraphics.fillStyle(0x000000, 0.08);
        majaGraphics.fillRect(14, 25, 20, 9);
        majaGraphics.fillStyle(0x000000, 0.04);
        majaGraphics.fillRect(16, 20, 2, 14);
        majaGraphics.fillRect(30, 20, 2, 14);
        // Arms
        majaGraphics.fillStyle(0xe8b896);
        majaGraphics.fillRect(10, 22, 5, 10);
        majaGraphics.fillRect(33, 22, 5, 10);
        // Neck
        majaGraphics.fillStyle(0xe8b896);
        majaGraphics.fillRect(20, 17, 8, 4);
        // Head (back of head)
        majaGraphics.fillStyle(0xe8b896);
        majaGraphics.fillCircle(24, 11, 8);
        // Hair 
        majaGraphics.fillStyle(0x5d4037);
        // Hair back 
        majaGraphics.fillEllipse(24, 18, 20, 16);
        majaGraphics.fillRect(14, 12, 20, 12);
        // Hair top and sides
        majaGraphics.fillCircle(24, 7, 8);
        majaGraphics.fillEllipse(24, 10, 16, 10);
        // Side hair strands
        majaGraphics.fillStyle(0x6d4c41);
        majaGraphics.fillEllipse(16, 14, 4, 10);
        majaGraphics.fillEllipse(32, 14, 4, 10);
        // Hair highlights for depth
        majaGraphics.fillStyle(0x8b6f47);
        majaGraphics.fillEllipse(22, 8, 4, 6);
        majaGraphics.fillEllipse(26, 8, 4, 6);
        majaGraphics.generateTexture(key, 48, 48);
        majaGraphics.destroy();
        return key
    }

    static andersGraphics(scene: Phaser.Scene, key = 'anders'): string {
        if (scene.textures.exists(key)) return key
        const andersGraphics = scene.add.graphics();
        // Shadow
        andersGraphics.fillStyle(0x000000, 0.2);
        andersGraphics.fillEllipse(24, 44, 20, 6);
        // Legs
        andersGraphics.fillStyle(0x5f6368);
        andersGraphics.fillRect(14, 32, 9, 12);
        andersGraphics.fillRect(25, 32, 9, 12);
        // Pants shading
        andersGraphics.fillStyle(0x000000, 0.10);
        andersGraphics.fillRect(14, 35, 9, 9);
        andersGraphics.fillRect(25, 35, 9, 9);
        andersGraphics.fillStyle(0x000000, 0.05);
        andersGraphics.fillRect(15, 32, 1, 12);
        andersGraphics.fillRect(28, 32, 1, 12);
        // Shoes
        andersGraphics.fillStyle(0x4a3f35);
        andersGraphics.fillRect(14, 42, 9, 3);
        andersGraphics.fillRect(25, 42, 9, 3);
        // Body
        andersGraphics.fillStyle(0x34495e);
        andersGraphics.fillRect(14, 20, 20, 14);
        // Shirt shading
        andersGraphics.fillStyle(0x000000, 0.12);
        andersGraphics.fillRect(14, 25, 20, 9);
        andersGraphics.fillStyle(0x000000, 0.06);
        andersGraphics.fillRect(16, 20, 2, 14);
        andersGraphics.fillRect(30, 20, 2, 14);
        // Arms
        andersGraphics.fillStyle(0xd4a574);
        andersGraphics.fillRect(10, 22, 5, 10);
        andersGraphics.fillRect(33, 22, 5, 10);
        // Neck
        andersGraphics.fillStyle(0xd4a574);
        andersGraphics.fillRect(20, 17, 8, 4);
        // Head
        andersGraphics.fillStyle(0xd4a574);
        andersGraphics.fillCircle(24, 11, 8);
        // Hair
        andersGraphics.fillStyle(0x3e2723);
        andersGraphics.fillCircle(24, 8, 8);
        andersGraphics.fillRect(17, 8, 14, 5);
        andersGraphics.fillCircle(19, 9, 3);
        andersGraphics.fillCircle(29, 9, 3);
        andersGraphics.generateTexture(key, 48, 48);
        andersGraphics.destroy();
        return key
    }

    static frejaGraphics(scene: Phaser.Scene, key = 'freja'): string {
        if (scene.textures.exists(key)) return key
        const frejaGraphics = scene.add.graphics();
        // Shadow
        frejaGraphics.fillStyle(0x000000, 0.2);
        frejaGraphics.fillEllipse(24, 44, 20, 6);
        // Legs
        frejaGraphics.fillStyle(0xb8a893);
        frejaGraphics.fillRect(14, 32, 9, 12);
        frejaGraphics.fillRect(25, 32, 9, 12);
        // Pants shading
        frejaGraphics.fillStyle(0x000000, 0.08);
        frejaGraphics.fillRect(14, 35, 9, 9);
        frejaGraphics.fillRect(25, 35, 9, 9);
        frejaGraphics.fillStyle(0x000000, 0.04);
        frejaGraphics.fillRect(15, 32, 1, 12);
        frejaGraphics.fillRect(28, 32, 1, 12);
        // Shoe
        frejaGraphics.fillStyle(0xf5f5f5);
        frejaGraphics.fillRect(14, 42, 9, 3);
        frejaGraphics.fillRect(25, 42, 9, 3);
        // Body
        frejaGraphics.fillStyle(0x9b59b6);
        frejaGraphics.fillRect(14, 20, 20, 14);
        // Cardigan shading
        frejaGraphics.fillStyle(0x000000, 0.10);
        frejaGraphics.fillRect(14, 25, 20, 9);
        frejaGraphics.fillStyle(0x000000, 0.05);
        frejaGraphics.fillRect(16, 20, 2, 14);
        frejaGraphics.fillRect(30, 20, 2, 14);
        // Arms
        frejaGraphics.fillStyle(0xf0c9a0);
        frejaGraphics.fillRect(10, 22, 5, 10);
        frejaGraphics.fillRect(33, 22, 5, 10);
        // Neck
        frejaGraphics.fillStyle(0xf0c9a0);
        frejaGraphics.fillRect(20, 17, 8, 4);
        // Head
        frejaGraphics.fillStyle(0xf0c9a0);
        frejaGraphics.fillCircle(24, 11, 8);
        // Hair
        frejaGraphics.fillStyle(0xc0392b);
        frejaGraphics.fillCircle(24, 8, 9);
        frejaGraphics.fillRect(15, 8, 18, 8);
        frejaGraphics.fillCircle(18, 13, 4);
        frejaGraphics.fillCircle(24, 15, 4);
        frejaGraphics.fillCircle(30, 13, 4);
        frejaGraphics.fillCircle(21, 11, 3);
        frejaGraphics.fillCircle(27, 11, 3);
        frejaGraphics.generateTexture(key, 48, 48);
        frejaGraphics.destroy();
        return key
    }

    static jonasGraphics(scene: Phaser.Scene, key = 'jonas'): string {
        if (scene.textures.exists(key)) return key
        const jonasGraphics = scene.add.graphics();
        // Shadow
        jonasGraphics.fillStyle(0x000000, 0.2);
        jonasGraphics.fillEllipse(24, 44, 20, 6);
        // Legs
        jonasGraphics.fillStyle(0xc3b091);
        jonasGraphics.fillRect(14, 32, 9, 12);
        jonasGraphics.fillRect(25, 32, 9, 12);
        // Pants
        jonasGraphics.fillStyle(0x000000, 0.08);
        jonasGraphics.fillRect(14, 35, 9, 9);
        jonasGraphics.fillRect(25, 35, 9, 9);
        jonasGraphics.fillStyle(0x000000, 0.04);
        jonasGraphics.fillRect(15, 32, 1, 12);
        jonasGraphics.fillRect(28, 32, 1, 12);
        // Shoes
        jonasGraphics.fillStyle(0x6d4c41);
        jonasGraphics.fillRect(14, 42, 9, 3);
        jonasGraphics.fillRect(25, 42, 9, 3);
        // Body
        jonasGraphics.fillStyle(0x27ae60);
        jonasGraphics.fillRect(14, 20, 20, 14);
        // Shirt
        jonasGraphics.fillStyle(0x000000, 0.10);
        jonasGraphics.fillRect(14, 25, 20, 9);
        jonasGraphics.fillStyle(0x000000, 0.05);
        jonasGraphics.fillRect(16, 20, 2, 14);
        jonasGraphics.fillRect(30, 20, 2, 14);
        jonasGraphics.fillStyle(0x229954);
        jonasGraphics.fillRect(18, 20, 12, 2);
        // Arms
        jonasGraphics.fillStyle(0xf5d6b5);
        jonasGraphics.fillRect(10, 22, 5, 10);
        jonasGraphics.fillRect(33, 22, 5, 10);
        // Neck
        jonasGraphics.fillStyle(0xf5d6b5);
        jonasGraphics.fillRect(20, 17, 8, 4);
        // Head
        jonasGraphics.fillStyle(0xf5d6b5);
        jonasGraphics.fillCircle(24, 11, 8);
        // Hair
        jonasGraphics.fillStyle(0xf9e79f);
        jonasGraphics.fillCircle(24, 8, 7);
        jonasGraphics.fillRect(17, 8, 14, 3);
        jonasGraphics.fillCircle(20, 9, 3);
        jonasGraphics.fillCircle(28, 9, 3);
        jonasGraphics.generateTexture(key, 48, 48);
        jonasGraphics.destroy();
        return key
    }
}
