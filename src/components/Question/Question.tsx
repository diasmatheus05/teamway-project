import { Answer, AnswersWrapper, QuestionText } from "./styles";
import { QuestionProps } from "./types";

export default function Question({
  text,
  answers,
  selected,
  onChange,
}: QuestionProps) {
  return (
    <div>
      <QuestionText>{text}</QuestionText>
      <AnswersWrapper>
        {answers.map((answer) => (
          <Answer
            key={answer.value}
            onClick={() => onChange(answer.value)}
            isSelected={selected === answer.value}
          >
            {answer.label}
          </Answer>
        ))}
      </AnswersWrapper>
    </div>
  );
}
