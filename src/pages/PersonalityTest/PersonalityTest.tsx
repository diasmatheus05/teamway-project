import { Button } from "../../components/Button";
import {
  Answer,
  AnswersWrapper,
  ButtonWrapper,
  Counter,
  Question,
} from "./styles";

export default function PersonalityTest() {
  return (
    <>
      <Counter>1 / 5</Counter>
      <Question>
        You’re really busy at work and a colleague is telling you their life
        story and personal woes. You:
      </Question>
      <AnswersWrapper>
        <Answer isSelected>Don’t dare to interrupt them</Answer>
        <Answer>
          Think it’s more important to give them some of your time; work can
          wait
        </Answer>
        <Answer>Listen, but with only with half an ear</Answer>
        <Answer>
          Interrupt and explain that you are really busy at the moment
        </Answer>
      </AnswersWrapper>

      <ButtonWrapper>
        <Button onClick={() => {}}>Next</Button>
      </ButtonWrapper>
    </>
  );
}
