import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucsess'

interface ButtonContainerProps {
  variant: ButtonVariant;
}

// const ButtonVariants = {
//   primary: 'purple',
//   secondary: 'orange',
//   danger: 'red',
//   sucess: 'green'
// }

export const ButtonContainer = styled.button <ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white}
`;