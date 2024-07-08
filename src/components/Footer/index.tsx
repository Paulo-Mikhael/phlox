import styled from "styled-components";
import Picture from "../Picture";
import { navItems } from "../../data/NavItems";
import SubscribeInput from "../SubscribeInput";

const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  h3, h4{
    font-weight: bold;
    margin-bottom: 25px;
  }
  h3{
    font-size: 20px;
  }
  h4{
    font-size: 24px;
  }
  img{
    margin-bottom: 19px;
  }
  p, li{
    font-size: 18px;
  }
  li{
    margin-bottom: 5px;
  }
`
const AboutUs = styled.article`
  width: 359px;
  
  .logo{
    width: 180px;
  }
  @media screen and (max-width: 900px){
    width: 200px;
    p{
      font-size: 18px;
    }
    .logo{
      width: 100px;
    }
  }
  @media screen and (max-width: 650px){
    display: none;
  }
`
const Contact = styled.article`
  width: 265px;

  @media screen and (max-width: 900px){
    margin-top: 10px;
    width: 323px;
  }
`
const ContactIcons = styled.article<{ $hide?: boolean }>`
  display: flex;
  gap: 16px;
  align-items: end;
  margin-top: 25px;

  img{
    cursor: pointer;
  }
  @media (min-width: 651px) {
    display: ${props => props.$hide === true ? 'none' : ''};
  }
`
const Links = styled.article`
  @media screen and (max-width: 900px){
    ul{
      display: flex;
      gap: 10px;

      @media screen and (max-width: 640px){
        display: block;
      }
    }
  }
`
const Subscribe = styled.article`
  width: 344px;
  
  @media screen and (min-width: 1536px){
    width: 544px;
  }
  @media screen and (max-width: 1280px){
    margin-bottom: 4rem;
    width: 100%;

    h3, h4{
      font-weight: bold;
      margin-bottom: 25px;
      width: 100%;
      text-align: center;
    }
    h3{
      font-size: 25px;
    }
    h4{
      font-size: 29px;
    }
  }
`
const StyledDiv = styled.div`
  width: 27rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px){
    flex-direction: column;
    justify-content: right;
    align-items: end;
    p{
      font-size: 16px;
    }
    .logo{
      width: 100px;
    }
  }
  @media screen and (max-width: 651px){
    align-items: start;
  }
`

export default function Footer() {
  return (
    <footer className="w-full h-80 max-xl:h-[23rem] py-10 px-20 max-mobile:p-2 max-mobile:mt-14">
      <Subscribe className="xl:hidden">
        <h3>
          Subscribe To Our Email
        </h3>
        <h4>
          For Latest News & Updates
        </h4>
        <SubscribeInput />
      </Subscribe>
      <FooterContent>
        <AboutUs>
          <Picture
            src="icons/logo.png"
            className="logo"
          />
          <p>
            When, while the lovely vallery teems with vapour
            around me, and the meridian sun strikes the upper, so...
          </p>
          <ContactIcons>
            <Picture
              src="icons/instagram.png"
              width="w-[25px]"
            />
            <Picture
              src="icons/linkedin.png"
              width="w-[25px]"
            />
            <Picture
              src="icons/facebook.png"
              width="w-[14px]"
            />
            <Picture
              src="icons/twiter.png"
              width="w-[25px]"
            />
          </ContactIcons>
        </AboutUs>
        <StyledDiv>
          <Links>
            <h3>
              Quick Links
            </h3>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="cursor-pointer"
                    onClick={() => {
                      item.itemName === "Home" && scrollTo({
                        top: 0,
                        behavior: "smooth"
                      })
                    }}
                  >
                    {item.itemName}
                  </a>
                </li>
              ))}
            </ul>
          </Links>
          <Contact>
            <h3>
              Contact
            </h3>
            <p>
              +55 (11) 00000-0000 São Paulo, SP 501 Avenida Paulista
            </p>
          </Contact>
          <ContactIcons $hide={true}>
            <Picture
              src="icons/instagram.png"
              width="w-[25px]"
            />
            <Picture
              src="icons/linkedin.png"
              width="w-[25px]"
            />
            <Picture
              src="icons/facebook.png"
              width="w-[14px]"
            />
            <Picture
              src="icons/twiter.png"
              width="w-[25px]"
            />
          </ContactIcons>
        </StyledDiv>
        <Subscribe className="max-xl:hidden">
          <h3>
            Subscribe To Our Email
          </h3>
          <h4>
            For Latest News & Updates
          </h4>
          <SubscribeInput />
        </Subscribe>
      </FooterContent>
    </footer>
  );
}