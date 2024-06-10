import "./FooterPage.css";
import footer1 from "../assets/images/ov.png";

function FooterPage() {
  return (
    <>
      <div className="footer-container">
        <nav className="footer-list">
          <img src={footer1} alt="rasm" />
          <b className="footer-text">Food & Drink</b>
          <p className="footer-teks">Recommended channel for you</p>
        </nav>
        <div className="footer">
          <nav className="footer-item">
            <iframe
              className="footer-img2"
              width="240"
              height="150"
              src="https://www.youtube.com/embed/Qf4r785empw"
              title="Ibrohim Nurmatov - Oqqan daryo | Иброхим Нурматов - Оккан дарё. Uzbek song. Özbek şarkısı. اوزبكية"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="footer-title">Ibrohim Nurmatov - Oqqan daryo</p>
            <p className="footer-teks">1mln views · 4 months ago</p>
          </nav>
          <nav className="footer-item">
            <iframe
             className="footer-img2"
              width="240"
              height="150"
              src="https://www.youtube.com/embed/Pw_AluJ1P2E"
              title="Jah Khalib - Лейла"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="footer-title">Ulukmanapo & Bakr - Расстояние </p>
            <p className="footer-teks">1mln views · 4 months ago</p>
          </nav>
          <nav className="footer-item">
            <iframe
              className="footer-img2"
              width="240"
              height="150"
              src="https://www.youtube.com/embed/HYi4a2eZL50"
              title="MORGENSHTERN - DINERO (Official Video, 2021)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="footer-title">
              MORGENSHTERN - DINERO 
            </p>
            <p className="footer-teks">2mln views · 8 months ago</p>
          </nav>
          <nav className="footer-item">
            <iframe
              className="footer-img2"
              width="240"
              height="150"
              src="https://www.youtube.com/embed/YhBfla7sNR0?list=RDGMEMCMFH2exzjBeE_zAHHJOdxg"
              title="Jahongir Otajonov va Afruza | Chaqasan"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="footer-title">
              Jahongir Otajonov va Afruza Chaqasan
            </p>
            <p className="footer-teks">614k views · 4 months ago</p>
          </nav>
          <nav className="footer-item">
            <iframe
              className="footer-img2"
              width="240"
              height="150"
              src="https://www.youtube.com/embed/YhBfla7sNR0?list=RDGMEMCMFH2exzjBeE_zAHHJOdxg"
              title="Jahongir Otajonov va Afruza | Chaqasan"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="footer-title">
              Jahongir Otajonov va Afruza Chaqasan
            </p>
            <p className="footer-teks">614k views · 4 months ago</p>
          </nav>
        </div>
      </div>
    </>
  );
}

export default FooterPage;
