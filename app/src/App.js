import './App.css';
import Header from "./Header";
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './content/Home';
import Portfolio from './content/Portfolio';
import CaseStudies from './content/CaseStudies';
import Skillset from './content/Skillset';
import ContactMe from './content/ContactMe';

function App() {
  return (
    <div className={StyleSheet.body}>
      <Header/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/CaseStudies" element={<CaseStudies/>}/>
        <Route path="/Skillset" element={<Skillset/>}/>
        <Route path="/ContactMe" element={<ContactMe/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
