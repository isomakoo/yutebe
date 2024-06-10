import "./About.css";
import about1 from "../assets/images/uycha.png";
import about2 from "../assets/images/olov.png";
import about3 from "../assets/images/ui-45.png";
import about4 from "../assets/images/4.png";
import about5 from "../assets/images/5.png";
import about6 from "../assets/images/6.png";
import about7 from "../assets/images/7.png";
import about8 from "../assets/images/8.png";
import about9 from "../assets/images/9.png";
import about10 from "../assets/images/10.png";
import about11 from "../assets/images/11.png";
import about12 from "../assets/images/12.png";
import about13 from "../assets/images/13.png";
import about14 from "../assets/images/14.png";
import about15 from "../assets/images/15.png";
import about16 from "../assets/images/16.png";
import about17 from "../assets/images/17.png";

function About() {
  return (
    <>
      <div className="about-container">
        <ul className="about-item">
          <li className="about-iten">
            {" "}
            <a href="#" className="about-link">
              <img src={about1} alt="rasm" className="about-img1" /><p> Home</p>
            </a>
          </li>
          <li className="about-iten">
            {" "}
            <a href="#" className="about-link">
              <img src={about2} alt="rasm" className="about-img1" /> <p> Treding</p>
            </a>
          </li>
          <li className="about-iten">
            {" "}
            <a href="#" className="about-link">
              <img src={about3} alt="rasm" className="about-img1" />{" "}
              <p>Subscriptions</p>
            </a>
          </li>
        </ul>
        <ul className="about-items">
          <li className="about-iten"><a href="#" className="about-link"><img src={about4} alt="rasm" className="about-img1" /><p>Library </p> </a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about5} alt="rasm" className="about-img1" /><p>History </p> </a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about6} alt="rasm" className="about-img1" /><p>Watch  </p></a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about7} alt="rasm" className="about-img1" /><p>Favourites </p></a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about8} alt="rasm" className="about-img1" /><p>Liked videos </p></a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about9} alt="rasm" className="about-img1" /><p>Music </p></a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about10} alt="rasm" className="about-img1" /> <p>Games </p></a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about11} alt="rasm" className="about-img1" /> <p>Show more </p></a></li>
        </ul>
        <h2 className="about-tex">Subscriptions</h2>
        <ul className="about-items">
          <li className="about-iten"><a href="#" className="about-link"><img src={about12} alt="rasm" className="about-img1" /><p>Gussie Singleton </p></a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about13} alt="rasm" className="about-img1" /><p>Nora Francis </p></a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about14} alt="rasm" className="about-img1" /><p>Belle Briggs </p></a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about15} alt="rasm" className="about-img1" /><p>Eunice Cortez </p></a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about16} alt="rasm" className="about-img1" /><p>Emma Hanson </p></a></li>
          <li className="about-iten"><a href="#" className="about-link"><img src={about17} alt="rasm" className="about-img1" /><p>Leah Berry </p></a></li>
        </ul>
      </div>
    </>
  );
}

export default About;
