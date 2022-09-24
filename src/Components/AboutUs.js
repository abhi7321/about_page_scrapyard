import React, { Component } from "react";
// import { Card } from "reactstrap";

import "./AboutUs.css";
import Card4 from "./Card4";
import Cards from "./Cards";

export class AboutUs extends Component {
  render() {
    return (
      <div id="main">
        <div id="div1">
          <h2 id="head1">About Us</h2>

          <p id="p1">
            The ScrapYard is a product which is used to organize the waste
            management system.
          </p>
        </div>

        <hr id="hr"/>

        {/* <div id="div2"> */}
          <h2 className="head2">Founders Message</h2>

          <p id="p2">“Waste isn't waste until we waste it.”</p>
          <p id="p3">
            aaaaaaa
           </p>
        

        <hr id="hr"/>

        <div id="div3">
          <h2 className="head2">Our Core Values</h2>
          <div id="div4">
            <Cards />
          </div>
        </div>

        <hr id="hr" />

        <div id="div4">
          <h2 className='head2'>Our Belief</h2>
          <p id="p4">
            We believe that India can be a greener and cleaner country, as every
            household commits to getting their dry scrap recycled, not only
            resources can be saved from over-exploitation, but the landfills
            with mixed harmful garbage can be eradicated.
          </p>

            <Card4/>

        </div>




      </div>
    );
  }
}

export default AboutUs;
