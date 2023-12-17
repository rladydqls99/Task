import styled from "styled-components";

export const Btn = styled.button<{ submit: number }>`
  background-color: transparent;
  border: ${(props) => props.style?.border};

  height: ${(props) => props.style?.height};
  width: ${(props) => props.style?.width};

  &:hover {
    background-color: ${(props) =>
      props.submit === 1 ? "black" : "transparent"};
    color: ${(props) => (props.submit === 1 ? "white" : "none")};
  }
  cursor: pointer;
`;
