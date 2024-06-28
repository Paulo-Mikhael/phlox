import { useState } from "react";
import Picture from "../Picture";
import { 
  twHeaderIconsStyles, 
  twHeaderStyles, 
  twNavStyles 
} from "./styles";
import styled from "styled-components";

export default function Header(){
  const StyledH2 = styled.h2<{ selected: boolean }>`
    font-style: ${props => props.selected === true ? "normal" : "italic"};
    color: #1f2937;
    cursor: pointer;
    font-weight: ${props => props.selected === true ? 700 : "normal"};
  `
  const navItems: { itemName: string }[] = [
    {
      itemName: "Home"
    },
    {
      itemName: "Shop"
    },
    {
      itemName: "About Us"
    },
    {
      itemName: "Blog"
    },
    {
      itemName: "Contact Us"
    }
  ]
  const [selected, setSelected] = useState<string>(navItems[0].itemName);

  return (
    <header className={twHeaderStyles}>
      <nav className={twNavStyles}>
        <Picture 
          src="icons/logo.png" 
          title="Logo PHLOX" 
          alt="logo da empresa" 
          width="w-36"
          className="h-5 cursor-pointer"
        />
        {navItems.map(item => (
          <StyledH2 
            selected={selected === item.itemName}
            onClick={() => {
              setSelected(item.itemName);
            }}
          >
            {item.itemName}
          </StyledH2>
        ))}
      </nav>
      <div className={twHeaderIconsStyles}>
        <p className="cursor-pointer font-bold">
          login
        </p>
        <Picture 
          src="icons/lupa.png" 
          title="lupa" 
          alt="lupa para pesquisa" 
          className="cursor-pointer"
        />
        <Picture 
          src="icons/shop-bag.png" 
          title="Minhas Compras" 
          alt="imagem de sacola representando as compras salvas do usuário" 
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}