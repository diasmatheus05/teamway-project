export interface QuestionProps {
  text: string;
  answers: { value: number; label: string }[];
  selected: number | null;
  onChange: (answerValue: number) => void;
}
