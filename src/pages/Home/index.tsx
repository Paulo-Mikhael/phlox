import BenefitsLine from "../../components/BenefitsLine";
import MainCard from "../../components/MainCard";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SectionCard from "../../components/SectionCard";
import Products from "../../components/Products";
import News from "../../components/News";
import { earphone, gadgets, notebook, oculus, amazon, console as consoleData } from "../../data/MainCards";
import { sectionHeadphone, sectionSmartwatch } from "../../data/SectionCards";
import LogosCarousel from "../../components/LogosCarousel";
import Footer from "../../components/Footer";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  width: 100%;

  @media screen and (max-width: 1270px){
    flex-direction: column;
  }
`

export default function Home() {
  return (
    <>
      <section className="p-8 max-mobile:p-2">
        <Header />
        <Hero />
        <main className="w-full my-8 flex flex-col gap-8 justify-center">
          <StyledDiv>
            <MainCard {...earphone} />
            <MainCard {...gadgets} />
            <MainCard {...notebook} />
          </StyledDiv>
          <StyledDiv>
            <MainCard {...consoleData} />
            <MainCard {...oculus} />
            <MainCard {...amazon} />
          </StyledDiv>
        </main>
        <BenefitsLine />
        <SectionCard {...sectionHeadphone} />
        <Products />
        <SectionCard {...sectionSmartwatch} />
        <News />
      </section>
      <LogosCarousel />
      <Footer />
    </>
  );
}