import React, { Component } from 'react';
import Navbar from '../HeaderComponent/NavBar';
import Footer from '../FooterComponent/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-solid-svg-icons"


import  '../../common/Styles/About.css';

class About extends Component {
  render() {
    return (
      <div className="block">
      <Navbar></Navbar>
        <div>
            <h1 className="about-title">About Us</h1>
            <h2 className="about-subtitle">Simply dummy has been the industry's standard dummy text.</h2>
        </div>


     <div className="team-card-container"> 
        <div className="team-member-profile-link"> 
          <figure className="team-card-img-wrapper"> 
           <img src="http://c8.alamy.com/comp/HEDH63/terrier-puppy-dog-animal-dressed-up-in-navy-blue-suit-with-red-tie-HEDH63.jpg" className="team-member-img"/> 
          <figcaption className="hover-area">
            <div className="expertise"> Réseaux </div> <ul className="expertises">
            <FontAwesomeIcon icon="search"/>
          
            <li> <i className="fa fa-chevron-right small" aria-hidden="true"></i>  Facebook </li> 
            <li> <i className="fa fa-chevron-right small" aria-hidden="true"></i> Linekedin </li> 
            <li><i className="fa fa-chevron-right small" aria-hidden="true"></i> Twitter </li> 
        </ul>
           {/* <div className="view-more"> View Profile </div>  */}
          </figcaption>
          </figure>
       
         <div className="team-member-text"> 
           <div className="team-member-name"> M.Carey </div> 
           <div className="team-member-title"> Founder </div> 
         </div> 
         </div> 
         </div>
      <Footer></Footer>
    </div>
    
    )
  }
}
export default About;