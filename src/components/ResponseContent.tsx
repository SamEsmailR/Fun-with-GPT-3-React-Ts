import { MyResponse } from "../types/MyResponse";
import { SectionContainer } from "./ResponseContent.styles";
import ResponsePromptList from "./ResponsePromptList";

type ResponseContentProps = {
  responses: MyResponse[];
};

function ResponseContent(props: ResponseContentProps) {
  return (
    <SectionContainer>
      <h2>Responses</h2>
      <ResponsePromptList responses={props.responses} />
    </SectionContainer>
  );
}

export default ResponseContent;
