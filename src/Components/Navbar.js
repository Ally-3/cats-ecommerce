import { Wrapper, NavbarItem } from './Navbar.styles';

const Navbar = () => {
 return (
 <Wrapper>
 <NavbarItem href="/">Home</NavbarItem>
 <NavbarItem href="/AboutUs">About Us</NavbarItem>
 <NavbarItem href="/Buy">Buy</NavbarItem>
 <NavbarItem href="/ContactUs">Contact Us</NavbarItem>
 <NavbarItem href="/Basket">Basket</NavbarItem>
 </Wrapper>
 );
};
export default Navbar