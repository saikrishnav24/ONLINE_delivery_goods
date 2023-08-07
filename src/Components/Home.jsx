import React, { useState } from "react";
// import { Link } from 'react-dom';
// import logo from "./nav-logo.png"
import logo from "./sk.png";
// import Navbar from 'react-bootstrap/Navbar';
import aaa from "./websiteimg1.png";
import { Link } from "react-router-dom";


const Home = () => {
  const [disprofile, setdisprofile] = useState(false)
  const dishan = () => {
    if (disprofile === false) {
      setdisprofile(true)
    }
    else {
      setdisprofile(false)
    }

  }
  return (
    <>
      <nav class="fixed-nav-bar">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <a class="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <div className="">
                <li class="nav-item">
                  <a class="hi nav-link" to={Link} href="/tracking" ><p className="qb"><span style={{ color: "black" }}>Tracking</span></p></a>
                </li>
              </div>
              <li class="nav-item">
                <div className="wer">
                  <a class="nav-link" to={Link} href="/agent"><p><span style={{ color: "black" }}>Agent Registration</span></p></a>
                </div>
              </li>

            </ul>
          </div>
        </nav>
      </nav>





      <div className="bgj">
          <div className="row">
            <div className="col-md-4">
              <div className="r">
                <h1 className="heading1 mb-4">Fastest</h1>
                <h1 className="heading1 mb-4"><p></p><span style={{ color: 'red' }}>Delivery </span>&</h1>
                <h1 className="heading1 mb-3">Easy <span style={{ color: 'red' }}>Pickup.</span> </h1>
                <div>
                  <p className="paragraph">We take care of order fulfillment collection,transport,<br />
                    tracking and delivery of items.</p>
                </div>
                <div>
                  <Link to="/login">
                    <button className="custom-btn btn-7"><span>Login</span></button>
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-md-2"></div>

            <div className="col-md-6 mb-3">
              <div className="flex">
                <img src={aaa} alt='dele' height="550" width="550" />
              </div>
            </div>
          </div>
      </div>

    </>
  )
}
export default Home;
