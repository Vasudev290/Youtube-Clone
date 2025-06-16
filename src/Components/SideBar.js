import React from 'react';
import { useSelector } from 'react-redux'; 
import {
  Home,
  Compass, 
  Video,
  PlaySquare, 
  Clock, 
  Music,
  Bike, 
  Gamepad2, 
  Film, 
} from 'lucide-react'; 
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const mainMenuItems = [
    { name: 'Home', icon: Home, path: "/"},
    { name: 'Shorts', icon: Compass, path: "/shorts" }, 
    { name: 'Videos', icon: Video, path: "/videos" },
    { name: 'Live', icon: PlaySquare, path: "/live" },
  ];

  const subscriptionItems = [
    { name: 'Music', icon: Music, path: "/music" },
    { name: 'Sports', icon: Bike, path: "sports" }, 
    { name: 'Gaming', icon: Gamepad2, path: "/gaming" },
    { name: 'Movies', icon: Film, path: "/movies" },
  ];

  const watchLaterItems = [
    { name: 'Watch Later', icon: Clock, path: "/watch-later" },
    { name: 'Music', icon: Music, path: "/music" },
    { name: 'Sports', icon: Bike, path: "/sports" },
    { name: 'Gaming', icon: Gamepad2, path:"/gaming" },
    { name: 'Movies', icon: Film, path: "movies" },
  ];

  if (!isMenuOpen) return null;

  return (
    <div className="p-4 md:p-5 shadow-lg bg-white overflow-y-auto h-full w-56 md:w-64 lg:w-72 flex-shrink-0 rounded-r-lg">
      <ul className="mb-6">
        {mainMenuItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-800 text-base md:text-lg transition-colors duration-200"
          >
            <Link to={item.path} className="flex items-center w-full cursor-pointer">
              <item.icon className="mr-4 h-5 w-5 md:h-6 md:w-6 text-gray-600" />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <hr className="border-t border-gray-200 my-4" />
      <h1 className="font-bold text-lg md:text-xl pt-2 pb-3 text-gray-900">Subscriptions</h1>
      <ul className="mb-6">
        {subscriptionItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-800 text-base md:text-lg transition-colors duration-200"
          >
            <item.icon className="mr-4 h-5 w-5 md:h-6 md:w-6 text-gray-600" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <hr className="border-t border-gray-200 my-4" />
      <h1 className="font-bold text-lg md:text-xl pt-2 pb-3 text-gray-900">Watch Later</h1>
      <ul>
        {watchLaterItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-800 text-base md:text-lg transition-colors duration-200"
          >
            <item.icon className="mr-4 h-5 w-5 md:h-6 md:w-6 text-gray-600" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
