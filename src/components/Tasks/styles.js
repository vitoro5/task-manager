import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #363636;
      border: none;
      background: transparent;
      font-family: "Mali", cursive;
      cursor: pointer;

      svg {
        color: #dbdbdb;
      }

      p {
        margin-left: 10px;
      }
    }
  }
`;
