import background1 from './images/background1.jpg';
import './App.css';
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
    minHeight: '100vh',
    backgroundAttachment: 'fixed' // Optional: keeps bg still while scrolling
  };

function App() {
  return (
    <div style={sectionStyle }>
      <MyNavbar /> 
      <Home />
      <About />
      <Project />
      <FormContact />
      <Footer />
    </div>
  );
}

export default App;
