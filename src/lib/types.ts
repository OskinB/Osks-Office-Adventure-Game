export interface Information {
    company: {
        name: string;
        location: string;
        imageBuilding: string;
        imageLogo: string;
        adFound: string;
    };
    osk: {
        name: string;
        tagline: string;
        skills: string[];
        linkedin: string;
        github: string;
        whyWorkHere: { answer: string; response: string }[];
    };
}

export interface DialogueLine {
    speaker: "npc" | "osk";
    name?: string;
    text: string;
}

export interface DialogueChoice {
    text: string;
    response: string;
}

export interface DialogueQuestion {
    ask: DialogueLine;
    choices: DialogueChoice[];
}

export interface NPCDialogue {
    intro: DialogueLine[];
    questions?: DialogueQuestion[];
    outro: DialogueLine[];
    token: string;
}

export interface GameTipType {
    icon: "Timer" | "Smile" | "Play";
    title: string;
    description: string;
}

export interface GameControlType {
    icon: string;
    press: string;
    description: string;
}

export interface ConnectOptionType {
    icon: React.ReactNode;
    url: string;
    text: string;
}