import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    
    background-color: lightblue;
    padding: 20px 0px;
    font-family: arial;
    letter-spacing: 2px;

    &:hover {
        padding: none;
        margin: none;
        cursor: pointer;
        text-decoration: none;
     }
`;

export const FooterItem = styled.a`
    font-size: 10px;
    margin-right: 16px;
    color: rgb(112, 117, 133);
    text-decoration: none;

    &:hover {
    cursor: pointer;
    text-decoration: none;
    color: white;
    }
 `;
