import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Text, Title } from "./styles";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Title>Are you an introvert or an extrovert?</Title>
      <Text>Make your test to know</Text>

      <Button onClick={() => navigate("/test")}>Start Test</Button>
    </>
  );
}
