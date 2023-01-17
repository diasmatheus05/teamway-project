export interface QuestionProps {
  text: string;
  answers: { value: number; label: string }[];
  onChange: (answerValue?: number) => void;
}
