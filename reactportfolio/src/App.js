//import logo from './logo.svg';
import './css/style.css';
import React, { Component } from 'react';
import Header from './components/Header';
import JumboTron from "./components/JumboTron";
import About from './components/About';
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <JumboTron resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Skills resumeData={resumeData}/>
        <Services resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;