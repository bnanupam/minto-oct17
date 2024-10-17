import { useState } from 'react'
import './App.scss'
import Secure from './assets/img1.avif'
import girlimg from './assets/bannerimg.avif'
import card1m from './assets/card1m.avif'
import card2m from './assets/card2m.avif'
import card3m from './assets/card3m.avif'
import card4m from './assets/card4m.avif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>

      <header className='header'>
        <h1>Mint</h1>
        <p>
          powered by <button type='button' className='washButton' >wash </button>
        </p>
      </header>
      <div className='maincontainer'>
        <div className='securebtn'>
          <img src={Secure} alt="secureimg" />
          <p className='discription'>
            Find Best Personal<br />
            Loan Offers From<br />
            <p style={{ color: 'green', fontSize: 40 }}>10+ Lenders </p>
            <p> Get Instant Loan Offers of up to 10 Lakh</p>
          </p>
          <p className='telbox'>
            <input type="tel" pattern="[A-Za-z]+" name="phone" required="" maxlength="14" id="input-box" inputmode="numeric" value="+91 " />
          </p>
          <button class="landingPageCss_button___D_Bd">Get Loan Offers</button>
          <p className='para'>
            By continuing, I agree to CIBIL Terms and Conditions and<br />
            authorize HTDS Lending Partners to collect and store the<br />
            Credit Bureau data for checking my eligibility for loan.
          </p>
          <p className='para'>
          By continuing, I agree to the Privacy Policy and Terms and<br />
          Conditions of HTDS Lending Partners and receive <br />
          communication from HTDS Lending Partners via SMS, E-Mail <br />
          and WhatsApp.
          </p>
        </div>
        <div className='herobanner'>
          <img src={girlimg} alt="girlimg1" height={364} width={364} />
        </div>
      </div>
      
  <footer>
    <h2>Personal Loan Features & Benefits</h2>
  <div className='cardcomponents'>
    
    <ul className='cardimgtx'>
      <li>
        <img src={card1m} alt="img1"  />
      </li>
      <li><img src={card2m} alt="img2" /></li>
      <li><img src={card3m} alt="img3" /></li>
      <li><img src={card4m} alt="img4" /></li>
    </ul>
  
   </div>
   
  </footer>

    </div>
  )
}

export default App
