import { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserCtx } from '../libs/Context';
import { jwtDecode } from 'jwt-decode';
import { User } from '../types/User';

export default function PrivateRoute() {
  const [state, dispatch] = useContext(UserCtx);

  const authorizationUser = async (token: string) => {
    // check if token is valid
    const res = await fetch('http://localhost:5000/api/v1/paslon', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    // logout if token invalid
    if (res.status !== 200) {
      dispatch({
        type: 'USER_LOGOUT',
      });
      return;
    }

    const decoded = jwtDecode<{ User: User; iat: number; exp: number }>(token);

    // login if token is valid
    dispatch({
      type: 'USER_LOGIN',
      payload: {
        isLogin: true,
        user: {
          fullname: decoded.User.fullname,
          id: decoded.User.id,
          role: decoded.User.role,
        },
        token,
      },
    });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      authorizationUser(token);
    }

    // eslint-disable-next-line
  }, []);

  return <>{state.isLogin ? <Outlet /> : <Navigate to="/" />}</>;
}
