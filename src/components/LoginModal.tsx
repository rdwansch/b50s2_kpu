import { Dispatch, FormEvent, useContext, useState } from 'react';
import { UserCtx } from '../libs/Context';
import { jwtDecode } from 'jwt-decode';
import { User } from '../types/User';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  setShowRegisterModal: Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginModal({ isOpen, setIsOpen, setShowRegisterModal }: Props) {
  const [, dispatch] = useContext(UserCtx);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    const decoded = jwtDecode<{ User: User; iat: number; exp: number }>(data);

    dispatch({
      type: 'USER_LOGIN',
      payload: {
        user: {
          fullname: decoded.User.fullname,
          id: decoded.User.id,
          role: decoded.User.role,
        },
        token: data,
        isLogin: true,
      },
    });

    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`${isOpen ? 'block' : 'hidden'} bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 left-0 right-0 z-10`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`${
          isOpen ? 'block' : ' hidden'
        } bg-white fixed  w-[500px] py-10 top-32 left-0 right-0 mx-auto z-10 rounded-lg`}
      >
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center">LOGIN</h1>
          <div className="flex flex-col max-w-sm mx-auto mt-3">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={e => setUser({ ...user, email: e.target.value })}
              className="rounded-lg px-3 py-1 border-2 focus:outline-none focus:shadow focus:border-gray-300 transition"
            />
          </div>
          <div className="flex flex-col max-w-sm mx-auto mt-3">
            <label htmlFor="password" className="text-lg">
              Passowrd
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={e => setUser({ ...user, password: e.target.value })}
              className="rounded-lg px-3 py-1 border-2 focus:outline-none focus:shadow focus:border-gray-300 transition"
            />
          </div>

          <button
            type="submit"
            className="block bg-lime-700 text-white font-bold max-w-sm w-full mx-auto rounded-lg mt-10 py-2 text-xl"
          >
            SUBMIT
          </button>
          <p className="text-center text-gray-500 italic mt-3">
            Belum memiliki akun?{' '}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                setShowRegisterModal(true);
              }}
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
