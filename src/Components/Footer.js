import React from 'react';
import { FooterWrapper, FooterItem } from './Footer.styles';

const Footer= () => {
 return (
   <div>
      <FooterWrapper>
        <FooterItem to="/">Home</FooterItem>
        <FooterItem to="/AboutUs">About Us</FooterItem>
        <FooterItem to="/ContactUs">Contact Us</FooterItem>
      </FooterWrapper>
   </div>
 );
};

export default Footer;