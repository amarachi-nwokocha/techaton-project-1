import React from "react";
import heroImg from '../images/illustration-1.svg'
import '../index.css'
function Hero() {
    return(
        <div  class="container my-2" >
            <div class="d-flex flex-row">
                <div class="col-sm-6">
                    <h2 class="fw-bolder">
                        All your files in one secure location, accessible anywhere.
                    </h2>
                    <p>Fylo stores your mst important files in one secue location.Acess them whereever you need
                        ,share and collanorte with friends, family, and co-workers.
                    </p>
                    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
                </div>
                <div class="col-sm-6">
                    <img class="img-1 img-fluid" src={heroImg} />
                </div>
            </div>
        </div>
    )
}
export default Hero