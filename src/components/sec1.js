import React from "react";
import img2 from '../images/illustration-2.svg'
import testimonial from '../images/avatar-testimonial.jpg'
import '../index.css'
function Sec1() {
    return(
        <div  class="container  sec1" >
        <div class="d-flex flex-row sec1">
            <div class="col-sm-6 ">
            <h2 class="fw-bolder">Stay productive, wherever you are</h2>
                <p> never let location be an issu when accessing your files.Fylo has you covered for all 
                    the storge you need
                </p>
                <p>Securely sha files and folders with friends, family and collegues for live collaboration
                    No email attachment required 
                </p>
                <a class="link">see how fylo works</a>
                <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">"</h5>
                    <p class="card-text">Fylo has improved our team productivity by an order of magnitude. 
                    Since making the switch our team has become a well-oiled collaboration machine</p>
                   <div class="d-flex flex-row">
                   <img className="circle" src={testimonial} />
                    <p>Kyle Burton</p><br></br>
                    <p>Founder & CEO, Huddle</p>
                   </div>
                </div>
                </div>
             </div>
             <div class="col-sm-6">
                <img className="img-2" src={img2} />
             </div>
        </div>
    </div>
    )
}
export default Sec1