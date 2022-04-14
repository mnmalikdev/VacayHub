import styled from "styled-components";
const Hero = () => {
  return (
    <Container>
      <Overlay>
        <BGimage src="./images/travel-hero-4.jpg" alt="background image"></BGimage>
      </Overlay>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 100vw;
`;
const BGimage = styled.img`
  min-width: 100vw;
  height: 100vh !important;
  object-fit: cover;
  object-position: center;
  position: relative;
  z-index: -1;
`;
const Content = styled.div`
  z-index: 1;
  font-size: 2rem;
`;

export default Hero;
