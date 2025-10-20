import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

export const HelpOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(!isVisible);
      } 
      if (e.key === "Enter" && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-slate-800/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <Card className="max-w-md w-full shadow-game">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Controls</CardTitle>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Move</span>
              <kbd className="px-3 py-1 bg-muted rounded text-sm font-mono">Arrow keys</kbd>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Interact</span>
              <kbd className="px-3 py-1 bg-muted rounded text-sm font-mono">E</kbd>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Advance dialogue</span>
              <kbd className="px-3 py-1 bg-muted rounded text-sm font-mono">Enter</kbd>
            </div>
              <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Move between dialogue options</span>
              <kbd className="px-3 py-1 bg-muted rounded text-sm font-mono">Arrow keys</kbd>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-center text-muted-foreground">
              Press <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">ESC</kbd> or <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Enter</kbd> to close
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
