import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateUserRoute({ auth }: { auth: { isLogin: boolean; role: string } }) {
  return <>{auth.isLogin && auth.role == 'user' ? <Outlet /> : <Navigate to="/" />}</>;
}
