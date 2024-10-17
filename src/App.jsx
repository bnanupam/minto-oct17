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
    
  <div className='cardcomponents'>
  <h2>Personal Loan Features & Benefits</h2>
    <ul className='cardimgtx'>
      <li>
        <p>Instant<br /> Cash in<br /> Bank</p>
        <img src={card1m} alt="img1"  />
      </li>
      <li>
        <p>Flexible<br /> Repayment<br />Tenures</p>
        <img src={card2m} alt="img2" />
        </li>
      <li>
        <p>Attractive <br />Interest <br />Rates</p>
        <img src={card3m} alt="img3" />
        </li>
      <li>
        <p>Minimal<br /> Documentation
        </p>
        <img src={card4m} alt="img4" />
        </li>
    </ul>
  
   </div>
   <div className='secondconts'>
    <h2>
    Personal Loan Eligibility
    </h2>
   
    <ul class="info-list">
        <li><strong>Age:</strong> 21 - 65 years</li>
        <li><strong>Income:</strong> Minimum Rs 15,000/month for salaried applicants</li>
        <li><strong>Resident:</strong> A resident of India</li>
    </ul>

   </div>
   <div className='largcontainer'>
    <h2>
    What is a Personal Loan?
    </h2>
    <p>
    A loan is when a party borrows money from another party. A personal loan is a type of unsecured loan provided by financial institutions, including banks, credit unions, and online lenders, which can be used for various personal expenses. These loans do not need collateral, which means, you don't have to provide an asset (like a house) to secure the loan. Personal loans often come with higher interest rates as they are unsecured. Borrowers can use personal loans for a wide range of purposes, making them a flexible financing option.
    </p>
    <h2>
    When to Consider a Personal Loan?
    </h2>
   
      <ul>
        <li>
        Emergency Expenses: Personal loans can be a lifesaver in emergency situations where immediate funds are needed, such as unexpected medical bills or urgent home repairs. They provide quick access to cash without the need to liquidate investments or assets.
        </li>
        <li>
        Debt Consolidation: If you have multiple debts with varying interest rates, a personal loan can consolidate these debts into a single payment with a potentially lower interest rate, simplifying your finances and possibly reducing your overall interest payments.
        </li>
        <li>
        Large Purchases: Financing significant expenses, like weddings, vacations, or major appliances, can be more manageable with a personal loan. This allows you to spread the cost over a period of time rather than paying upfront.
        </li>
        <li>
        Home Improvement:Personal loans can fund home renovation or remodeling projects, helping you increase the value of your property without tapping into your home equity.
        </li>
        <li>
        Educational Expenses: While student loans are specifically designed for education costs, a personal loan can cover additional expenses like books, supplies, or living costs if student loans fall short.
        </li>
      </ul>
   
   </div>
  </footer>

    </div>
  )
}

export default App
