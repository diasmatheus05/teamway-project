import { useEffect, useState } from "react";
import { Question } from "../entities/Question";
import { getTestQuestions } from "../services/getTestQuestions";

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const [answersSum, setAnswersSum] = useState(0);
  const [currentAnswerSelected, setCurrentAnswerSelected] = useState<number>();

  const isLastQuestion = currentQuestion + 1 === questions.length;

  useEffect(() => {
    async function fetchQuestions() {
      const questions_response = await getTestQuestions();
      setQuestions(questions_response);
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
