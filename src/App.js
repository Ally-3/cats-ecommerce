import { useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './Pages/Landing';
import Navbar from './Components/Navbar';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';
import Basket from './Pages/Basket';
import ContactUs from './Pages/ContactUs';
import BuyCats from './Pages/Buy';

function App() {
  const [cats, setCats] = useState ([]);

  return (
    <div className="App">

      {/* Remember to import:
      import { BrowserRouter, Route, Routes } from 'react-router-dom'; */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Buy" element={<BuyCats cats={cats} /> } />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* <Route path="/CatsAPI" element={<CatImages cats={cats} />} /> */}
          <Route path="/Basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
