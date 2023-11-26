import { useContext, useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { NavLink } from 'react-router-dom';
import { UserCtx } from '../libs/Context';

export default function Nav() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [state, dispatch] = useContext(UserCtx);

  const navs = [
    { link: '/partai', text: 'Partai' },
    { link: '/paslon', text: 'Paslon' },
    { link: '/vote', text: 'Voting' },
  ];

  const handleLogout = () => {
    dispatch({
      type: 'USER_LOGOUT',
    });
  };

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
              <div className="ml-5 bg-gray-300 w-fit relative rounded-lg">
                <div
                  className="px-10 py-1 flex items-center justify-center font-bold cursor-pointer uppercase"
                  onClick={() => setShowDropdown(prev => !prev)}
                >
                  {state.user.username.substring(0, 1)}
                </div>

                {showDropdown && (
                  <>
                    <hr className="border border-black z-10 relative" />

                    <div className="absolute -bottom-10 rounded-b-lg bg-gray-300 shadow border-x border-b w-full right-0 left-0 px-10 pt-5 pb-1 flex items-center justify-center font-bold cursor-pointer">
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  </>
                )}
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
