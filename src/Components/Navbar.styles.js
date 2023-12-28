import styled from 'styled-components';

const baseFontSize = 16; 

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
    align-items: center;
    justify-content: space-between;
    padding: 1% 2%;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;

    img {
        max-width: 100%;
        height: 40px;
        margin-right: 10px;
    }

    &:hover {
        cursor: pointer;
        text-decoration: none;
    }
`;

export const NavbarItem = styled.a`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: ${baseFontSize}px; /* Set base font size */
    margin: 0 10px;
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

    @media (max-width: 768px) {
        margin: 10px 0;
        margin-left: 1em;
        font-size: ${baseFontSize - 7}px;
    }
`;

export const Heading = styled.h1`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    letter-spacing: 10px;
    font-family: 'Poppins', sans-serif;
    color: white;
    -webkit-text-stroke: 0.5px rgb(76, 77, 78);
    margin: 0;
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