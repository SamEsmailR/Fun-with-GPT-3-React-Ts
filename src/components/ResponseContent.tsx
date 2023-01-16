import { MyResponse } from "../types/MyResponse";
import { SectionContainer } from "./ResponseContent.styles";
import ResponsePromptList from "./ResponsePromptList";
import {Adsense} from '@ctrl/react-adsense';


type ResponseContentProps = {
  responses: MyResponse[];
};

function ResponseContent(props: ResponseContentProps) {
  return (
    <SectionContainer>
      <h2>Responses</h2>
      <Adsense
  client="ca-pub-4528275903386554"
  slot="7420815125"
  style={{ display: 'block' }}
  layout="in-article"
  format="auto"
/>
      <ResponsePromptList responses={props.responses} />
    </SectionContainer>
  );
}

export default ResponseContent;
