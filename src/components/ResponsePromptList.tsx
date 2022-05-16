import { MyResponse } from "../types/MyResponse";
import ResponsePromptListItem from "./ResponsePromptListItem";

type ResponsePromptListProps = {
  responses: MyResponse[];
};

function ResponsePromptList(props: ResponsePromptListProps) {
  const promptList = props.responses.map(function (element: MyResponse) {
    return <ResponsePromptListItem key={element.id} item={element} />;
  });

  return <article>{promptList}</article>;
}

export default ResponsePromptList;
