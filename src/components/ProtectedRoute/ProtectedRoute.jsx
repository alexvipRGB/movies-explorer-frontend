import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLogin, children }) => {
  return (
    <>
      {
        isLogin ? children : <Navigate to='/' />
      }
    </>
  )
};

export default ProtectedRoute;