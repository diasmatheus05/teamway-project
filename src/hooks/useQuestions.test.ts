import { renderHook } from "@testing-library/react";
import mockedAxios from "../mocks/axios";
import { useQuestions } from "./useQuestions";

describe("useQuestions", () => {
  beforeEach(() => {
    mockedAxios.get = jest.fn().mockResolvedValue([
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
    ]);
  });

  test("if useQuestions hook is behaving correctly", () => {
    const { result: hookResult } = renderHook(() => useQuestions());
    const {
      questions,
      currentQuestion,
      currentAnswerSelected,
      isLastQuestion,
      result,
      handleChange,
      handleNextQuestion,
      handleRedo,
    } = hookResult.current;

    // Testing initial states
    expect(questions.length).toBe(0);
    expect(currentQuestion).toBe(0);
    expect(currentAnswerSelected).toBeNull();
    expect(isLastQuestion).toBeFalsy();
    expect(result).toBeNull();
  });
});
