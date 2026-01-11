import GameControl from "./GameControl";
import { GameControlType } from "@/lib/types";

const GameControls = () => {
  const controls: GameControlType[] = [
    {
      icon: "⬆️⬇️⬅️➡️",
      press: "Arrow",
      description: "keys to move",
    },
    {
      icon: "⌨️",
      press: "E",
      description: "to talk with NPCs",
    },
    {
      icon: "⌨️",
      press: "Enter",
      description: "to advance dialogue",
    },
    {
      icon: "🎮",
      press: "ESC",
      description: "for controls",
    },
    {
      icon: "💾",
      press: "Auto-saves",
      description: "your progress",
    },
    {
      icon: "🖥️",
      press: "Desktop",
      description: "recommended",
    },
  ];

  return (
    <div className="bg-muted/5 p-4 rounded-lg border border-primary/50">
      <h3 className="font-bold mb-2">Controls:</h3>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 justify-center text-sm text-neutral-300">
        {controls.map((control) => (
          <GameControl key={control.press} {...control} />
        ))}
      </div>
    </div>
  );
};

export default GameControls;
