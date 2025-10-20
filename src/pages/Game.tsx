import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { GameScene } from "@/game/scenes/GameScene";
import { HelpOverlay } from "@/components/game/HelpOverlay";
import { GameHUD } from "@/components/game/GameHUD";

const Game = () => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (gameRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: "game-container",
      width: 1280,
      height: 720,
      backgroundColor: "#292828",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false,
        },
      },
      scene: [GameScene],
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "game-container",
      },
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex flex-col">
      <GameHUD />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          <div
            id="game-container"
            className="rounded-lg overflow-hidden shadow-game bg-card w-full aspect-video"
          />
          <HelpOverlay />
        </div>
      </div>
    </div>
  );
};

export default Game;
