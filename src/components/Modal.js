import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const Modal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const animation = useSpring({
    config: { duration: 250 },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(10%)` : `translateY(-55%)`,
  });
  return (
    <>
      {showModal ? (
        <Background>
          <animated.div style={animation}>
            <ModalWrapper>
              <Logo src="./images/final-logo.png" />
              <Close onClick={() => setShowModal((prev) => !prev)} />
              <h2>Create a free account</h2>
              <ButtonContainer>
                <FacebookBtn>
                  <FacebookIcon />
                  <h3>Sign up with Facebook</h3>
                </FacebookBtn>
                <GoogleBtn>
                  <GoogleIcon />
                  <h3>Sign up with Google</h3>
                </GoogleBtn>
              </ButtonContainer>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
      ;
    </>
  );
};

const Background = styled.div`
  min-height: 100vh;
  min-width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
const ModalWrapper = styled.div`
  min-height: 100%;
  min-width: 100%;
  padding: 40px 60px 40px 60px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    min-width: 76%;
    height: 60%;
  }
  @media (max-width: 480px) {
    min-width: 80%;
    height: 60%;
    display: flex;
    align-items: center;
  }
  @media (max-width: 320px) {
    min-width: 85%;
    height: 60%;
    display: flex;
    align-items: center;
  }
  h2 {
    font-family: "Akaya Telivigala", cursive;
    font-size: 40px;
    margin-top: 60px;
    color: #3b5998;
    text-align: center;
    text-transform: capitalize;
  }
`;
const Logo = styled.img`
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 15px;
  left: 25%;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 320px) {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
  }
`;
const Close = styled(AiFillCloseCircle)`
  font-size: 1.2rem;
  position: absolute;
  left: 90.6%;
  top: 5.2%;
  @media (max-width: 768px) {
    font-size: 1.4rem;
    left: 81.6%;
    top: 21.2%;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;
const FacebookBtn = styled.a`
  background-color: #f5f5f5;
  padding: 7px;
  text-align: center;
  min-width: 100%;
  color: #3b5998;
  border: 2px solid #0063e5;
  border-radius: 4px;
  white-space: nowrap;
  margin-bottom: 25px;
  cursor: pointer;
  h3 {
    display: inline-block;
  }
  &:hover {
    background-color: #0063e5;
    color: white;
    transition: 0.5s;
  }
`;
const FacebookIcon = styled(ImFacebook2)`
  font-size: 1.3rem;
  display: inline-block;
  position: relative;
  margin-right: 10px;
  top: 0.2rem;
`;
const GoogleBtn = styled.a`
  background-color: #f5f5f5;
  min-width: 100%;
  padding: 7px;
  text-align: center;
  color: #0f9d58;
  border: 2px solid #0f9d58;
  border-radius: 4px;
  white-space: nowrap;
  margin-bottom: 25px;
  cursor: pointer;
  h3 {
    display: inline-block;
  }
  &:hover {
    background-color: #0f9d58;
    color: white;
    transition: 0.5s;
  }
`;
const GoogleIcon = styled(FaGooglePlus)`
  font-size: 1.6rem;
  display: inline-block;
  position: relative;

  top: 0.3rem;
  left: -0.9rem;
`;
export default Modal;
