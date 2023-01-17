import { useEffect, useState } from "react";
import { Answer, AnswersWrapper, QuestionText } from "./styles";
import { QuestionProps } from "./types";

export default function Question({ text, answers, onChange }: QuestionProps) {
  const [selected, setSelected] = useState<number>();

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <div>
      <QuestionText>{text}</QuestionText>
      <AnswersWrapper>
        {answers.map((answer) => (
          <Answer
            key={answer.value}
            onClick={() => setSelected(answer.value)}
            isSelected={selected === answer.value}
          >
            {answer.label}
          </Answer>
        ))}
      </AnswersWrapper>
    </div>
  );
}
