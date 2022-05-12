import React from 'react';
import { PromptContainer } from './ResponsePromptListItem.styles';

function ResponsePromptListItem(){
    return (
        <PromptContainer>
            <div className='prompt-block'>
                <h3>Prompt:</h3>
                <p></p>
            </div>
            <div className='response-block'>
                <h3>Response:</h3>
                <p></p>
            </div>
        </PromptContainer>
    );
}

export default ResponsePromptListItem;