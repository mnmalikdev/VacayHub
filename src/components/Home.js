import styled from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import Search from "./Search";
const Home = () => {
  return (
    <PageContainer>
      <Header />
      <Hero />
      <Search />
    </PageContainer>
  );
};

const PageContainer = styled.section`
  margin: 0;
  padding: 0;
  height: 100%;
`;

export default Home;
