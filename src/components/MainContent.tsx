import { MyResponse } from "../types/MyResponse";
import MainPrompt from "./MainPrompt";
import ResponseContent from "./ResponseContent";
import { MainContainer } from "./MainContent.styles";
import { useState } from "react";




function FetchResponses(request: string): Promise<MyResponse> {
  const config = {
    SECRET_API_KEY: process.env.REACT_APP_API_KEY
    //SECRET_API_KEY: " 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",
  };

  
  const KEY = config.SECRET_API_KEY 
//const configValue: string = (process.env.REACT_APP_SOME_CONFIGURATION as string);
  const data = {
    prompt: request,
    temperature: 0.5,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  return fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      Authorization: `Bearer ${KEY}`,
      prompt: request,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(KEY)
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
