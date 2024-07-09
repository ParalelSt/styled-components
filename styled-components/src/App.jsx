import Navbar from "./components/Navbar";
import { GlobalStyles } from "./components/styles/Global-styles";
import Content from "./components/Content";

function App() {
  return (
    <>
      <GlobalStyles />
      <header>
        <Navbar></Navbar>
        <Content></Content>
      </header>
    </>
  );
}

export default App;
