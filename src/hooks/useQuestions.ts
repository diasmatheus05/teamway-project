import { useEffect, useState } from "react";
import { Question } from "../entities/Question";
import { getTestQuestions } from "../services/getTestQuestions";

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const isLastQuestion = currentQuestion + 1 === questions.length;

  const [isLoading, setIsLoading] = useState(true);

  const [answersSum, setAnswersSum] = useState(0);
  const [currentAnswerSelected, setCurrentAnswerSelected] = useState<
    number | null
  >(null);

  const [result, setResult] = useState<"Introvert" | "Extrovert" | null>(null);

  useEffect(() => {
    async function fetchQuestions() {
      const questions_response = await getTestQuestions();
      setQuestions(questions_response);
      setIsLoading(false);
    }
    fetchQuestions();
  }, []);

  const handleChange = (value: number) => {
    value && setCurrentAnswerSelected(value);
  };

  const handleNextQuestion = () => {
    if (!currentAnswerSelected) return;

    setAnswersSum(answersSum + currentAnswerSelected);

    if (!isLastQuestion) {
      setCurrentAnswerSelected(null);
      setCurrentQuestion(currentQuestion + 1);
    } else handleResult();
  };

  const handleResult = () => {
    // Calculate the maximum value of the sum of the answers
    // 4 answers for each question, 4 is the gratest answer value
    const total = questions.length * 4;

    // Verify if the answers sum is greater than half of total
    // if true the result is Extrovert
    // else the result is Introvert
    setResult(answersSum > total / 2 ? "Extrovert" : "Introvert");
  };

  const handleRedo = () => {
    setResult(null);
    setCurrentQuestion(0);
    setAnswersSum(0);
    setCurrentAnswerSelected(null);
  };

  return {
    questions,
    currentQuestion,
    currentAnswerSelected,
    isLastQuestion,
    isLoading,
    result,
    handleChange,
    handleNextQuestion,
    handleRedo,
  };
}
