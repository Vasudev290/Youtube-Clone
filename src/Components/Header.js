
import { Menu, UserRound } from 'lucide-react'; 
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../Slices/appSlice';

const Header = () => {

    //Dispatch Hook
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

  return (
    <div className="flex items-center justify-between p-4 px-6 m-2 bg-white rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <Menu className="h-6 w-6 cursor-pointer text-gray-700 hover:text-gray-900" onClick={toggleMenuHandler}/>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="youtube-logo"
          className="h-5 sm:h-6 md:h-7" 
        />
      </div>
      <div className="flex items-center flex-grow mx-4 max-w-md"> 
        <input
          type="text"
          placeholder="Search"
          className="flex-grow p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm sm:text-base" 
        />
        <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200 focus:outline-none flex items-center justify-center">
          Search
        </button>
      </div>
      <div className="flex items-center">
        <UserRound className="h-7 w-7 cursor-pointer text-blue-600 hover:text-blue-700" />
      </div>
    </div>
  );
};

export default Header;
