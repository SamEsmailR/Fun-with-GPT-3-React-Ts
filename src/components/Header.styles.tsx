import styled from "styled-components";

export const HeaderContainer = styled.header`
  .header {
    color: #3A4F7A;
    font-size: 3rem;
    padding-bottom: 2rem;
  }

  @media only screen and (max-width: 800px) {
    .header {
      font-size: 2.7rem;
      padding-bottom: 1.7rem;
    }
  }

  @media only screen and (max-width: 600px) {
    .header {
      font-size: 2.3rem;
      padding-bottom: 1.5rem;
    }
  }
`;
