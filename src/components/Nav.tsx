import { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function Nav() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <div className="bg-black">
        <nav className="my-container flex items-center justify-between mx-auto py-2">
          <div className="flex items-center gap-3">
            <div className="text-white bg-red-500 p-2 w-fit rounded-full">DU</div>
            <h1 className="text-white font-bold uppercase">Pemilu DumbWays.ID</h1>
          </div>
          <div className="flex gap-2 items-center">
            <a href="" className="text-white">
              Partai
            </a>
            <span className="w-0.5 h-5 bg-white"></span>
            <a href="" className="text-white">
              Paslon
            </a>
            <span className="w-0.5 h-5 bg-white"></span>
            <a href="" className="text-white">
              Voting
            </a>
            <div
              className="bg-gray-300 px-4 py-1 flex items-center justify-center rounded-lg font-bold cursor-pointer"
              onClick={() => setShowLoginModal(prev => !prev)}
            >
              Login
            </div>
          </div>
        </nav>
      </div>

      <LoginModal isOpen={showLoginModal} setIsOpen={setShowLoginModal} setShowRegisterModal={setShowRegisterModal} />
      <RegisterModal isOpen={showRegisterModal} setIsOpen={setShowRegisterModal} setShowLoginModal={setShowLoginModal} />
    </>
  );
}
