import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  width: 500px;

  display: flex;
  flex-direction: column;

  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;

  h1 {
    font-size: 24px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
  p {
    margin-bottom: 2px;
    font-size: 16px;
  }
  span {
    font-size: 12px;
    color: red;
  }
`;
export const Headers = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NameInput = styled.input<{ valid: number }>`
  width: 470px;
  height: 30px;
  outline: none;
  border-radius: 10px;
  border: 1px solid;

  border-color: ${(props) =>
    props.valid === 0 ? "rgba(255, 0, 0, 1)" : "black"};
  background-color: ${(props) =>
    props.valid === 0 ? "rgba(255, 0, 0, 0.5)" : "none"};
`;
export const PasswordInput = styled.input<{ valid: number }>`
  width: 470px;
  height: 30px;
  outline: none;
  border-radius: 10px;
  border: 1px solid;

  border-color: ${(props) =>
    props.valid === 0 ? "rgba(255, 0, 0, 1)" : "black"};
  background-color: ${(props) =>
    props.valid === 0 ? "rgba(255, 0, 0, 0.5)" : "none"};
`;

export const ButtonBox = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 5px;
`;
