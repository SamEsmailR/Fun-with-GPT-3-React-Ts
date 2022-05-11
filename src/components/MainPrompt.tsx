import React from 'react';
import { FormContainer } from './MainPrompt.styles';

function MainPrompt(){
    return (
        <FormContainer id="form" method="get" action="">
            <div className="prompt">Enter prompt</div>
            <textarea placeholder="Enter something funny." id="text" name="text" rows={4}></textarea>
            <br />
            <button id="button-submit" type="submit">Submit</button>
        </FormContainer>
    );
}

export default MainPrompt;