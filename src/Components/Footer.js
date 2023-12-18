import { FooterWrapper, FooterItem } from './Footer.styles';

const Footer= () => {
 return (
   <div>
      <FooterWrapper>
         <FooterItem href="/">Home</FooterItem>
         <FooterItem href="/AboutUs">About Us</FooterItem>
         <FooterItem href="/ContactUs">Contact Us</FooterItem>
      </FooterWrapper>
   </div>
 );
};

export default Footer;