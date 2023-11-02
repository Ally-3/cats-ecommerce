import { ContainerChild, CatImage } from './CatImages.styles';

const CatCard = (props) => {
    return (
        <ContainerChild>
            <CatImage src={props.cat.url}></CatImage>
        </ContainerChild>
    );
};

export default CatCard;