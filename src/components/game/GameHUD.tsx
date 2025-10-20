import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, RotateCcw } from "lucide-react";

export const GameHUD = () => {
  const navigate = useNavigate();
  const [tokens, setTokens] = useState<string[]>([]);

  useEffect(() => {
    const loadTokens = () => {
      const saved = localStorage.getItem("osk-game-tokens");
      if (saved) {
        setTokens(JSON.parse(saved));
      } else {
        setTokens([]);
      }
    };

    loadTokens();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "osk-game-tokens") {
        loadTokens();
      }
    };

    const interval = setInterval(loadTokens, 500);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handleReset = () => {
    localStorage.removeItem("osk-game-tokens");
    setTokens([]);
    window.dispatchEvent(new CustomEvent("game-reset"));
    window.location.reload();
  };

  const formatTokenName = (token: string) => {
    return token
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="w-full bg-[#1a1a2e] border-b border-secondary shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between space-x-4 space-y-6 sm:space-y-0">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/")}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <div className="mt-0 flex flex-wrap items-center justify-center gap-x-3 cursor-default">
          <span className="text-md font-semibold text-neutral-50">
            Inventory
          </span>
          <div className="flex gap-2 flex-wrap justify-center">
            {tokens.length === 0 ? (
              <span className="text-md text-neutral-300 italic">
                No badges collected yet
              </span>
            ) : (
              tokens.map((token) => (
                <Badge
                  key={token}
                  className="pb-1 text-sm"
                >
                  ✓ {formatTokenName(token)}
                </Badge>
              ))
            )}
          </div>
        </div>

        <Button
          variant="destructive"
          size="sm"
          onClick={handleReset}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset Game
        </Button>
      </div>
    </div>
  );
};
