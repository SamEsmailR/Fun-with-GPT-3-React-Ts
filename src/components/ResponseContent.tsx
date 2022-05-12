import React from 'react';
import { SectionContainer } from './ResponseContent.styles';
import ResponsePromptList from './ResponsePromptList';

function ResponseContent(){
    return (
        <SectionContainer>
           <h2>Responses</h2>
            <ResponsePromptList/>
        </SectionContainer>
    );
}

export default ResponseContent;