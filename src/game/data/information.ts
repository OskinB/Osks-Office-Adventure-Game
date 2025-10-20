import officeBuilding from "@/assets/images/office-building.png";
import pixelLogo from "@/assets/images/pixel-logo.png";
import { Information } from "@/lib/types";

export const information: Information = {
    "company": {
        "name": "Turbo Bug Studios",
        "location": "Copenhagen",
        "adFound": "LinkedIn",
        "imageBuilding": officeBuilding,
        "imageLogo": pixelLogo
    },
    "osk": {
        "name": "Ósk",
        "tagline": "A frontend developer with a passion for UX",
        "skills": [
            "React",
            "TypeScript",
            "Vue",
            "TailwindCSS",
            "Figma",
        ],
        "linkedin": "https://www.linkedin.com/in/osk-bjorns",
        "github": "https://github.com/OskinB",
        "whyWorkHere": [
            {
                "answer": "Because, as a gamer myself, I was really excited to see you looking for a developer with my skill set to build games. It looks like you're creating some seriously cool stuff, and I'd love to be part of that.",
                "response": "Excellent! Always good to have someone who gets what makes a player tick. Passion + skillset = a combo we can work with."
            },
            {
                "answer": "It's an exciting challenge to shift from general software development to game development. I hadn't really considered building games with web technologies before.",
                "response": "Yeah, we like pushing web tech into places it's not supposed to go, keeps things interesting, and mildly terrifying."
            }
        ]
    }
};