import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 300px;
  height: 350px;
  background: var(--main-color);
  & h3 {
    color: var(--main-bg-color);
    & span {
      color: var(--accent-color);
    }
  }
`;

export const Label = styled.label`
  color: var(--main-bg-color);
`;
