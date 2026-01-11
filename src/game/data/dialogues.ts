import { information } from "./information";
import { NPCDialogue } from "@/lib/types";

export const dialogues: Record<string, NPCDialogue> = {
  maja: {
    intro: [
      {
        speaker: "npc",
        name: "Maja",
        text: "Velkommen! Hi, you must be here for something exciting?",
      },
      {
        speaker: "osk",
        text: `Yes, hi I'm Ósk😊 I saw your ad on ${information.company.adFound} so I came to apply for the frontend developer position.`,
      },
      {
        speaker: "npc",
        name: "Maja",
        text: "Ah, brave move walking right into our office unannounced. I like the confidence!",
      },
    ],
    questions: [
      {
        ask: {
          speaker: "npc",
          name: "Maja",
          text: "Well, tell me about Ósk the Developer.",
        },
        choices: [
          {
            text: "I'm from the land of fire and ice, and I moved to Copenhagen to finish my B.A. in Web Development. I'm detail-oriented, like to organize and plan ahead, and love working with creative people.",
            response:
              "From fire and ice to Danish pastries, quite the upgrade! I can tell you've got the drive and the sweet spot for teamwork. ",
          },
          {
            text: "I'm from Iceland and moved here for my bachelor's degree. I'm a very visual and techy person, that's why I love building cool, responsive stuff. I really enjoy taking a beautiful design and turning it into something real that works as smoothly as butter!",
            response:
              "Smooth as butter? Now that's the kind of frontend energy we like to hear. If our UI can glide like that, users might actually forget about the bugs we didn't fix yet.",
          },
        ],
      },
    ],
    outro: [
      {
        speaker: "npc",
        name: "Maja",
        text: "Here, take this visitor badge and go talk to Anders in HR. They love meeting new talent!",
      },
    ],
    token: "visitor-badge",
  },

  anders: {
    intro: [
      {
        speaker: "npc",
        name: "Anders",
        text: "Hej Ósk! Welcome to HR, I hear you're applying for the frontend position.",
      },
      {
        speaker: "osk",
        text: "Yes, I'm excited to show what I can bring to the table.",
      },
    ],
    questions: [
      {
        ask: {
          speaker: "npc",
          name: "Anders",
          text: `Why do you want to come work for ${information.company.name}?`,
        },
        choices: [
          ...information.osk.whyWorkHere.map((choice) => ({
            text: choice.answer,
            response: choice.response,
          })),
        ],
      },
    ],
    outro: [
      {
        speaker: "npc",
        name: "Anders",
        text: "Here's your HR token, go meet Freja in the meeting room. She'll test your dev chops!",
      },
    ],
    token: "hr-token",
  },

  freja: {
    intro: [
      {
        speaker: "npc",
        name: "Freja",
        text: "Hi Ósk! I'm Freja, Head of Development here. Heard good things already.",
      },
    ],
    questions: [
      {
        ask: {
          speaker: "npc",
          name: "Freja",
          text: "Do you have a preferred frontend stack these days?",
        },
        choices: [
          {
            text: "I've been working with React and TypeScript for the past couple of years, and it's really become my go-to stack. That said, I would like to work more with Vue, I used it during my internships and again for my bachelor's project and it just feels more 'developer-friendly'😄",
            response: "Nice, it's useful to have worked with both!",
          },
          {
            text: "For styling, I'm really into TailwindCSS, a utility-first framework, because it lets you quickly style elements while seeing exactly which CSS properties are applied.",
            response:
              "Ah, Tailwind, the framework that lets you move fast while staying precise. A solid choice for making things both beautiful and maintainable.",
          },
        ],
      },
      {
        ask: {
          speaker: "npc",
          name: "Freja",
          text: "How comfortable are you working with Figma and translating a design into code?",
        },
        choices: [
          {
            text: "Very comfortable, I think Figma is amazing! I've been using it for several years in both school and work, for everything from web design and user flow charts to moodboards and team collaboration in FigJam.",
            response:
              "Nice, all-around Figma skills from mockups to FigJam chaos. We could use someone who can navigate both the creative and practical sides of design.",
          },
          {
            text: "Ooh, I love Figma, it's so intuitive and easy to work with. I've used it in my personal life and for personal projects.",
            response:
              "Love to hear that, Figma fans fit right in here. It's where half our ideas are born and occasionally where we hide our Easter eggs.",
          },
        ],
      },
    ],
    outro: [
      {
        speaker: "npc",
        name: "Freja",
        text: "Very good answers! Here's your Dev Token. CTO's office is waiting.",
      },
    ],
    token: "dev-token",
  },

  jonas: {
    intro: [
      {
        speaker: "npc",
        name: "Jonas",
        text: "Hej Ósk. I'm Jonas, CTO. Oh, a quick dev joke for you: \nHow do you comfort a JavaScript bug?",
      },
      { speaker: "osk", text: "How?" },
      {
        speaker: "npc",
        name: "Jonas",
        text: "You console it! 😉",
      },
    ],
    questions: [
      {
        ask: {
          speaker: "npc",
          name: "Jonas",
          text: "So, final question: We like people who can build smooth experiences. How do you usually approach a new task or feature?",
        },
        choices: [
          {
            text: "Good question! I usually start by ensuring I fully understand the requirements and the purpose behind the task, what it needs to do, who it's for, and how it fits into the bigger picture.",
            response:
              "Solid approach, understanding the 'why' before the 'how' is exactly what keeps projects running smoothly.",
          },
          {
            text: "Once I have all the information about the task, I break things down into a to-do list. I think through the user's flow, what it needs to feel seamless, what actions should trigger what responses, and which states are necessary for a complete experience.",
            response:
              "Love that structured approach, thinking through the user flow and states early always pays off. It's like setting checkpoints before the boss fight.",
          },
        ],
      },
    ],
    outro: [
      {
        speaker: "npc",
        name: "Jonas",
        text: "Great! I think you'll fit right in. Here's your final token, and your job offer!",
      },
      {
        speaker: "npc",
        name: "Jonas",
        text: "Congratulations, Ósk🎉 You're hired (in-game)!",
      },
    ],
    token: "job-offer",
  },

  "couch-npc": {
    intro: [
      { speaker: "osk", text: "Hey! What are you playing? TowerFall?" },
      {
        speaker: "npc",
        name: "Employee",
        text: "Oh, hi! No, we're playing the new Super Mario Bros. Pretty epic so far!",
      },
    ],
    questions: [
      {
        ask: {
          speaker: "npc",
          name: "Employee",
          text: "Are you a gamer yourself? Playing anything fun at the moment?",
        },
        choices: [
          {
            text: "Yeah! I'm really into RPGs with great stories, clever puzzles, and a bit of epic combat🧙‍♂️ Right now, I'm playing God of War: Ragnarök!",
            response:
              "Ah, great choice. Nothing like solving puzzles and throwing axes to unwind after a day of debugging.",
          },
          {
            text: "I'm really into League of Legends and Overwatch. I love League for its universe and characters, especially Teemo, the little guy's pure chaos wrapped in cuteness😊 And Overwatch is just my go-to for quick, action-packed fun.",
            response:
              "Ah, the League lore and Overwatch chaos combo, classy. That's like enjoying fine art while dodging rockets.",
          },
        ],
      },
    ],
    outro: [
      {
        speaker: "npc",
        name: "Employee",
        text: "Well, good luck with the interview! Feel free to join us for a game session later.",
      },
      { speaker: "osk", text: "Thanks! I might just take you up on that." },
    ],
    token: "gamer-chat",
  },
};
