import { Provider } from 'react-redux';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar/sidebar'; // Importe a Sidebar
import { ThemeProvider } from './components/themes/theme-provider';
import About from './pages/About';
import Home from './pages/Home';
import VehicleRegisterIndex from './pages/veiculos/cadastrar';
import DashboardIndex from './pages/veiculos/dashboard/index';
import VehicleDetail from './pages/veiculos/detalhes/[id]';
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
            <Route path="/app" element={<LayoutWithSidebar />}>
              <Route path="about" element={<About />} />
              <Route path="veiculos/dashboard" element={<DashboardIndex />} />
              <Route
                path="veiculos/cadastrar"
                element={<VehicleRegisterIndex />}
              />
              <Route path="veiculos/detalhes/:id" element={<VehicleDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

const LayoutWithSidebar: React.FC = () => {
  return (
    <>
      <Sidebar children={<Outlet />} />
    </>
  );
};

export default App;
