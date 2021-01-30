import React from 'react'
import Selectcombobox from './Selectcombobox'
import xball from '../../assets/images/xball.png'
import miniball from '../../assets/images/miniball.png'
import largeball from '../../assets/images/largeball.png'
import absolutefooter from '../../assets/images/pas.png'
import paki from '../../assets/images/paki.png'
// function Singupform() 
class Singupform extends React.Component {
  
  render(){
  return (
   <>
   
   <div className="singin singupip" onSubmit={this.handleSubmit}>    
   <img src={absolutefooter} className="pas"/>
              <img src={paki} className="pass"/>

  <form className="widi" onSubmit={this.handleSubmit}>
    <h2 className="cecki">Login in to Countinue</h2>
    <div class="input-container">
    <img src={xball} className="eksios" data-aos="fade-left"/>
    <img src={xball} className="eksioss" data-aos="fade-left"/>

      <i class="fa fa-envelope icon"></i>
      <input class="input-field" type="text" placeholder="email" name="email" />
    </div>
    <div class="input-container">
 
      <i class="fa fa-user icon"></i>
      <input class="input-field" type="text" placeholder="username" name="usrnm" />
    </div>
<div>


       
</div>
    
    <div class="input-container">
      <i class="fa fa-key icon"></i>
      <input class="input-field" type="password" placeholder="Password" name="psw" />
    </div>
    <div className="select-one">
         
           <Selectcombobox/>
         
          </div>
  
  
    <button type="submit" className="See-Moree">Login</button>
  </form>
  
  <div className="radio-check-radio">
      <div className="dont-have-account">
         Already have an account?
  </div>
  <div>
  <p className="sign-up" ><a href="/signin">Signin</a></p></div>
  </div>
   
         </div>  
   </>
  )}}


export default Singupform
