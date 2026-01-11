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
      <Card className="max-w-2xl w-full p-4 md:p-8 bg-[#1a1a2e] border-2 border-primary/50 animate-fade-in">
        <div className="text-center space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold text-secondary">
            Congratulations 🏆
          </h1>
          <DeveloperSkills />
          <ConnectSection />
          <div className="pt-14 border-t border-border">
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

          <div className="space-y-4">
            <div className="text-xs text-neutral-400 space-y-1">
              <p>
                Built with React + TailwindCSS + TypeScript + Phaser 3 by Ósk.
              </p>
              <p>
                The company, logo and characters are fictional. Except Ósk. Ósk
                is real.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Credits;
