import React from 'react';
import MainPrompt from './MainPrompt';
import ResponseContent from './ResponseContent';
import { MainContainer } from './MainContent.styles';

function MainContent(){
    return (
        <MainContainer>
            <MainPrompt/>
            <ResponseContent/>
        </MainContainer>
    );
}

export default MainContent;