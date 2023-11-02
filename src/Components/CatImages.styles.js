import styled from 'styled-components';

export const Container = styled.div`
    background: rgba( 226, 224, 224, 0.4 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 17px );
    -webkit-backdrop-filter: blur( 17px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 50px;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    width: 75%;
`;

export const ContainerChild = styled.div`
    width: 25%;
`;

export const CatImage = styled.img`
    width: 100%;
`;