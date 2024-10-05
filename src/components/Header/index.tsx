import { HeaderContainer } from "./styles";
import { Timer, Scroll } from 'phosphor-react';
import logo  from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return(
    <HeaderContainer>
        <img src={ logo } alt="" />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={30} />
        </NavLink>

        <NavLink to="/history" title="histórico">
          <Scroll size={30} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}