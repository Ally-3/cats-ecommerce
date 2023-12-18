import { ContainerChild, CatImage } from './CatImages.styles';
import CatImages from './CatImages';

const CatCard = (props) => {
    return (
        <ContainerChild>
            <CatImages src={props.cat.url}></CatImages>
        </ContainerChild>
    );
};

export default CatCard;