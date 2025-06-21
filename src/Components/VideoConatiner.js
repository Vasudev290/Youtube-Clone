import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API_URL } from "../utils/constents";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoConatiner = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  useEffect(() => {
    getYouTubeVideos();
  }, []);

  const getYouTubeVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API_URL);
      const jsonData = await data.json();
      //console.log("YouTube API Response:", jsonData);

      if (jsonData && jsonData.items && Array.isArray(jsonData.items)) {
        setVideos(jsonData.items);
      } else {
        console.warn("API response does not contain 'items' array:", jsonData);
        setVideos([]);
      }
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      setVideos([]);
    }
  };

  if (videos.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <p className="text-gray-500">Loading videos...</p>
      </div>
    );
  }

  const gridClasses = isMenuOpen
    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
  return (
    // Apply dynamic grid classes and consistent padding
    <div className={`p-4 gap-4 grid ${gridClasses}`}>
      {videos.map((video) => (
        <Link key={video.id.videoId || video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoConatiner;
