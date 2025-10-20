import Phaser from 'phaser'
import DialogueManager from './DialogueManager'
import InteractionManager from './InteractionManager'

export default class InputManager {
    private scene: Phaser.Scene;
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private eKey?: Phaser.Input.Keyboard.Key;
    private enterKey?: Phaser.Input.Keyboard.Key;
    private dialogueManager?: DialogueManager;
    private interactionManager?: InteractionManager;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    setDialogueManager(dialogueManager: DialogueManager) {
        this.dialogueManager = dialogueManager;
    }

    setInteractionManager(interactionManager: InteractionManager) {
        this.interactionManager = interactionManager;
    }

    setupInput() {
        this.cursors = this.scene.input.keyboard!.createCursorKeys();
        this.eKey = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.enterKey = this.scene.input.keyboard!.addKey(
            Phaser.Input.Keyboard.KeyCodes.ENTER
        );

        this.eKey.on("down", () => {
            if (!this.dialogueManager?.getInDialogue()) {
                this.interactionManager?.checkNearbyNPC();
            }
        });

        this.enterKey.on("down", () => {
            if (this.dialogueManager?.getTeemoDialogueOpen()) {
                this.dialogueManager.closeTeemoDialogue();
            } else if (this.dialogueManager?.getInDialogue()) {
                if (this.dialogueManager.getWaitingForChoice()) {
                    this.dialogueManager.selectChoice(this.dialogueManager.getSelectedChoiceIndex());
                } else {
                    this.dialogueManager.advanceDialogue();
                }
            }
        });

        this.scene.input.keyboard!.on("keydown-UP", () => {
            if (this.dialogueManager?.getWaitingForChoice() && this.dialogueManager.getSelectedChoiceIndex() > 0) {
                this.dialogueManager.setSelectedChoiceIndex(this.dialogueManager.getSelectedChoiceIndex() - 1);
                this.dialogueManager.updateDialogueChoiceHighlight();
            }
        });

        this.scene.input.keyboard!.on("keydown-DOWN", () => {
            if (
                this.dialogueManager?.getWaitingForChoice() &&
                this.dialogueManager.getSelectedChoiceIndex() < 2
            ) {
                this.dialogueManager.setSelectedChoiceIndex(this.dialogueManager.getSelectedChoiceIndex() + 1);
                this.dialogueManager.updateDialogueChoiceHighlight();
            }
        });
    }

    getCursors(): Phaser.Types.Input.Keyboard.CursorKeys | undefined {
        return this.cursors;
    }
}