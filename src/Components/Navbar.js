import React from 'react';
import { Heading, Wrapper, NavbarItem } from './Navbar.styles';
import catlogo from '../images/catlogo.png';

const Navbar = () => {
  return (
    <div>
      <Wrapper>
        <Heading href="/">
          <img src={catlogo} alt="Cat Logo" />
          whisker world
        </Heading>
        <Wrapper>
          <NavbarItem href="/Buy">Buy</NavbarItem>
          <NavbarItem href="/Basket">Basket</NavbarItem>
        </Wrapper>
      </Wrapper>
    </div>
  );
};

export default Navbar;
