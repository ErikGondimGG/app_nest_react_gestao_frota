import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/themes/theme-provider';
import About from './pages/About';
import Home from './pages/Home';
import DashboardIndex from './pages/dashboard/index';
import { useAuthStore } from './stores/auth.store';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Provider store={useAuthStore}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<DashboardIndex />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
