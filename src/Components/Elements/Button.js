import styled from "styled-components";

export const Button = styled.button`
  display: block;
  border: none;
  background: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 8px;
  font-weight: 800;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 200ms;
  :hover {
    background: white;
    color: var(--accent-color);
  }
`;

export const SubmitButton = styled.button`
  display: block;
  border: none;
  background: var(--accent-color);
`;
