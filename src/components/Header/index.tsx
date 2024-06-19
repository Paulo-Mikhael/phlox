import Picture from "../Picture";
import { 
  twHeaderIconsStyles, 
  twHeaderStyles, 
  twNavItemSelectedStyles, 
  twNavItemStyles, 
  twNavStyles 
} from "./styles";

export default function Header(){
  return (
    <header className={twHeaderStyles}>
      <nav className={twNavStyles}>
        <Picture 
          src="icons/logo.png" 
          title="Logo" 
          alt="logo da empresa" 
          className="w-36 h-5 cursor-pointer"
        />
        <h2 className={twNavItemSelectedStyles}>
          Home
        </h2>
        <h2 className={twNavItemStyles}>
          Shop
        </h2>
        <h2 className={twNavItemStyles}>
          About us
        </h2>
        <h2 className={twNavItemStyles}>
          Blog
        </h2>
        <h2 className={twNavItemStyles}>
          Contact Us
        </h2>
      </nav>
      <div className={twHeaderIconsStyles}>
        <p className="cursor-pointer font-bold">
          login
        </p>
        <Picture 
          src="icons/lupa.png" 
          title="lupa" 
          alt="lupa para pesquisa" 
          className="w-6 h-6 cursor-pointer"
        />
        <Picture 
          src="icons/shop-bag.png" 
          title="Shop Bag" 
          alt="imagem de sacola representando as compras salvas do usuário" 
          className="w-6 h-6 cursor-pointer"
        />
      </div>
    </header>
  );
}