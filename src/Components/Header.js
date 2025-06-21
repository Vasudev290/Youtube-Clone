import { Menu, UserRound, Search, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Slices/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API_URL } from "../utils/constents";
import { chacheResults } from "../Slices/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((state) => state.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchQuery.trim()) {
        setSuggestion([]);
        return;
      }

      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API_URL + searchQuery);
    const jsonData = await data.json();
    setSuggestion(jsonData[1]);
    dispatch(chacheResults({ [searchQuery]: jsonData[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="w-full px-4 py-2 shadow-md rounded-lg flex items-center justify-between gap-4">
      {/* Left Section */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <Menu
          className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer text-gray-700"
          onClick={toggleMenuHandler}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
          alt="YouTube"
          className="h-5 sm:h-6"
        />
      </div>

      {/* Mobile Search Box */}
      {showMobileSearch && (
        <div className="flex-grow sm:hidden relative">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              className="w-full p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button className="p-2 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200">
              <Search className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          {/* 👇 Keep this box inside the same relative div */}
          {showSuggestions && suggestion.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white shadow-lg rounded-md border z-50 max-h-64 overflow-y-auto">
              <ul>
                {suggestion.map((sugg, idx) => (
                  <li
                    key={idx}
                    onMouseDown={() => setSearchQuery(sugg)}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer gap-2 text-sm"
                  >
                    <Search className="h-4 w-4 text-gray-500" />
                    {sugg}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Desktop Search (Always visible) */}
      <div className="hidden sm:flex flex-grow max-w-xl mx-auto relative">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            className="w-full p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button className="p-2 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200">
            <Search className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        {/* 👇 Inside same relative block */}
        {showSuggestions && suggestion.length > 0 && (
          <div className="absolute left-0 right-0 top-full mt-1 bg-white shadow-lg rounded-md border z-50 max-h-64 overflow-y-auto">
            <ul>
              {suggestion.map((sugg, idx) => (
                <li
                  key={idx}
                  onMouseDown={() => setSearchQuery(sugg)}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer gap-2 text-sm"
                >
                  <Search className="h-4 w-4 text-gray-500" />
                  {sugg}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 flex-shrink-0">
        {/* Show search icon only on mobile when search bar is not visible */}
        {!showMobileSearch && (
          <Search
            className="h-5 w-5 cursor-pointer text-gray-700 sm:hidden"
            onClick={() => setShowMobileSearch(true)}
          />
        )}

        {/* Create Button */}
        <button className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 text-sm font-medium">
          <Plus className="h-4 w-4" />
          Create
        </button>

        {/* User Icon */}
        <UserRound className="h-6 w-6 text-blue-600 hover:text-blue-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
