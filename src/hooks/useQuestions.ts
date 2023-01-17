import { useEffect, useState } from "react";

interface Question {
  text: string;
  answers: { value: number; label: string }[];
}

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const [answersSum, setAnswersSum] = useState(0);
  const [currentAnswerSelected, setCurrentAnswerSelected] = useState<number>();

  const isLastQuestion = currentQuestion + 1 === questions.length;

  useEffect(() => {
    async function fetchQuestions() {
      setQuestions([
        {
          text: "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
          answers: [
            { label: "Don’t dare to interrupt them", value: 1 },
            {
              label:
                "Think it’s more important to give them some of your time; work can wait",
              value: 2,
            },
            { label: "Listen, but with only with half an ear", value: 3 },
            {
              label:
                "Interrupt and explain that you are really busy at the moment",
              value: 4,
            },
          ],
        },
      ]);
      setIsLoading(false);
    }
    fetchQuestions();
  }, []);

  const handleChange = (value?: number) => {
    value && setCurrentAnswerSelected(value);
  };

  const handleNextQuestion = () => {
    if (!currentAnswerSelected) return;

    setAnswersSum(answersSum + currentAnswerSelected);

    if (!isLastQuestion) setCurrentQuestion(currentQuestion + 1);
  };

  return {
    questions,
    currentQuestion,
    isLastQuestion,
    isLoading,
    handleChange,
    handleNextQuestion,
  };
}
