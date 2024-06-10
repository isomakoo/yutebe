import "./App.css";
import About from "./components/About";
import FooterPage from "./components/FooterPage";
import HomePage from "./components/HomePage";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="hero-container">
        < Mainpage />
        <div className="box">
          <About />
          <nav>
            <HomePage />
            <Navbar />
            <FooterPage />{" "}
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;
