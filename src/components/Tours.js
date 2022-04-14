import styled from "styled-components";
import Card from "./Card";
import Header from "./Header";
const Tours = () => {
  return (
    <PageContainer>
      <Header />
      <HeroContainer>
        <HeroBG src="./images/hero-tour.jpg" alt="heroimg"></HeroBG>
        <HeroContent>
          <h2>Explore the tours listed by others.</h2>
          <p>Join others on their journeys and live your travel life to the fullest !</p>
          <a>Search Tours</a>
        </HeroContent>
        <LandmarkImg src="./images/hero-tour-res-1.png" alt="something"></LandmarkImg>
      </HeroContainer>
      <ToursContainer>
        <Recent>
          <h2>Recent Tours</h2>
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Recent>
      </ToursContainer>
    </PageContainer>
  );
};

const PageContainer = styled.section`
  height: 100%;
  overflow-x: hidden;
`;
const HeroContainer = styled.div`
  width: 100%;
  min-width: 100%;
  display: grid;
`;
const HeroBG = styled.img`
  width: 100%;
  min-width: 100vw;
  height: 67vh !important;
  object-fit: cover;
  object-position: center;
  position: relative;
  z-index: -1;
  position: absolute;
`;
const HeroContent = styled.div`
  margin-top: 30px;
  z-index: 1;
  font-size: 2rem;
  position: absolute;
  top: 22%;
  h2 {
    color: #fff;
    padding-left: 53px;
    font-size: 3rem;
  }
  p {
    color: #fff;
    padding-left: 53px;
    margin-top: -17px;
  }
  a {
    margin-left: 51px;
    color: #222222;
    background: #f9f9ed;
    padding: 16px 20px;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 20px;
  }
  a:hover {
    background: #4286f4;
    color: #f9f9ed;
    transition: 0.3s;
  }
`;
const LandmarkImg = styled.img`
  width: 60%;
  height: 90%;
  position: absolute;
  top: -6%;
  left: 40%;
`;
const ToursContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 78px;
  overflow-x: hidden;
  position: absolute;
  top: 67%;
  padding-left: 53px;
`;
const Recent = styled.div`
  margin-right: 60px;
  h2 {
    font-size: 2.2rem;
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-gap: 20px;
  }
`;

export default Tours;
