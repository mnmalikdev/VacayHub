import { useState } from "react";
import styled from "styled-components";
const Register = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    age: "",
    password: "",
    telephone: "",
    city: "",
    age: "",
    gender: "",
  }); // values is an object
  const handleUserName = (e) => {
    setValues({ ...values, userName: e.target.value });
  };
  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handleAge = (e) => {
    setValues({ ...values, age: e.target.value });
  };
  const handlePassword = (e) => {
    setValues({ ...values, password: e.target.value });
  };
  const handleTelephone = (e) => {
    setValues({ ...values, telephone: e.target.value });
  };
  const handleCity = (e) => {
    setValues({ ...values, city: e.target.value });
  };

  const handleGender = (e) => {
    setValues({ ...values, gender: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <PageContainer>
      <BackgroundImage src="https://img.freepik.com/free-psd/photo-collage-strip-effect-mockup_117023-2473.jpg?w=1380" />
      <FormContainer>
        <RegisterForm onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Username" name="username" value={values.userName} onChange={handleUserName} />
          </div>
          <div>
            <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleEmail} />
          </div>
          <div>
            <input type="password" placeholder="Password" name="password" value={values.password} onChange={handlePassword} />
          </div>
          <div>
            <input type="tel" placeholder="Phone Number" name="phone" value={values.telephone} onChange={handleTelephone} />
          </div>
          <div>
            <input type="text" placeholder="City" name="city" value={values.city} onChange={handleCity} />
          </div>
          <div>
            <input placeholder="Age" type="text" name="age" value={values.age} onChange={handleAge} />
          </div>
          {/* create radio options for female and male gender */}

          <div className="gender">
            <label>Male</label>
            <input type="radio" name="gender" value="male" onChange={handleGender} />
            <label>Female</label>
            <input type="radio" name="gender" value="female" onChange={handleGender} />
          </div>

          <div>
            <p>
              Already Registered? <a href="http://localhost:3000/login">Login</a>
            </p>
          </div>
          <div>
            <button>Register</button>
          </div>
        </RegisterForm>
      </FormContainer>
    </PageContainer>
  );
};

const PageContainer = styled.section`
  margin: 0;
  padding: 0;
  height: 100%;
`;
const FormContainer = styled.div`
  //center the formContainer vertically
  display: flex;
  position: absolute;
  top: 23%;
  left: 35%;
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  @media (max-width: 768px) {
    top: 20%;
    left: 10%;
  }
`;
const RegisterForm = styled.form`
  width: 660px;
  @media (max-width: 768px) {
    width: 370px;
  }
  @media (max-width: 480px) {
    width: 370px;
  }
  @media (max-width: 320px) {
    width: 370px;
  }
  div {
    margin: 10px 10px;
  }
  input {
    border: 1px solid #ccc;
    padding: 18px;
    width: 100%;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 1);
    color: #f9f9f9;
  }
  button {
    color: #f9f9f9;
    background-color: #0063e5;
    border: 1px solid transparent;
    font-size: 1.2rem;
    cursor: pointer;
    width: 100%;
    letter-spacing: 1.5px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover {
      background-color: #0483ee;
    }
  }
  p {
    color: #f9f9f9;
  }
  a {
    color: #0063e5;
    &:hover {
      cursor: pointer;
    }
  }
  .gender {
    color: white;
    white-space: nowrap;
    display: flex;
    input: {
      padding: 0;
    }
  }
`;
const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  //add a dark overlay to this image
  opacity: 01;
  z-index: -1;
`;
export default Register;
