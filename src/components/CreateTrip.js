import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BiImageAdd } from "react-icons/bi";
import styled from "styled-components";

const CreateTrip = () => {
  // state to manage form steps
  const [step, setStep] = useState(1);
  // states to manage file uploads
  const [file, setFile] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      // console.log("filesArray: ", filesArray);
      setFile((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  //component to render images
  const renderImages = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return (
        <img
          style={{
            width: "25%",
            padding: "5px",
            border: "1px solid #f9f9f9",
            borderRadius: "10px",
          }}
          src={photo}
          alt=""
          key={photo}
        />
      );
    });
  };

  const advanceStep = () => {
    if (step === 4) {
      return;
    }
    setStep((step) => step + 1);
  };
  //step one of the form
  return (
    //functional components which are basically forms. we will render them conditionally.
    <PageContainer>
      <FormContainer>
        {/* Basic Trip/Vacation INfo  */}
        <h1>Step {step}</h1>
        {step === 1 && (
          <StepOne>
            <h2>State the basic details of the trip</h2>
            <div>
              <form>
                <input type="text" placeholder=" Name for the trip. e.g: hiking across Australian alps. " />
                <input type="text" placeholder=" Country" />
                <input type="text" placeholder=" Location" />
                <textarea type="textarea" placeholder=" Any necessary details mentioning about the trip. " />
              </form>
            </div>
            <Button onClick={advanceStep}>NEXT !</Button>
          </StepOne>
        )}
        {/* Essentials  */}
        {step === 2 && (
          <StepTwo>
            <h2>What would you want your friends to bring? mention essentials or medicines if needed.</h2>
            <div>
              <form>
                <input type="text" placeholder=" Essentials " />
              </form>
            </div>
            <Button onClick={advanceStep}>NEXT !</Button>
          </StepTwo>
        )}
        {/* Date Picking component */}
        {step === 3 && (
          <StepThree>
            <h2>When would you like to start your journey?</h2>
            <div>
              <Calender selectRange={true} />
            </div>
            <Button onClick={advanceStep}>NEXT !</Button>
          </StepThree>
        )}
        {/* images upload component */}
        {step === 4 && (
          <StepFour>
            <h2>Upload images of the destination of your trip.</h2>
            <h3>The First image will be the cover photo of the trip</h3>
            <div></div>
            {/* cover photo upload */}
            <div>
              <input type="file" id="file" multiple onChange={handleFileChange} />
              <label htmlFor="file">
                <BiImageAdd
                  style={{
                    fontSize: "3rem",
                    margin: "10px 47% 10px 47%",
                    color: "0063e5",
                  }}
                />
              </label>
            </div>
            <div>{renderImages(file)}</div>
          </StepFour>
        )}
      </FormContainer>
    </PageContainer>
  );
};

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const FormContainer = styled.div`
  border: 1px solid black;
  width: 60%;
  height: 90%;
  h1 {
    font-size: 3rem;
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;
const StepOne = styled.div`
  h2 {
    text-align: center;
  }
  div {
    display: flex;
    position: absolute;
    top: 22%;
    left: 30%;
    width: 40%;
    @media (max-width: 600px) {
      left: 18%;
      width: 60%;
    }
  }
  form {
    margin-top: 35px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    @media (max-width: 600px) {
      min-width: 100%;
    }
  }
  input {
    margin-bottom: 45px;
    display: flex;
    position: relative;
    padding: 18px;
    border: 1px solid #0063e5;
    min-width: 100%;
    @media (max-width: 600px) {
      min-width: 100%;
    }
  }
  textarea {
    width: 100%;
    padding: 18px;
    display: flex;
    position: relative;
    height: 200px;
    border: 1px solid #0063e5;
    min-width: 100%;
  }
  h1 {
    min-width: 50%;
  }
  h2 {
    min-width: 50%;
  }
`;
const StepTwo = styled.div`
  h2 {
    text-align: center;
  }

  div {
    display: flex;
    position: relative;
    width: 40%;
    top: 34%;
    left: 20%;
    min-width: 60%;
  }
  form {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
  }
  input {
    margin-bottom: 45px;
    min-width: 100%;
    padding: 18px;
    border: 1px solid #0063e5;
  }
`;
const StepThree = styled.div`
  h2 {
    text-align: center;
  }
`;
const Button = styled.button`
  width: 20%;
  padding: 18px;
  border: 1px solid #0063e5;
  background-color: #0063e5;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 27px;
  outline: none;
  cursor: pointer;
  position: absolute;
  left: 40%;
  top: 80%;
  @media (max-width: 600px) {
    min-width: 30%;
    top: 86%;
    left: 35%;
    height: 60px;
    font-size: 1.2rem;
  }
`;
//style calender component using styled components
const Calender = styled(Calendar)`
  position: relative;
  margin: 90px auto 0 auto;
  padding: auto;
`;
const StepFour = styled.div`
  #file[type="file"] {
    display: none;
  }
  h2,
  h3 {
    text-align: center;
  }
`;

export default CreateTrip;
