import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ConnectSection from "@/components/pages/ConnectSection";
import DeveloperSkills from "@/components/pages/DeveloperSkills";

const Credits = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("osk-game-tokens");
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center p-4 cursor-default">
      <Card className="max-w-2xl w-full p-8 bg-[#1a1a2e] border-2 border-primary/50 animate-fade-in">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-secondary pixel-text">
              🏆 Congratulations 🏆
            </h1>
            <h2 className="text-2xl text-neutral-50">
              You're hired! (In-game)
            </h2>
          </div>
          <DeveloperSkills />
          <ConnectSection />
          <div className="pt-6 border-t border-border space-y-3">
            <div className="space-y-2">
              <Button
                variant="outline"
                onClick={() => navigate("/game")}
                className="px-6"
                size="sm"
              >
                <Play className="w-5 h-5 mr-2 stroke-[#1a1a2e]/80" />
                Play again
              </Button>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <p className="text-sm text-primary font-bold">
              Thanks for playing! 🎮
            </p>
            <div className="text-xs text-neutral-400 space-y-1">
              <p>
                Built with React + TailwindCSS + TypeScript + Phaser 3 by Ósk.
              </p>
              <p>
                The company, logo and characters are fictional. Except Ósk. Ósk is real.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Credits;