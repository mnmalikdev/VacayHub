import { FaLocationArrow } from "react-icons/fa";
import styled from "styled-components";
const Card = () => {
  return (
    <Wrap>
      {/* ribbon */}
      {/* image */}
      <Image>
        <img src="https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
      </Image>
      {/* location */}
      <CardContent>
        <Title>
          <h2>Sight Seeing in Egypt</h2>
        </Title>
        <Location>
          <span>
            <FaLocationArrow
              style={{
                fontSize: "1rem",
                color: "#4286f4",
              }}
            />
            <p>New York, NY</p>
          </span>
        </Location>
        <Description>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.words, consectetur, from a Lorem Ipsum passage, and going through the
            cites of the word in classical literature, discovered the undoubtable source.
          </p>
        </Description>
        <Collab>
          <a>Collab Now</a>
        </Collab>
      </CardContent>
    </Wrap>
  );
};

const Wrap = styled.div`
  border: 1px solid blue;
  border-radius: 0.5rem;
  margin-bottom: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
`;
const Location = styled.div`
  span {
    margin-top: -10%;
    display: flex;
    align-items: center;
    p {
      margin-left: 10px;
    }
  }
`;

const Collab = styled.div`
  margin-top: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4286f4;
  padding: 13px;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  a {
    border-radius: 5px;
    font-size: 1.5rem;
    color: #fff;
    display: flex;
    justify-content: center;
  }
  &:hover {
    cursor: pointer;
    background-color: #4e7cc6;
    transition: 0.4s;
  }
`;
const Description = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  margin-top: -6%;
  //make paragraphs justified
  p {
    text-align: justify;
  }
`;
const CardContent = styled.div`
  padding: 0 25px 5px 8px;
`;
const Title = styled.div`
  h2 {
    margin-top: -10px;
    font-size: 2.2rem;
    font-weight: 600;
  }
`;
export default Card;
