import React from 'react'
import xball from '../../assets/images/xball.png'
import miniball from '../../assets/images/miniball.png'
import largeball from '../../assets/images/largeball.png'
import absolutefooter from '../../assets/images/absolutefooter.png'
import paki from '../../assets/images/paki.png'


function SigninPage() {
    return (
        <div>
              <div className="singin">    
              <img src={absolutefooter} className="pas"/>
              <img src={paki} className="pass"/>

  <form className="widi">
    <h2 className="cecki">Login in to Countinue</h2>
    <div class="input-container">
    <img src={xball} className="eksios" data-aos="fade-left"/>
    <img src={xball} className="eksioss" data-aos="fade-left"/>

      <i class="fa fa-envelope icon"></i>
      <input class="input-field" type="text" placeholder="Username" name="usrnm" />
    </div>
  
    
    <div class="input-container">
    <img src={largeball} className="erriotik" />

      <img src={miniball} className="exios" />
      <i class="fa fa-key icon"></i>
      <input class="input-field" type="password" placeholder="Password" name="psw" />
    </div>
  <div className="radio-check">
      <div>
  <input type="radio" name="check" className="radio" value="true"/> Remeber Me</div>
  <p className="forgot-pw">Forgot password?</p>
  </div>
  
  
    <button type="submit" className="See-Moree">Login</button>
  </form>
  
  <div className="radio-check-radio">
      <div className="dont-have-account">
          Don't have an account?
  </div>
  <div>
  <p className="sign-up" ><a href="/singupform">Sign-Up</a></p></div>
  </div>
   
         </div>   
        </div>
    )
}

export default SigninPage
