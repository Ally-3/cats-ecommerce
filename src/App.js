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

  const [basketItems, setBasketItems] = useState([]);
  const [imageUrl] = useState ([]);

  const handleBuyChange = (catDetails) => {
    // Update the basketItems state with the new catDetails
    setBasketItems((prevBasketItems) => [...prevBasketItems, catDetails]);
    console.log('Cat details in parent:', catDetails);
  };

  return (
    <div>
    <div className="App">
      {/* Remember to import:
      import { BrowserRouter, Route, Routes } from 'react-router-dom'; */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Buy" element={<BuyCats onBuyChange={handleBuyChange}/> } />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Basket" element={<Basket basketItems={basketItems} setBasketItems={setBasketItems} imageUrl={imageUrl} />} />
        </Routes>
      </BrowserRouter>
    </div>
    <div><Footer /></div>
    </div>
  );
}

export default App;
