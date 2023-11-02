import { Wrapper, Heading, Paragraph, Container } from './Landing.styles';

const Landing = () => {
    return (
        <Wrapper>
            <Container>
                <Heading>Buy cats</Heading>
                <Paragraph>A React example using Cats API.</Paragraph>
            </Container>
        </Wrapper>
    );
};

export default Landing;