//import logo from './logo.svg';
import './css/style.css';
import Header from "./components/Header";
import Home from "./components/Home";
import JumboTron from "./components/JumboTron";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skills" element={<Services />} />
          <Route path="/work" element={<Work />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
