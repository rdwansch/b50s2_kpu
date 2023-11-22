import { useContext, useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { NavLink } from 'react-router-dom';
import { UserCtx } from '../libs/Context';

export default function Nav() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [state] = useContext(UserCtx);

  const navs = [
    { link: '/partai', text: 'Partai' },
    { link: '/paslon', text: 'Paslon' },
    { link: '/vote', text: 'Voting' },
  ];

  return (
    <>
      <div className="bg-black">
        <nav className="my-container flex items-center justify-between mx-auto py-2">
          <div className="flex items-center gap-3">
            <div className="text-white bg-red-500 p-2 w-fit rounded-full">DU</div>
            <h1 className="text-white font-bold uppercase">Pemilu DumbWays.ID</h1>
          </div>
          <div className="flex gap-5 items-center">
            {navs.map(item => (
              <NavLink
                key={item.link}
                to={item.link}
                className={({ isActive }) =>
                  [
                    isActive
                      ? 'text-white after:w-3/4 after:absolute after:-bottom-1 after:left-0 after:right-0 relative after:rounded-full after:h-0.5 after:bg-gray-200 '
                      : 'text-gray-400',
                    'flex items-center gap-2',
                  ].join(' ')
                }
              >
                {item.text}
                {/* {idx !== 2 && <span className="w-0.5 h-5 bg-white"></span>} */}
              </NavLink>
            ))}

            {state.isLogin ? (
              <div className="bg-gray-300 px-4 py-1 flex items-center justify-center rounded-lg font-bold cursor-pointer ml-5">
                {state.user.username.substring(0, 1)}
              </div>
            ) : (
              <div
                className="bg-gray-300 px-4 py-1 flex items-center justify-center rounded-lg font-bold cursor-pointer ml-5"
                onClick={() => setShowLoginModal(prev => !prev)}
              >
                Login
              </div>
            )}
          </div>
        </nav>
      </div>

      <LoginModal isOpen={showLoginModal} setIsOpen={setShowLoginModal} setShowRegisterModal={setShowRegisterModal} />
      <RegisterModal isOpen={showRegisterModal} setIsOpen={setShowRegisterModal} setShowLoginModal={setShowLoginModal} />
    </>
  );
}
