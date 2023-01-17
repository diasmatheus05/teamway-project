import { ContainerDiv, PageWrapper } from "./styles";
import { ContainerProps } from "./types";

export default function Container({ children }: ContainerProps) {
  return (
    <ContainerDiv>
      <PageWrapper>{children}</PageWrapper>
    </ContainerDiv>
  );
}
