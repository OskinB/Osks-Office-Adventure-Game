import { FileDown, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { LinkedinIcon } from "@/assets/icons/linkedinIcon";
import { GithubIcon } from "@/assets/icons/githubIcon";
import { information } from "@/game/data/information";
import { ConnectOptionType } from "@/lib/types";

const ConnectSection = () => {
  const connectOptions: ConnectOptionType[] = [
    {
      icon: <LinkedinIcon />,
      url: information.osk.linkedin,
      text: "View LinkedIn Profile",
    },
    {
      icon: <GithubIcon />,
      url: information.osk.github,
      text: "View GitHub",
    },
    {
      icon: <FileDown />,
      url: "/files/OskB_Frontend_CV.pdf",
      text: "Open CV (PDF)",
    },
  ];

  return (
    <div className="pt-4 space-y-3">
      <h3 className="text-lg font-bold text-neutral-50">
        Thanks for playing 🎮 Let's connect!
      </h3>
      <div className="grid gap-3">
        {connectOptions.map((option) => (
          <Button
            key={option.text}
            variant="default"
            onClick={() => window.open(option.url, "_blank")}
            className="w-full"
          >
            <span className="w-4 h-4 mr-2 fill-[#1a1a2e]/80 ">
              {option.icon}
            </span>
            {option.text}
            <ExternalLink className="w-4 h-4 ml-2 stroke-[#1a1a2e]/80" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ConnectSection;
