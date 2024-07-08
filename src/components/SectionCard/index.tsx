import styled from "styled-components";
import Button from "../Button";
import Picture from "../Picture";
import { ISectionCard } from "../../interfaces";

const StyledDiv = styled.div`
width: 350px;
height: 100%;
color: white;
display: flex;
flex-direction: column;
position: relative;
gap: 10px;
z-index: 2;

h3{
  font-size: 23px;
  font-weight:600;
}
h4{
  font-weight: bold;
  font-size: 39px;
}
h5{
  position: absolute;
  font-weight: bolder;
  font-size: 110px;

}
p{
  margin-bottom: 10px;
}
@media not all and (min-width: 640px) {
  h3,h4,h5,p{
    position: initial;
  }
  h5{
    font-size: 60px;
  }
}
@media not all and (min-width: 400px) {
  h5{
    font-size: 40px;
  }
}
`
const BluredCircle = styled.div<{ $backgroundColor: string }>`
z-index: 0;
position: absolute;
background-color: ${props => props.$backgroundColor.replace("bg-[", "").replace("]", "")};
height: 310px;
width: 402px;
border-radius: 9999px;

@media screen and (max-width: 640px) {
  width: 300px;
}
@media screen and (max-width: 400px) {
  width: 230px;
}
`
const FilterBlur = styled.div`
z-index: 1;
width: 90%;
height: 100%;
position: absolute;
--tw-backdrop-blur: blur(30px);
backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
@media screen and (max-width: 640px) {
  height: 90%;
}
`

export default function SectionCard({
  backgroundBlurColor,
  backgroundColor,
  imageUrl,
  imageAlt,
  imageTitle,
  firstColumnSubtitleDown,
  firstColumnSubtitleUp,
  firstColumnMainWordUp,
  firstColumnMainWordDown,
  secondColumnSubtitleDown,
  secondColumnSubtitleUp,
  secondColumnTitle,
  buttonTextColor
}: ISectionCard) {

  return (
    <>
      <div className={`mt-[7rem] mb-8 max-xl:my-[5rem] ${backgroundColor} h-[408px] rounded-[25px] flex items-center justify-center py-[71px] px-[96px] relative max-lg:hidden`}>
        <FilterBlur />
        <Picture
          width="w-96"
          src={imageUrl}
          className="absolute z-10 -top-20 left-[19rem] max-xl:hidden"
          alt={imageAlt ? imageAlt : imageUrl}
          title={imageTitle ? imageTitle : imageUrl}
        />
        <BluredCircle $backgroundColor={backgroundBlurColor} />
        <article className="w-full h-full flex justify-between">
          <StyledDiv>
            <h3 className="absolute">
              {firstColumnSubtitleUp}
            </h3>
            <h5 className="-top-0">
              {firstColumnMainWordUp}
            </h5>
            <h5 className="top-24">
              {firstColumnMainWordDown}
            </h5>
            <h3 className="absolute bottom-0 left-0">
              {firstColumnSubtitleDown}
            </h3>
          </StyledDiv>
          <StyledDiv>
            <h3>
              {secondColumnSubtitleUp}
            </h3>
            <h4>
              {secondColumnTitle}
            </h4>
            <p>
              {secondColumnSubtitleDown}
            </p>
            <Button
              width="w-24"
              padding="py-2"
              className="bg-white hover:bg-slate-200"
              color={buttonTextColor}
            >
              Shop
            </Button>
          </StyledDiv>
        </article>
      </div>
      <div className={`my-[5rem] ${backgroundColor} h-[408px] max-sm:h-[470px] rounded-[25px] flex items-center justify-center py-[71px] px-[46px] relative lg:hidden`}>
        <FilterBlur />
        <BluredCircle $backgroundColor={backgroundBlurColor}/>
        <div className="absolute z-10 max-sm:hidden">
          <Picture
            width="w-72"
            src={imageUrl}
            alt={imageAlt ? imageAlt : imageUrl}
            title={imageTitle ? imageTitle : imageUrl}
          />
        </div>
        <article className="w-full h-full flex justify-between">
          <StyledDiv>
            <h3 className="absolute">
              {firstColumnSubtitleUp}
            </h3>
            <h5 className="-top-0">
              SUMMER
            </h5>
            <h5 className="top-24">
              SALE
            </h5>
            <h3 className="absolute bottom-0 left-0">
              {firstColumnSubtitleDown}
            </h3>
            <Button
              width="w-40"
              padding="p-4"
              className="bg-white hover:bg-slate-200 text-[20px] sm:hidden mt-4"
              color={buttonTextColor}
            >
              Shop
            </Button>
          </StyledDiv>
          <StyledDiv>
            <Button
              width="w-40"
              padding="p-4"
              className="bg-white hover:bg-slate-200 absolute bottom-0 right-0 text-[20px] max-sm:hidden"
              color={buttonTextColor}
            >
              Shop
            </Button>
          </StyledDiv>
        </article>
      </div>
    </>
  );
}