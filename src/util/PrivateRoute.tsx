import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ auth }: { auth: { isLogin: boolean; role: string } }) {
  return <>{auth.isLogin && auth.role == 'admin' ? <Outlet /> : <Navigate to="/" />}</>;
}
