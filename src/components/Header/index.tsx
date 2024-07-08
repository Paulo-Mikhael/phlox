import { useState } from "react";
import Picture from "../Picture";
import {
  twHeaderIconsStyles,
  twHeaderStyles,
  twNavStyles
} from "./styles";
import styled from "styled-components";
import { navItems } from "../../data/NavItems";

const StyledH2 = styled.h2<{ selected: boolean }>`
  font-style: ${props => props.selected === true ? "normal" : "italic"};
  color: #1f2937;
  cursor: pointer;
  font-weight: ${props => props.selected === true ? 700 : "normal"};
`
const StyledCircle = styled.div`
  background-color: red;
  width: 10px;
  height: 10px;
  position: absolute;
  top: -4px;
  right: -4px;
  border-radius: 9999px;

  @media (max-width:1280px){
    display: none;
  }
`

export default function Header() {
  const [selected, setSelected] = useState<string>(navItems[0].itemName);

  return (
    <header className={twHeaderStyles}>
      <nav className={twNavStyles}>
        <Picture
          src="icons/logo.png"
          title="Logo PHLOX"
          alt="logo da empresa"
          width="w-36 max-mobile:w-30"
          className="h-5 cursor-pointer"
        />
        {navItems.map((item, index) => (
          <StyledH2
            key={index}
            selected={selected === item.itemName}
            onClick={() => {
              setSelected(item.itemName);
            }}
            className="max-xl:hidden transition-all duration-200"
          >
            {item.itemName}
          </StyledH2>
        ))}
      </nav>
      <div className={twHeaderIconsStyles}>
        <p 
          className="cursor-pointer font-bold transition-all duration-300 hover:text-red-main-hover max-xl:hidden"
          onClick={() => {
            scrollTo({top: 1000});
          }}
        >
          login
        </p>
        <Picture
          src="icons/lupa.png"
          title="Lupa"
          alt="lupa para pesquisa"
          className="cursor-pointer transition-all duration-300 hover:rotate-90"
          width="w-6"
        />
        <div className="relative">
          <Picture
            src="icons/cart.png"
            title="Minhas Compras"
            alt="imagem de sacola representando as compras salvas do usuário"
            className="cursor-pointer max-xl:hidden"
            width="w-6"
          />
          <StyledCircle />
          <StyledCircle className="animate-ping"/>
        </div>
        <Picture
          src="icons/mobile-menu.png"
          title="Menu"
          alt="imagem de sacola representando as compras salvas do usuário"
          className="cursor-pointer xl:hidden"
          width="w-6"
        />
      </div>
    </header>
  );
}