import styled from "styled-components";
import Picture from "../Picture";

const StyledP = styled.p`
  font-weight: bold;
  font-size: 18px;
  text-align: center;

  b{
    font-size: 15px;
    color: #ccc;
    font-weight: 700;
  }
  `
const StyledDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: end;
  gap: 10px;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export default function BenefitsLine(){

  return (
    <div className="h-24 flex items-center justify-center gap-[80px] max-xl:h-96 max-xl:grid max-xl:grid-cols-2 max-xl:gap-[10px]">
      <StyledDiv>
        <Picture
          src="icons/mobile-truck.png"
          width="w-20"
        />
        <StyledP>
          Free Shipping<br />
          <b>Free Shipping On All Order</b>
        </StyledP>
      </StyledDiv>
      <StyledDiv>
        <Picture
          src="icons/mobile-wallet.png"
          width="w-[70px]"
        />
        <StyledP>
          Secure Payment<br />
          <b>All Cards Accepted</b>
        </StyledP>
      </StyledDiv>
      <StyledDiv>
        <Picture
          src="icons/mobile-headphone.png"
          width="w-16"
        />
        <StyledP>
          Online Support 24/7<br />
          <b>Techinal Support 24/7</b>
        </StyledP>
      </StyledDiv>
      <StyledDiv>
        <Picture
          src="icons/mobile-stamp.png"
          width="w-16"
        />
        <StyledP>
          Money Guarantee<br />
          <b>30 Days Money Back</b>
        </StyledP>
      </StyledDiv>
    </div>
  );
}