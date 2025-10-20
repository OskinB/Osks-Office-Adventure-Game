import Phaser from "phaser";
import MapManager from '../managers/MapManager';
import DialogueManager from '../managers/DialogueManager';
import InteractionManager from '../managers/InteractionManager';
import InputManager from '../managers/InputManager';
import { information } from "../data/information";

export class GameScene extends Phaser.Scene {
  private player?: Phaser.Physics.Arcade.Sprite;
  private dialogueManager?: DialogueManager;
  private interactionManager?: InteractionManager;
  private inputManager?: InputManager;
  private tokens: Set<string> = new Set();
  private npcs: Map<string, Phaser.Physics.Arcade.Sprite> = new Map();
  private npcNameTags: Map<string, Phaser.GameObjects.Text> = new Map();
  private interactionPrompt?: Phaser.GameObjects.Container;
  private playerCanMove: boolean = false; t

  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.image("company-logo", information.company.imageLogo);
    MapManager.createSprites(this);
  }

  create() {
    const saved = localStorage.getItem("osk-game-tokens");
    if (saved) {
      this.tokens = new Set(JSON.parse(saved));
    }

    // Initialize DialogueManager
    this.dialogueManager = new DialogueManager(this);
    this.dialogueManager.setTokens(this.tokens);
    this.dialogueManager.setNPCNameTags(this.npcNameTags);

    // Objects created in the correct order
    this.player = MapManager.createPlayer(this, () => {
      this.playerCanMove = true;
      this.interactionManager?.showInitialThinkBubble();
    });

    // Initialize InteractionManager after player is created
    this.interactionManager = new InteractionManager(this);
    this.interactionManager.setPlayer(this.player);
    this.interactionManager.setNPCs(this.npcs);
    this.interactionManager.setDialogueManager(this.dialogueManager);
    this.interactionManager.setTokens(this.tokens);

    // Initialize InputManager
    this.inputManager = new InputManager(this);
    this.inputManager.setDialogueManager(this.dialogueManager);
    this.inputManager.setInteractionManager(this.interactionManager);
    MapManager.createWorld(this, this.player);
    MapManager.createNPCs(this, this.player!, this.npcs, this.npcNameTags);
    MapManager.createBackgroundNPCs(this, this.player!, this.npcs, this.npcNameTags);
    MapManager.createAreaLabels(this);
    this.inputManager?.setupInput();
    const dialogueUI = MapManager.createDialogueUI(this);
    this.dialogueManager?.setDialogueUI(dialogueUI.dialogueBox, dialogueUI.nameText, dialogueUI.dialogueText);
    this.interactionPrompt = MapManager.createInteractionPrompt(this);
    this.dialogueManager?.setInteractionPrompt(this.interactionPrompt);
    this.interactionManager?.setInteractionPrompt(this.interactionPrompt);

    // Camera follows player character
    this.cameras.main.setZoom(1.8);
    this.cameras.main.setBounds(0, 0, 28 * 32, 21 * 32);
    this.cameras.main.startFollow(this.player!, true, 0.1, 0.1);
  }

  update() {
    if (!this.player || !this.inputManager?.getCursors()) return;

    // Checks if player can move
    if (!this.dialogueManager?.getInDialogue() && !this.dialogueManager?.getTeemoDialogueOpen() && this.playerCanMove) {
      const speed = 160;
      this.player.setVelocity(0);
      let moving = false;

      const cursors = this.inputManager?.getCursors();
      if (cursors?.left.isDown) {
        this.player.setVelocityX(-speed);
        moving = true;
        this.player.anims.play("walk-left", true);
      } else if (cursors?.right.isDown) {
        this.player.setVelocityX(speed);
        moving = true;
        this.player.anims.play("walk-right", true);
      }

      let horizontalMoving = cursors?.left.isDown || cursors?.right.isDown;

      if (cursors?.up.isDown) {
        this.player.setVelocityY(-speed);
        moving = true;
        if (!horizontalMoving) {
          this.player.anims.play("walk-up", true);
        }
      } else if (cursors?.down.isDown) {
        this.player.setVelocityY(speed);
        moving = true;
        if (!horizontalMoving) {
          this.player.anims.play("walk-down", true);
        }
      }

      if (!moving) {
        this.player.anims.stop();
      }

      this.player.body.velocity.normalize().scale(speed);
      this.interactionManager?.checkInteractionPrompt();
      this.interactionManager?.checkTVProximity();
      this.interactionManager?.checkDogBedProximity();
      this.interactionManager?.checkTopRightNPCProximity();
      this.interactionManager?.checkTopWindowProximity();
      this.interactionManager?.checkTeemoSpawn();
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }
  }
}