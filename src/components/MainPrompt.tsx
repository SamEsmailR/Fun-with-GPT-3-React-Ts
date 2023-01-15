import { FormContainer } from "./MainPrompt.styles";

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
      <div className="prompt">Enter prompt</div>
      <textarea
        placeholder="Write a poem about a dog wearing skis."
        id="prompt-text"
        name="text"
        onChange={handlePrompt}
        rows={4}
      ></textarea>
      <br />
      <button id="button-submit" type="submit">
        Submit
      </button>
    </FormContainer>
  );
}

export default MainPrompt;