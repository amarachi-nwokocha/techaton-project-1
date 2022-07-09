import React from "react";
import logo from '../images/logo.svg'
import phone from '../images/icon-phone.svg'
import email from '../images/icon-email.svg'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
    return(
        <div  class="container-fluid my-12 footer" >
            <img className="white" src={logo} />
            <div class="row">
    <div class="col">
 <div class="flex">
 <img src={phone} />
 <p>Phone: +1-543-123-4567</p>
 </div>
 <div class="flex">
    <img src={email} />
    <p>example@fylo.com</p>
 </div>
    </div>
    <div class="col">
      <p>About us</p>
      <p>Jobs</p>
      <p>Press</p>
      <p>Blog</p>
    </div>
    <div class="col">
    <p>Contact us </p>
    <p>Terms</p>
    <p>Privacy</p>
    </div>
    <div class="col">
    <i class="fa-brands fa-facebook"></i>
    </div>
  </div>
        </div>
    )
}
export default Footer