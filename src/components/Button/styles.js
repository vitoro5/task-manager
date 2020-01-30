import styled from "styled-components";

export const FullWidthButton = styled.button`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ff3660;
  background: #ffffff;
  color: #ff3660;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-bottom: calc(0.375em - 1px);
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: calc(0.375em - 1px);
  white-space: nowrap;

  :hover {
    color: #ffffff;
    background: #ff3660;
  }

  svg {
    margin-right: 5px;
  }
`;

export const CommonButton = styled.button`
  background: ${props => (props.active ? "#363636" : "#FFFFFF")};
  border: 1px solid ${props => (props.active ? "#363636" : "#dbdbdb")};
  color: ${props => (props.active ? "#ffffff" : "#363636")};
  font-family: "Mali", cursive;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  padding: 5px;

  :first-child {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  :last-child {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  :hover {
    background: ${props => (props.active ? "#ffffff" : "#363636")};
    border: 1px solid ${props => (props.active ? "#dbdbdb" : "#363636")};
    color: ${props => (props.active ? "#363636" : "#ffffff")};
  }
`;
