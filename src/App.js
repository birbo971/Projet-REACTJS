import React, { Component } from 'react'
import './App.css'
//Import du Header
import Header from'./components/HeaderComponent/Header';
//Import de la Home
import HomePage from'./components/Pages/HomePage';
//Import de la Navigation
import NavBar from './components/HeaderComponent/NavBar';
//Import du Footer
import Footer from './components/FooterComponent/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch,faSignInAlt,faEnvelope,faKey,faUser,faVenusMars,faBirthdayCake} from '@fortawesome/free-solid-svg-icons'


library.add(faSearch,faSignInAlt,faEnvelope,faKey,faUser,faVenusMars,faBirthdayCake )

class App extends Component {

  render() {
    return (
      
      <div className="Emy">
      <div className="header">
        <NavBar></NavBar>
        <Header></Header>
      </div>
          <HomePage>
          </HomePage>
         <Footer></Footer>
      </div>
    )
  }
}

export default App