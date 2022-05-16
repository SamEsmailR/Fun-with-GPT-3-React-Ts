import { MyResponse } from "../types/MyResponse";
import MainPrompt from "./MainPrompt";
import ResponseContent from "./ResponseContent";
import { MainContainer } from "./MainContent.styles";
import { useState } from "react";

function FetchResponses(request: string): Promise<MyResponse> {
  const config = {
    SECRET_API_KEY: "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",
  };

  const KEY = config.SECRET_API_KEY;

  const data = {
    prompt: request,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  return fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${KEY}`,
      prompt: request,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return { q: request, a: data.choices[0].text, id: new Date().toString() };
    });
}

function MainContent() {
  const [responses, setResponses] = useState<MyResponse[]>([]);

  function onSubmit(request: string) {
    FetchResponses(request)
      .then((result) => {
        setResponses([result, ...responses]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <MainContainer>
      <MainPrompt callback={onSubmit} />
      <ResponseContent responses={responses} />
    </MainContainer>
  );
}

export default MainContent;
