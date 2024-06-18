import Header from "../../components/Header";

export default function Home(){
  return (
    <section className="p-8">
      <Header />
      <div className="w-full h-home bg-gradient-to-r from-gray-gradient-1 to-8  0% to-gray-gradient-2 mt-7 rounded-xl flex items-center justify-start">
        <article className="ml-20 w-11/12 flex flex-col">
          <p className="font-medium text-lg absolute top-absolute-1 z-10">
            Beats Solo
          </p>
          <p className="font-bold text-3xl absolute top-absolute-2 z-10">
            Wireless
          </p>
          <p className="text-white font-bold text-4xl absolute top-absolute-3 z-10">
            HEADPHONES
          </p>
          <img 
            src="images/headphone-draw.png" 
            title="Headphone" 
            alt="Desenho de um headphone" 
            className="w-80 absolute right-60 z-0 top-40"
          />
        </article>
      </div>
    </section>
  );
}