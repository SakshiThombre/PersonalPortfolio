import background1 from './images/background1.jpg';
import './App.css';
import React, { useState } from 'react';
import MyNavbar from './Components/header';
import About from './Components/about';
import Project from './Components/projects';
import FormContact  from './Components/contact';
import Home from'./Components/home';
import Footer from './Components/footer';
// bootstrap css in react
import 'bootstrap/dist/css/bootstrap.min.css';

  const sectionStyle = {
     backgroundImage: `url(${background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '100vh', // Ensures it covers the full viewport height
    /* 
       Note: 'fixed' is often disabled on mobile devices 
       because it causes performance lag and zoom issues.
    */
    backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll' 
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <div style={sectionStyle }>
      <MyNavbar setSection={setActiveSection}  /> 
      <main className='content-area'>
      {activeSection === 'home' && <Home   setSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Project />}
        {activeSection === 'contact' && <FormContact />}
        <Footer /> 

        </main>
    </div>
  );
}

export default App;
