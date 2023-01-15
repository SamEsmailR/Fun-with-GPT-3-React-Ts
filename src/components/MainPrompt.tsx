import { FormContainer } from "./MainPrompt.styles";
import {Adsense} from '@ctrl/react-adsense';


type MainPromptProps = {
  callback: (prompt: string) => void;
};

function MainPrompt(props: MainPromptProps) {
  const onSubmitAction = (event: any) => {
    event.preventDefault();
    props.callback(currentText);
  };
  let currentText: string = "";
  const handlePrompt = (event: any) => {
    currentText = event.target.value;
  };
  
   
  return (
    <FormContainer onSubmit={onSubmitAction} id="form">
      <div className="prompt">Enter prompt
      < a href="/prompt"> View prompts</a></div>
      <textarea
        placeholder="Write a poem about a dog wearing skis in 10 lines."
        id="prompt-text"
        name="text"
        onChange={handlePrompt}
        rows={4}
      ></textarea>
      <br />
      <button id="button-submit" type="submit">
        Submit
      </button>
      <div>
      <Adsense
  client="ca-pub-4528275903386554"
  slot="7420815125"
  style={{ display: 'block' }}
  layout="in-article"
  format="auto"
/>
    </div>
    </FormContainer>
  );
}

export default MainPrompt;
