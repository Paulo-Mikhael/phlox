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
          title="Logo PHLOX" 
          alt="logo da empresa" 
          width="w-36"
          className="h-5 cursor-pointer"
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
          className="h-6 cursor-pointer"
        />
        <Picture 
          src="icons/shop-bag.png" 
          title="Minhas Compras" 
          alt="imagem de sacola representando as compras salvas do usuário" 
          className="h-6 cursor-pointer"
        />
      </div>
    </header>
  );
}