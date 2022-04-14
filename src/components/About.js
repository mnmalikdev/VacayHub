import styled from "styled-components";
import Header from "./Header";
const About = () => {
  return (
    <PageContainer>
      <Header />
      <Headline>
        <h1>About Vacay Hub</h1>
      </Headline>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec
          ultrices tincidunt arcu non sodales. Lacus vestibulum sed arcu non odio euismod lacinia at. Etiam non quam lacus suspendisse faucibus.
          Bibendum enim facilisis gravida neque convallis. Proin sed libero enim sed faucibus. Urna condimentum mattis pellentesque id nibh tortor id
          aliquet lectus. Consectetur adipiscing elit ut aliquam. Amet aliquam id diam maecenas. Ac turpis egestas maecenas pharetra convallis posuere
          morbi. Nulla facilisi etiam dignissim diam quis. Sed nisi lacus sed viverra. Diam phasellus vestibulum lorem sed risus ultricies. Blandit
          aliquam etiam erat velit scelerisque in dictum non. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Scelerisque viverra mauris
          in aliquam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Pharetra magna ac placerat vestibulum lectus. Fusce id
          velit ut tortor pretium viverra suspendisse potenti. In aliquam sem fringilla ut morbi tincidunt augue. Sem et tortor consequat id porta
          nibh venenatis cras sed. Sapien et ligula ullamcorper malesuada proin. Semper quis lectus nulla at volutpat diam. Augue ut lectus arcu
          bibendum at. Et netus et malesuada fames. Malesuada proin libero nunc consequat. Convallis a cras semper auctor neque vitae tempus.
        </p>
      </Content>
    </PageContainer>
  );
};

const PageContainer = styled.section`
  margin: 0;
  padding: 0;
  height: 100%;
`;
const Headline = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  h1 {
    font-size: 50px;
  }
`;
const Content = styled.div`
  display: flex;
  p {
    font-size: 23px;
    font-weight: 300;
    line-height: 1.5;
    padding: 0 9em 0 9em;
    text-align: justify;
    @media (max-width: 768px) {
      padding: 0 1em 0 1em;
    }
  }
`;

export default About;
