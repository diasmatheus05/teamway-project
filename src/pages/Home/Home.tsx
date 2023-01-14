import { Button } from "../../components/Button/Button";
import { Container, Text, Title } from "./styles";

export function Home() {
  return (
    <Container>
      <Title>Are you an introvert or an extrovert?</Title>
      <Text>Make your test to know</Text>

      <Button>Start Test</Button>
    </Container>
  );
}
