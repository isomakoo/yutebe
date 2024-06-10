import './MainPage.css'
import main1 from '../assets/images/Black.png'
import main2 from '../assets/images/Menu.png'
import main3 from '../assets/images/phone-18.png'
import main4 from '../assets/images/combo.png'
import main5 from '../assets/images/ui-11.png'
import main6 from '../assets/images/Userpic.png'
function Mainpage() {

  return (
    <>
     <div className="main-container">
       <img src={main2} alt="rasm"  className='main-img1'/>
       <img src={main1} alt="rasm"  className='main-img2'/>
       <input type="text" placeholder='Search' className='main-input'/>
        <ul className="main-item">
          <li className="main-list"><img src={main3} alt="rasm" className="main-img3" /></li>
          <li className="main-list"><img src={main4} alt="rasm" className="main-img4" /></li>
          <li className="main-list"><img src={main5} alt="rasm" className="main-img5" /></li>
        </ul>
        <img src={main6} alt="rasm" className="main-img6" />
     </div>
    </>
  )
}

export default Mainpage