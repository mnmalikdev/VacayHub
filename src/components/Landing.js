import styled from "styled-components";

const Landing = (props) => {
  return (
    <Container>
      <Content>
        <BGvideo src="./videos/travel-main.mp4" playsInline autoPlay loop muted />
        <CTA>
          <Title>NEVER STOP EXPLORING THE WORLD !</Title>
          <SubTitle>Embark on exciting journeys</SubTitle>
          <Description>
            Join and connect with people from around the globe and plan vacation trips together. Share your Journey with like-minded people. Satisfy
            your wantderlust and travel like never before.
          </Description>
          <Start href={"http://localhost:3000/home"}>Get Started !</Start>
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 480px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 320px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const BGvideo = styled.video`
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  z-index: -1;
`;
const CTA = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Title = styled.h1`
  font-weight: bold;
  color: #f9f9f9;
  font-size: 3.3rem;
  padding: 0;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const SubTitle = styled.h2`
  font-size: 2rem;
  color: #f9f9f9;
  font-weight: 300;
  line-height: 1.2;
  margin-top: -30px;
  @media (max-width: 768px) {
    font-size: 1.5 rem;
    margin-top: -20px;
  }
`;
const Description = styled.p`
  font-size: 1.2rem;
  color: hsla(0, 0%, 95.3%, 0.8);
  font-weight: normal;
  line-height: 1.3;
  letter-spacing: 1.3px;
  margin-top: -10px;
  padding: 0 34px 0 34px;
  @media (max-width: 768px) {
    font-size: 0.9 rem;
    margin-top: -20px;
  }
`;
const Start = styled.a`
  position: relative;
  text-decoration: none;
  left: 25%;
  justify-content: center;
  font-weight: bold;
  font-size: 22px;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 50%;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0483ee;
  }
`;
export default Landing;
