import Cats from './Components/Cats';
import Cat from './Components/Cat';
import RandomCat from './Components/faker';
import './App.css';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Remember to import:
      import { BrowserRouter, Route, Routes } from 'react-router-dom'; */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <RandomCat />
      <Cat />
    </div>
  );
}

export default App;
