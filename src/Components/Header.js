import { Menu, UserRound, Search} from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Slices/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API_URL } from "../utils/constents";

const Header = () => {
  //Dispatch Hook
  const dispatch = useDispatch();

  //local state variable
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  //useEffect for api call
  useEffect(() => {
    // Make an api call after ever key press
    // but if the diff b/w 2 api calls is < 200ms
    // decline the api call
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  //HAMBARGAR MENU TOGGLE
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  //Search Suggestions
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API_URL + searchQuery);
    const jsonData = await data.json();
    setSuggestion(jsonData[1]);
  };

 return (
    <div className="flex items-center justify-between p-4 px-6 m-2 bg-white rounded-lg shadow-md relative">
      {/* Left: Logo + Menu */}
      <div className="flex items-center space-x-4">
        <Menu
          className="h-6 w-6 cursor-pointer text-gray-700 hover:text-gray-900"
          onClick={toggleMenuHandler}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="youtube-logo"
          className="h-6 sm:h-7"
        />
      </div>

      {/* Middle: Search Input */}
      <div className="flex-grow max-w-xl mx-4 relative">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            className="flex-grow p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm sm:text-base w-full"
          />
          <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200 flex items-center justify-center">
            <Search className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestion.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <ul>
              {suggestion.map((sugg, idx) => (
                <li
                  key={idx}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm gap-3"
                  onMouseDown={() => setSearchQuery(sugg)}
                >
                  <Search className="h-4 w-4 text-gray-600" /> {sugg}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right: User Icon */}
      <div className="flex items-center">
        <UserRound className="h-7 w-7 cursor-pointer text-blue-600 hover:text-blue-700" />
      </div>
    </div>
  );
};

export default Header;