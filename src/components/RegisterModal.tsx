import { Dispatch } from 'react';

export default function RegisterModal({
  isOpen,
  setIsOpen,
  setShowLoginModal,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  setShowLoginModal: Dispatch<React.SetStateAction<boolean>>;
}) {
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
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <div className="flex flex-col max-w-sm mx-auto mt-3">
          <label htmlFor="fullname" className="text-lg">
            Fullname
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
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
            className="rounded-lg px-3 py-1 border-2 focus:outline-none focus:shadow focus:border-gray-300 transition"
          />
        </div>

        <button className="block bg-lime-700 text-white font-bold max-w-sm w-full mx-auto rounded-lg mt-10 py-2 text-xl">
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
      </div>
    </>
  );
}
