import styled from 'styled-components';

export const FormContainer = styled.form`
    {
    margin-bottom: 7.5rem;
    color: #FFF;
    font-size: 1.25rem;
    }
.prompt {
        margin-bottom: 1.25rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
#prompt-text {
    width: 31.8rem;
    height: 10rem;
    // overflow: hidden;
    background-color: #FFF;
    color: #222;
    font-family: Courier, monospace;
    font-weight: normal;
    font-size: 1.5rem;
    resize: none;
    line-height: 2.4rem;
    padding-left: 6rem;
    padding-right: 6rem;
    padding-top: 2.7rem;
    padding-bottom: 2rem;
    background-image: url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
    background-repeat: repeat-y, repeat;
    -webkit-border-radius: 12px;
    border-radius: 0.8rem;
    -webkit-box-shadow: 0px 2px 14px #000;
    box-shadow: 0px 2px 14px #000;
    border-top: 1px solid #FFF;
    border-bottom: 1px solid #FFF;
    word-wrap: break-word;
}

#title {
    background-color: transparent;
    border-bottom: 3px solid #FFF;
    color: #FFF;
    font-size: 1.25rem;
    font-family: Courier, monospace;
    height: 1.75rem;
    font-weight: bold;
    width: 13.75rem;
}

#button-submit {
    cursor: pointer;
    margin-top: 1.2rem;
    float: right;
    height: 2.4rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    color: #FFF;
    text-shadow: 0px -1px 0px #000000;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    border-top: 1px solid #FFF;
    -webkit-box-shadow: 0px 2px 14px #000;
    box-shadow: 0px 2px 14px #000;
    background-color: #62add6;
    background-image: url(https://static.tumblr.com/maopbtg/ZHLmgtok7/button.png);
    background-repeat: repeat-x;
}

#button-submit:active {
    zoom: 1;
    filter: alpha(opacity=80);
    opacity: 0.8;
}

#button-submit:focus {
    zoom: 1;
    filter: alpha(opacity=80);
    opacity: 0.8;
}
`;