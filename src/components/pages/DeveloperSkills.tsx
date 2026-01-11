import { Badge } from "../ui/badge";
import { information } from "@/game/data/information";

const DeveloperSkills = () => {
  return (
    <div className="bg-muted/5 border border-accent/50 rounded-lg p-4 md:p-8 space-y-4">
      <p className="text-xl md:text-2xl text-neutral-50 font-bold">
        <strong className="text-secondary">Ósk</strong> completed the{" "}
        {information.company.name} office adventure!
      </p>
      <div className="space-y-4">
        <p className="text-base md:text-lg text-neutral-300">
          {information.osk.tagline} 🤓
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {information.osk.skills.map((skill, idx) => (
            <Badge key={skill} className="px-3 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperSkills;
