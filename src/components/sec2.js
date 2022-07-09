import React from "react";
// import img2 from '../images/illustration-2.svg'
// import testimonial from '../images/avatar-testimonial.jpg'
import '../index.css'
function Sec2() {
    return(
        <div  class="container-fluid my-12 sec2" >
        <div class="d-flex flex-row  justify-content-between ">
            <div class="col-sm-6 left ">
            <h2>Get early access today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. 
                If you have any questions, our support team would be happy to help you.</p>
        </div>
        <div class="col-sm-6 right">
        <form >
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-primary text-light" type="submit">Get started for free</button>
    </form>
            </div>
     </div>
 </div>
                
    )
}
export default Sec2