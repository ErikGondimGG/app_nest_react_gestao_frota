import { useAuth } from '@/stores/auth.store';
import { Navigate } from 'react-router-dom';

const withAuth = (Component: React.FC) => {
  return () => {
    const { accessToken } = useAuth();
    return accessToken ? <Component /> : <Navigate to="/login" />;
  };
};

export default withAuth;
