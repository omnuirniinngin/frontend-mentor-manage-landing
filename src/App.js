import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <div id='content'>
      <LandingPage/>
      </div>
      
    </Router>
  );
}

export default App;