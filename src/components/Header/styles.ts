import styled from "styled-components";

export const HeaderContainer = styled.header `
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      color: ${(props) => props.theme['white']};

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['purple-500']}
      }

      &.active {
        color: ${(props) => props.theme['purple-700']};
        border-bottom: 3px solid ${(props) => props.theme['purple-700']}
      }
    }
  }
`;