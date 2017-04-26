import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class AboutUs extends Component {
  render() {
    return (
      <div className="container catnav">
        <h2 className="pagehead">
          ABOUT NY & C
        </h2>
				<nav className="subcat">
					<Link to="/about/aboutus/" id="aboutus">About Us</Link>
					<Link to="/about/careers/" className="active" id="careers">Careers</Link>
					<Link to="/about/benefits/" id="benefits">Benefits</Link>
					<Link to="/about/investor-relations/" id="investors">Investors</Link>
					<Link to="/about/affiliate-program/" id="affiliates">Affiliates</Link>
					<Link to="/about/philanthropy/" id="philanthropy">Philanthropy</Link>
					<Link to="/about/veteranhiring/" id="veteranhiring">Veteran Hiring</Link>
				 </nav>
      </div>
    );
  }
}

export default AboutUs;
