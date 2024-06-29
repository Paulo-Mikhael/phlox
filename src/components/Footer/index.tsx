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
`
const Contact = styled.article`
  width: 265px;
`
const ContactIcons = styled.article`
  display: flex;
  gap: 16px;
  align-items: end;
  margin-top: 25px;

  img{
    cursor: pointer;
  }
`
const Links = styled.article`
  width: 114px;
`
const Subscribe = styled.article`
  width: 344px;

  @media screen and (min-width: 1536px){
    width: 544px;
  }
`

export default function Footer() {
  return (
    <footer className="w-full h-80 py-10 px-20">
      <FooterContent>
        <AboutUs>
          <Picture
            src="icons/logo.png"
            width="w-[180px]"
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
        <Links>
          <h3>
            Quick Links
          </h3>
          <ul>
            {navItems.map(item => (
              <li>
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
        <Subscribe>
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