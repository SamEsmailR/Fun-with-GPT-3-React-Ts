import styled from "styled-components";

export const PromptContainer = styled.section`
   {
    width: 31.8rem;
    height: 10rem;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
    color: #222;
    font-family: Courier, monospace;
    font-weight: normal;
    resize: none;
    line-height: 2.4rem;
    padding-left: 6rem;
    padding-right: 6rem;
    padding-top: 0.7rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
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
  li {
    list-style-type: none;
  }
`;
