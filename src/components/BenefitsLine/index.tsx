import styled from "styled-components";
import Picture from "../Picture";

export default function BenefitsLine(){
  const StyledP = styled.p`
    font-weight: bold;
    font-size: 18px;

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
  `

  return (
    <div className="h-24 flex items-center justify-center gap-[80px]">
      <StyledDiv>
        <Picture
          src="icons/truck.png"
          width="w-20"
        />
        <StyledP>
          Free Shipping<br />
          <b>Free Shipping On All Order</b>
        </StyledP>
      </StyledDiv>
      <StyledDiv>
        <Picture
          src="icons/wallet.png"
          width="w-[70px]"
        />
        <StyledP>
          Secure Payment<br />
          <b>All Cards Accepted</b>
        </StyledP>
      </StyledDiv>
      <StyledDiv>
        <Picture
          src="icons/headphone.png"
          width="w-16"
        />
        <StyledP>
          Online Support 24/7<br />
          <b>Techinal Support 24/7</b>
        </StyledP>
      </StyledDiv>
      <StyledDiv>
        <Picture
          src="icons/stamp.png"
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