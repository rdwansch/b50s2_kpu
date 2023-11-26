import { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserCtx } from '../libs/Context';
import { jwtDecode } from 'jwt-decode';

export default function PrivateRoute() {
  const [state, dispatch] = useContext(UserCtx);

  const authorizationUser = async (token: string) => {
    // check if token is valid
    const res = await fetch('http://localhost:3000/api/v1/pemilu-news', {
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

    const decoded = jwtDecode<{ userId: number; username: string; iat: number; exp: number }>(token);

    // login if token is valid
    dispatch({
      type: 'USER_LOGIN',
      payload: {
        isLogin: true,
        user: {
          username: decoded.username,
          id: decoded.userId,
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
