import { Link, NavLink } from 'react-router-dom';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import PrimaryBg_logo from '../data/primarybg_logo.png';

const Sidebar = () => {
  const { currentColor, activeMenu } = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" className="items-center gap-2 ml-11 mt-5 flex text-2xl font-semibold tracking-tight dark:text-white">
              <img class="" src={PrimaryBg_logo} alt='Profile'/><span className='text-teal-600'>Medops</span>
            </Link>
          </div>
          <div className="mt-5">
            {links.map((item) => (
              <div>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
