import { useState } from "react";
import styled from "styled-components";
const Login = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <PageContainer>
      <BGimage src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      <BGoverlay />
      <FormContainer>
        <Text>
          <h4>Get Started !</h4>
          <h1>
            Log In to Your Account<span>.</span>
          </h1>
          <p>
            Not a member yet? <a href="http://localhost:3000/register">Sign up</a>
          </p>
        </Text>
        <LoginForm>
          <div className="full-input">
            <label>email</label>
            <input type="email" name="emailUser" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}></input>
          </div>
          <div className="full-input">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            ></input>
          </div>
          {/* create a submit button */}
          <button type="submit" onClick={handleSubmit}>
            Log In
          </button>
        </LoginForm>
      </FormContainer>
    </PageContainer>
  );
};
const PageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;
const BGimage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BGoverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  background-image: linear-gradient(66deg, #000000 34%, #4d5f75 86%);
  opacity: 0.7;
  //implement radial gradient
`;
const FormContainer = styled.div``;
const Text = styled.div`
  position: absolute;
  top: 15%;
  left: 10%;
  z-index: 1;
  h4 {
    color: #a9a9a9;
    font-size: 1.5rem;
    line-height: 0.1rem;
  }
  h1 {
    color: #f9f9f9;
    font-size: 3rem;
    line-height: 2.4rem;
  }
  p {
    color: #a9a9a9;
    margin: 16px 0;
  }
  a {
    color: #0063e5;
    &:hover {
      cursor: pointer;
    }
  }
  span {
    color: #0063e5;
    font-size: 90px;
  }
`;
const LoginForm = styled.form`
  position: absolute;
  top: 34%;
  left: 10%;
  color: #f9f9f9;
  margin-top: 50px;
  label {
    position: relative;
    top: 23px;
    left: 12px;
    display: block;
    font-size: 0.8rem;
    opacity: 0.5;
  }
  input {
    display: block;
    background-color: #1a1f25;
    border: none;
    padding-top: 26px;
    padding-bottom: 19px;
    padding-left: 12px;
    width: 450px;
    border-radius: 12px;
    color: #f9f9f9;
    // add blue border shadow when active
    &:focus {
      outline: none;
      border: 1px solid #0063e5;
      box-shadow: 0 0 0 0.2rem rgba(0, 99, 229, 0.25);
    }
  }
  button {
    margin-top: 25px;
    color: #f9f9f9;
    background-color: #0063e5;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    width: 450px;
    letter-spacing: 1.5px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 30px;
    // add box shadow bottom of button when hovered
    &:hover {
      background-color: #0483ee;
      box-shadow: 0px 0px 10px #0483ee;
    }
  }
`;
export default Login;
