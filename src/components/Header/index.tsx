export default function Header(){
  return (
    <header className="w-full text-xl flex justify-between">
      <nav className="flex justify-between items-center w-header-nav">
        <img 
          src="icons/logo.png" 
          title="Logo" 
          alt="logo da empresa" 
          className="w-36 h-5 cursor-pointer"
        />
        <h2 className="font-medium cursor-pointer">
          Home
        </h2>
        <h2 className="italic text-gray-800 cursor-pointer">
          Shop
        </h2>
        <h2 className="italic text-gray-800 cursor-pointer">
          About us
        </h2>
        <h2 className="italic text-gray-800 cursor-pointer">
          Blog
        </h2>
        <h2 className="italic text-gray-800 cursor-pointer">
          Contact Us
        </h2>
      </nav>
      <div className="flex gap-8 items-center justify-center">
        <p className="cursor-pointer font-bold">
          login
        </p>
        <img 
          src="icons/lupa.png" 
          title="lupa" 
          alt="lupa para pesquisa" 
          className="w-6 h-6 cursor-pointer"
        />
        <img 
          src="icons/shop-bag.png" 
          title="Shop Bag" 
          alt="imagem de sacola representando as compras salvas do usuário" 
          className="w-6 h-6 cursor-pointer"
        />
      </div>
    </header>
  );
}