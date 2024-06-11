import "./HomePage.css";
import home1 from "../assets/images/Oval.png";

function HomePage() {
  return (
    <>
    
      <div className="home-container">
        <nav className="home-item">
          <img src={home1} alt="rasm" />
          <p className="home-text">Dollie Blair</p>
        </nav>
        <div className="home">
          <nav className="home-list">
            <iframe
            className="home-img2"
              width="240"
              height="150"
              src="https://www.youtube.com/embed/gzBT0_bjUNA?list=RDq53P21aTQj0"
              title="Miyagi &amp; Andy Panda - Там ревели горы (2020)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="home-title">Miyagi Andy Panda Там ревели</p>
            <b className="home-teks">80k views · 3 days ago</b>
          </nav>
          <nav className="home-list">
            <iframe
              className="home-img2"
              width="240"
              height="150"
              src="https://www.youtube.com/embed/CtFayRMVuAg"
              title="Simon Massey - A Brief History of Creation"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="home-title">A Brief History Of Creation</p>
            <b className="home-teks">80k views · 3 days ago</b>
          </nav>
          <nav className="home-list">
            <iframe
              className="home-img2"
              width="240"
              height="150"
              src="https://www.youtube.com/embed/ag6UiC-jQ1g"
              title="RYBAKOV &amp; Витя АК - Заряжаем бабки (Премьера клипа 2023)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="home-title">Selecting The Right Hotel</p>
            <b className="home-teks">123k views · 1 months ago</b>
          </nav>
          <nav className="home-list">
            <iframe
              className="home-img2"
              width="240"
              height="150"
              src="https://www.youtube.com/embed/exX4mw3FKdQ"
              title="Mirshakar Fayzulloyev MALADES stand-up konsert dasturi"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="home-title">Asteroids</p>
            <b className="home-teks">43k views · 12 days ago</b>
          </nav>
          <nav className="home-list">
             <iframe
              className="home-img2"
              width="240"
              height="150"
              src="https://www.youtube.com/embed/HYi4a2eZL50"
              title="MORGENSHTERN - DINERO (Official Video, 2021)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
             <p className="home-title">Telescopes 101</p>
            <b className="home-teks">80k views · 3 days ago</b>
          </nav> 
        </div>
      </div>
    </>
  );
}

export default HomePage;
