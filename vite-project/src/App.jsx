import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import FooterPage from "./components/FooterPage";
import HomePage from "./components/HomePage";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import NewsPage from "./components/NewsPage";
function App() {
  return (
    <> 
<div className="hero-container"> 
        <div className="box">
        < Mainpage />
          <div className="boxcha">
         <About />
          <nav>
            <HomePage/>
            <Navbar />
            <FooterPage />{" "}
          </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
