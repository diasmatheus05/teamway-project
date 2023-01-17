import { Button } from "../../components/Button";
import { Question } from "../../components/Question";
import { useQuestions } from "../../hooks/useQuestions";
import { ButtonWrapper, Counter } from "./styles";

export default function PersonalityTest() {
  const {
    questions,
    currentQuestion,
    isLastQuestion,
    isLoading,
    handleChange,
    handleNextQuestion,
  } = useQuestions();

  return (
    <>
      <Counter>
        {currentQuestion + 1} / {questions.length}
      </Counter>
      {!isLoading && (
        <Question
          text={questions[currentQuestion].text}
          answers={questions[currentQuestion].answers}
          onChange={handleChange}
        />
      )}

      <ButtonWrapper>
        <Button onClick={handleNextQuestion}>
          {isLastQuestion ? "End" : "Next"}
        </Button>
      </ButtonWrapper>
    </>
  );
}
