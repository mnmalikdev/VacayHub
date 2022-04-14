import styled from "styled-components";

const Profile = () => {
  return (
    <PageContainer>
      <Banner></Banner>
      <ProfileContainer>
        <Info>
          <div className="profileImage">
            <img src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></img>
          </div>
          <div className="profileInfo">
            <h1>Johanathan</h1>
            <h3>
              <span>San Francisco, CA</span>
            </h3>
            <h4>
              <span>About Me</span>
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam, doloremque quisquam dolore, quidem quisquam quisquam</p>
          </div>
        </Info>
        <TravelExperience>
          <h1>Travel Experience</h1>
        </TravelExperience>
      </ProfileContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div``;
const Banner = styled.div`
  height: 50vh;
  width: 100vw;
  background-image: url("https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&h=800&w=1300");
  background-size: cover !important;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Info = styled.div`
  background-color: #5e9beb;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  .profileImage {
    margin-top: -10%;
    height: 170px;
    width: 180px;
    z-index: 1;
    border-radius: 50%;
  }
  img {
    padding: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
    border-radius: 70%;
    border: 3px solid #0063e5;
    z-index: 1;
  }
  .profileInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: white;
      font-weight: bold;
    }
    h3 {
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
      padding: 0;
      margin: 0;
    }
    h4 {
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
    }
    p {
      color: white;
      font-weight: 300;
      font-size: 1rem;
      padding: 0;
      margin: 0;
      font-family: "Roboto", sans-serif;
      padding: 0px 50px;
      // justify text content to fill space
      text-align: justify;
    }
  }
`;
const TravelExperience = styled.div`
  width: 70%;
  height: 100%;
  background-color: lightblue;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export default Profile;
