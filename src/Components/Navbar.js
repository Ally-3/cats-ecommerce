import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Wrapper, NavbarItem } from './Navbar.styles';
import catlogo from '../images/catlogo.png';
import '../App.css';

const Navbar = () => {
   return (
     <div>
       <Wrapper>
         <Heading>
            <img src={catlogo} alt="Cat Logo" />
            <Link to="/" className='link'>
             whisker world
            </Link>
         </Heading>
         <Wrapper>
           <NavbarItem>
             <Link to="/Buy" className='link'>Buy</Link>
           </NavbarItem>
           <NavbarItem>
             <Link to="/Basket" className='link'>Basket</Link>
           </NavbarItem>
         </Wrapper>
       </Wrapper>
     </div>
   );
 };
 
 export default Navbar;
