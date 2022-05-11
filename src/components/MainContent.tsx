import React from 'react';
import MainPrompt from './MainPrompt';
import { MainContainer } from './MainContent.styles';

function MainContent(){
    return (
        <MainContainer>
            <MainPrompt/>
        </MainContainer>
    );
}

export default MainContent;