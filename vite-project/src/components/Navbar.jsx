import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <p className="navbar-text">Recommended</p>
        <div className="navbar-item">
          <nav className="navbar-list">
            <iframe
              className="navbar-img"
              width="390"
              height="200"
              src="https://www.youtube.com/embed/OFpTa2IfXts"
              title="You’ve Got a Friend In Me (Cavetown Cover)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="navbar-title">Dude You Re Getting A Telescope</p>
            <p className="navbar-teks">34k views · 5 months ago</p>
          </nav>
          <nav className="navbar-list">
            <iframe
              className="navbar-img"
              width="390"
              height="200"
              src="https://www.youtube.com/embed/YSGv4akf_l0"
              title="G&#39;aybulla Tursunov - Janona audio version 2024 @gaybullatursunovrasmiykana7890"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="navbar-title">Gaybulla Tursunov Janona</p>
            <p className="navbar-teks">54k views · 11 months ago</p>
          </nav>
          <nav className="navbar-list">
            <iframe
            className="navbar-img"
              width="390"
              height="200"
              src="https://www.youtube.com/embed/q53P21aTQj0?list=RDq53P21aTQj0"
              title="Гио Пика ♠️  - Листопадом (Official Clip 2023)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="navbar-title">Гио Пика ♠️ - Листопадом </p>
            <p className="navbar-teks">590k views · 36 months ago</p>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
