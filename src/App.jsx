import styled from "styled-components";
import "./styles/styles.css";
import Profiles from "./components/utils/Profiles";
import GlobalContextProvider from "./services/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <StyledApp>
        <Profiles />
      </StyledApp>
    </GlobalContextProvider>
  );
}

export default App;

/******************* styled component ************************/
/******************* styled component ************************/

const StyledApp = styled.main`
  padding: 1rem;
  margin: 2rem auto 10rem;
  max-width: 70rem;

  @media screen and (min-width: 45rem) {
    padding: 2rem;
  }
`;
