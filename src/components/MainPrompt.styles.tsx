import styled from "styled-components";

export const FormContainer = styled.form`
   {
    margin-bottom: 7.5rem;
    color: #fff;
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
    overflow-x: hidden;
    background-color: #fff;
    color: #222;
    font-family: Courier, monospace;
    font-weight: normal;
    font-size: 1.25rem;
    resize: none;
    line-height: 2.4rem;
    padding: 0.65rem 2rem 2rem 6rem;
    background-image: url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png),
      url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
    background-repeat: repeat-y, repeat;
    -webkit-border-radius: 12px;
    border-radius: 0.8rem;
    -webkit-box-shadow: 0px 2px 14px #000;
    box-shadow: 0px 2px 14px #000;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    word-wrap: break-word;
  }

  #button-submit {
    cursor: pointer;
    margin-top: 1.2rem;
    height: 2.4rem;
    padding: 0 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    color: #fff;
    text-shadow: 0px -1px 0px #000000;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    border-top: 1px solid #fff;
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

  @media only screen and (max-width: 800px) {
    #prompt-text {
      width: 20rem;
      padding: 0.65rem 1.5rem 1rem 6rem;
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 600px) {
     {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    #prompt-text {
      width: 15rem;
      font-size: 1rem;
    }
  }
`;
