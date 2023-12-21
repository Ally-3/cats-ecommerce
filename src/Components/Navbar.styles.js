import styled from 'styled-components';

export const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100; /* Ensure the navbar stays on top of other content */
    background-color: #91dec688;
    border-bottom: 2px solid #91DEC6;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    justify-content: space-evenly;

    // background-color: #91dec688;
    padding: 1% 2%;
    // border-bottom: 5px solid #91DEC6;
    // border-top: 5px solid #91DEC6;
    font-family: Poppins;
    letter-spacing: 2px;

    /* Styles for the image within the heading */
    img {
      max-width: 100%; /* Adjust the width as needed */
      height: 40px; /* Maintain aspect ratio */
      margin-right: 10px; /* Add some spacing to the right of the image */
    }

    &:hover {
        cursor: pointer;
        text-decoration: none;
     }
`;

export const NavbarItem = styled.a`
    display: flex;
    text-align: center;
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    font-size: 16px;
    margin: 0 10px; /* Add margin to the items for spacing */
    margin-left: 50px;
    color: white;
    text-decoration: none;
    height: 20px;
    border: none;
    background: none;

    &:hover {
    cursor: pointer;
    color: rgb(76, 77, 78);
    text-decoration: none;
 }
 `;

export const Heading = styled.h1`
    display: flex;
    text-align: center;
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    letter-spacing: 10px;
    font-family: Poppins;
    color: white;
    -webkit-text-stroke: 0.5px rgb(76, 77, 78);
    margin: 0; /* Remove default margin for h1 */
    background: none;

    &:hover {
        cursor: pointer;
        color: rgb(76, 77, 78);
        text-decoration: none;
     }
`;

export const Link = styled.a`
    text-decoration: none;
    color: white;
    background: none;

    &:hover {
        cursor: pointer;
        color: rgb(76, 77, 78);
        text-decoration: none;
    }
`;