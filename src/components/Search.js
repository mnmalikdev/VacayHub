import styled from "styled-components";
const Search = (props) => {
  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput type="text" placeholder="SEARCH FOR TRIPS AND TRAVEL ACTIVITIES" />
      </SearchForm>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 44%;
  left: 25%;
  @media (max-width: 768px) {
    width: 70%;
    left: 15%;
  }
`;
const SearchForm = styled.form`
  display: flex;
  width: 100%;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 18px;
  border: 0.5px solid #f9f9f9;
  outline: none;
  color: #f9f9f9;
  placeholder-color: #f9f9f9;
  border-radius: 27px;
  background-color: RGBA(250, 250, 250, 0.55);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

export default Search;
