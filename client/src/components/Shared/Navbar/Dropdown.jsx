import { AiOutlineMenu } from 'react-icons/ai';
import { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import placeholder from '../../../assets/images/placeholder.jpg'

const Dropdown = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
          AirCNC your home
        </div>
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <img src={user && user.photoURL ? user.photoURL : placeholder} alt="" width={30} height={30} className='rounded-full' />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-16 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              onClick={() => setIsOpen(false)}
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>

            {user ? (
              <div
                onClick={logOut}
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
              >
                Logout
              </div>
            ) : (
              <>
                <Link
                  to='/login'
                  onClick={()=>setIsOpen(false)}
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/sign-up'
                  onClick={()=>setIsOpen(false)}
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
