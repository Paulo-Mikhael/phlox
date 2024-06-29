import styled from "styled-components";

const StyledDiv = styled.div`
    @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-250px * 4.6))}
  }
  animation: scroll 8s linear infinite;
  display: flex;
  gap: 80px;
  margin-right: 52pc;
`
const DropShadow = styled.div`
  width: 200px;
  height: 100%;
  background: linear-gradient(to right, #DCDCDC, #dcdcdc00);
  position: absolute;
`
export default function LogosCarousel() {
  const logos: { name: string, logoUrl: string }[] = [
    {
      name: "GOLDEN",
      logoUrl: "icons/golden-logo.png"
    },
    {
      name: "Sweety Corporation",
      logoUrl: "icons/sweety-logo.png"
    },
    {
      name: "Fastlane Airlines",
      logoUrl: "icons/fastlane-logo.png"
    },
    {
      name: "Mighty Furnitures",
      logoUrl: "icons/furnitures-logo.png"
    },
    {
      name: "JACK ROSTER",
      logoUrl: "icons/jk-logo.png"
    },
  ]
  return (
    <div className="w-full h-[271px] bg-[#EEE] flex items-center my-8 overflow-hidden relative">
      <StyledDiv className="">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.logoUrl}
            alt={`Logo da empresa fictícia ${logo.name}`}
            title={`Logo da empresa fictícia ${logo.name}`}
            width="150px"
          />
        ))}
      </StyledDiv>
      <StyledDiv>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.logoUrl}
            alt={`Logo da empresa fictícia ${logo.name}`}
            title={`Logo da empresa fictícia ${logo.name}`}
            width="150px"
          />
        ))}
      </StyledDiv>
      <DropShadow />
      <DropShadow className="right-0 rotate-180" />
    </div>
  );
}