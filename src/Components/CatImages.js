import { Wrapper} from '../Pages/pages.styles';
import { Container } from './CatImages.styles';
import CatCard from './CatCard';

const CatImages = (props) => {
    console.log(props.cats[2]);
    return (
        <Wrapper>
            <Container>
                {props.cats.map((cat, index) => {
                    return <CatCard cat={cat} key={index} />;
                })}
            </Container>
        </Wrapper>
    );
};

export default CatImages;