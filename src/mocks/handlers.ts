import { rest } from "msw";

const API_URL = "https://myapi.com/";
export const handlers = [
  rest.get(API_URL + "test/questions", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          text: "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
          answers: [
            { label: "Don’t dare to interrupt them", value: 4 },
            {
              label:
                "Think it’s more important to give them some of your time; work can wait",
              value: 1,
            },
            { label: "Listen, but with only with half an ear", value: 2 },
            {
              label:
                "Interrupt and explain that you are really busy at the moment",
              value: 3,
            },
          ],
        },
        {
          text: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
          answers: [
            { label: "Look at your watch every two minutes", value: 2 },
            {
              label: "Bubble with inner anger, but keep quiet",
              value: 1,
            },
            {
              label:
                "Explain to other equally impatient people in the room that the doctor is always running late",
              value: 4,
            },
            {
              label:
                "Complain in a loud voice, while tapping your foot impatiently",
              value: 3,
            },
          ],
        },
        {
          text: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
          answers: [
            { label: "Don’t dare contradict them", value: 2 },
            {
              label: "Think that they are obviously right",
              value: 1,
            },
            {
              label: "Defend your own point of view, tooth and nail",
              value: 4,
            },
            {
              label: "Continuously interrupt your colleague",
              value: 3,
            },
          ],
        },
        {
          text: "You are taking part in a guided tour of a museum. You:",
          answers: [
            {
              label:
                "Are a bit too far towards the back so don’t really hear what the guide is saying",
              value: 2,
            },
            {
              label: "Follow the group without question",
              value: 1,
            },
            {
              label: "Make sure that everyone is able to hear properly",
              value: 3,
            },
            {
              label:
                "Are right up the front, adding your own comments in a loud voice",
              value: 4,
            },
          ],
        },
        {
          text: "During dinner parties at your home, you have a hard time with people who:",
          answers: [
            {
              label: "Ask you to tell a story in front of everyone else",
              value: 1,
            },
            {
              label: "Talk privately between themselves",
              value: 3,
            },
            { label: "Hang around you all evening", value: 2 },
            {
              label: "Always drag the conversation back to themselves",
              value: 4,
            },
          ],
        },
      ])
    );
  }),
];
