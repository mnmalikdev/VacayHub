import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  //toggle modal popup.
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <Nav>
      <Logo>
        <h4>Vacay Hub</h4>
      </Logo>
      <NavMenu>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/tours">Tours</a>
        <a onClick={openModal}>Sign Up</a>
      </NavMenu>
      <CreateBtn>
        <a href="/create">Create Trips</a>
      </CreateBtn>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;
const Logo = styled.div`
  display: block;
  h4 {
    min-width: 100%;
    color: #f9f9f9;
    padding-left: 15px;
    font-size: 35px;
    font-family: "Akaya Telivigala", cursive;
    font-weight: bold;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  height: 100%;
  margin: 0;
  padding-left: 25%;
  a {
    text-decoration: none;
    padding: 0 35px;
    display: block;
    position: relative;
  }
`;
const CreateBtn = styled.div`
  background: #00d2ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3a7bd5, #00d2ff); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3a7bd5, #00d2ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 5px;
  padding: 12px 35px;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 21px;
    font-family: "Akaya Telivigala", cursive;
  }
`;
export default Header;
