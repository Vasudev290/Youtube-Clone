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

const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const mainMenuItems = [
    { name: 'Home', icon: Home },
    { name: 'Shorts', icon: Compass }, 
    { name: 'Videos', icon: Video },
    { name: 'Live', icon: PlaySquare },
  ];

  const subscriptionItems = [
    { name: 'Music', icon: Music },
    { name: 'Sports', icon: Bike }, 
    { name: 'Gaming', icon: Gamepad2 },
    { name: 'Movies', icon: Film },
  ];

  const watchLaterItems = [
    { name: 'Watch Later', icon: Clock },
    { name: 'Music', icon: Music },
    { name: 'Sports', icon: Bike },
    { name: 'Gaming', icon: Gamepad2 },
    { name: 'Movies', icon: Film },
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
            <item.icon className="mr-4 h-5 w-5 md:h-6 md:w-6 text-gray-600" />
            <span>{item.name}</span>
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
