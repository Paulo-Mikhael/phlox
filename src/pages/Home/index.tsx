import BenefitsLine from "../../components/BenefitsLine";
import MainCard from "../../components/MainCard";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SectionCard from "../../components/SectionCard";
import Products from "../../components/Products";
import News from "../../components/News";
import { earphone, gadgets, notebook, oculus, amazon, console } from "../../data/MainCards";
import { sectionHeadphone, sectionSmartwatch } from "../../data/SectionCards";

export default function Home() {
  return (
    <section className="p-8">
      <Header />
      <Hero />
      <main className="my-8 flex flex-wrap gap-8 justify-center">
        <MainCard {...earphone} />
        <MainCard {...gadgets} />
        <MainCard {...notebook} />
        <MainCard {...console} />
        <MainCard {...oculus} />
        <MainCard {...amazon} />
      </main>
      <BenefitsLine />
      <SectionCard {...sectionHeadphone}/>
      <Products />
      <SectionCard {...sectionSmartwatch}/>
      <News />
    </section>
  );
}