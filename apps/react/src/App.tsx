import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
