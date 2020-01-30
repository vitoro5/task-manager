import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const OuterContainer = styled.div`
  background: #ffffff;
  width: 1000px;
  padding: 20px 30px;
  border-radius: 10px;
  border: 2px solid #dddddd;
`;

export const PanelHeader = styled.div`
  background: #f5f5f5;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;

  color: #363636;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
`;

export const InputControl = styled.form`
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;

  span {
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 0.2em;
    margin-left: 0.2em;
    width: 1.5em;
    height: 1.5em;
    z-index: 4;
    display: inline-flex;
    align-items: center;
  }
`;

export const Input = styled.input`
  transition: all 0.3s ease-in-out;

  width: 100%;
  height: 35px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 2.25em;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);

  &:hover {
    border: 1px solid #bbbbbb;
  }

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }

  &::placeholder {
    color: #dbdbdb;
    font-family: "Mali", cursive;
    font-size: 16px;
    line-height: 35px;
  }
`;

export const Level = styled.div`
  display: flex;
  width: calc(100%);
  align-items: center;
  justify-content: space-between;
`;

export const LevelLeft = styled.div`
  align-items: center;
  justify-content: flex-start;
`;

export const LevelRight = styled.div`
  align-items: center;
  justify-content: flex-end;
`;
