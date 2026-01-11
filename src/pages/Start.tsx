import { useNavigate } from "react-router-dom";
import { Play, BugPlay } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/pages/HeroBanner";
import GameTips from "@/components/pages/GameTips";
import GameControls from "@/components/pages/GameControls";
import { information } from "@/game/data/information";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center p-4 cursor-default">
      <div className="max-w-4xl w-full space-y-8 animate-fade-in">
        <HeroBanner />

        <Card className="p-4 md:p-8 border-2 bg-[#1a1a2e] text-neutral-50 border-primary/50 space-y-6">
          <div className="space-y-4 text-center md:text-start">
            <div className="flex items-center justify-center md:justify-start md:gap-3">
              <BugPlay className="w-6 h-6 text-secondary" />
              <h2 className="max-w-52 md:max-w-none text-xl md:text-2xl font-bold">
                Welcome to the interview!
              </h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              Walk into{" "}
              <strong className="text-secondary">
                {information.company.name}
              </strong>
              ' {information.company.location} office, meet the team, and
              possibly earn your way to a job offer - all in a charming
              keyboard-controlled game.
            </p>
            <GameTips />
            <GameControls />
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => navigate("/game")}
              className="w-full py-6 text-lg"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Start the Adventure
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Start;
