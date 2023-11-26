import { Dispatch, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  setShowLoginModal: Dispatch<React.SetStateAction<boolean>>;
};

export default function RegisterModal({ isOpen, setIsOpen, setShowLoginModal }: Props) {
  const [user, setUser] = useState({
    full_name: '',
    alamat: '',
    jenis_kelamin: '',
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch('http://localhost:3000/api/v1/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    setIsLoading(false);

    const data = await res.json();

    // bad request
    if (res.status == 400) {
      setErrorMessage(data.message);
      return;
    }

    toast.success('Registration successful', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
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
          isOpen ? 'block' : 'hidden'
        } bg-white fixed  w-[500px] py-10 top-32 left-0 right-0 mx-auto z-10 rounded-lg`}
      >
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center">Register</h1>
          <p className="text-red-500 text-center text-sm">*{errorMessage}</p>
          <div className="flex flex-col max-w-sm mx-auto mt-3">
            <label htmlFor="fullname" className="text-lg">
              Fullname
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              onChange={e => setUser(prev => ({ ...prev, full_name: e.target.value }))}
              className="rounded-lg px-3 py-1 border-2 focus:outline-none focus:shadow focus:border-gray-300 transition"
            />
          </div>
          <div className="flex flex-col max-w-sm mx-auto mt-3">
            <label htmlFor="alamat" className="text-lg">
              Alamat
            </label>
            <input
              type="text"
              name="alamat"
              id="alamat"
              onChange={e => setUser(prev => ({ ...prev, alamat: e.target.value }))}
              className="rounded-lg px-3 py-1 border-2 focus:outline-none focus:shadow focus:border-gray-300 transition"
            />
          </div>
          <div className="flex flex-col max-w-sm mx-auto mt-3">
            <label htmlFor="jenis_kelamin" className="text-lg">
              Jenis Kelamin
            </label>
            <input
              type="text"
              name="jenis_kelamin"
              id="jenis_kelamin"
              onChange={e => setUser(prev => ({ ...prev, jenis_kelamin: e.target.value }))}
              className="rounded-lg px-3 py-1 border-2 focus:outline-none focus:shadow focus:border-gray-300 transition"
            />
          </div>
          <div className="flex flex-col max-w-sm mx-auto mt-3">
            <label htmlFor="username" className="text-lg">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={e => setUser(prev => ({ ...prev, username: e.target.value }))}
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
              onChange={e => setUser(prev => ({ ...prev, password: e.target.value }))}
              className="rounded-lg px-3 py-1 border-2 focus:outline-none focus:shadow focus:border-gray-300 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`block ${
              isLoading ? 'bg-gray-500' : 'bg-lime-700'
            } text-white font-bold max-w-sm w-full mx-auto rounded-lg mt-10 py-2 text-xl`}
          >
            SUBMIT
          </button>
          <p className="text-center text-gray-500 italic mt-3">
            Sudah memiliki akun?{' '}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => {
                setShowLoginModal(true);
                setIsOpen(false);
              }}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
