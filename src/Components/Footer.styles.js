import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    // position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    
    border-top: 2px solid #f7d6ac;
    // background-color: transparent;
    background-color: #4C4D4E;
    padding: 20px 0px;
    font-family: Poppins;
    letter-spacing: 2px;

    &:hover {
        padding: none;
        margin: none;
        cursor: pointer;
        text-decoration: none;
    }
`;

export const FooterItem = styled(Link)`
    font-size: 10px;
    margin-right: 16px;
    color: #f7d6ac;
    text-decoration: none;
    background: none;
    font-weight: bold;

    &:hover {
    cursor: pointer;
    text-decoration: none;
    color: #91DEC6;
    }
 `;

