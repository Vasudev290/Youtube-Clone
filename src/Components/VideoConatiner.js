import { useEffect } from "react";
import { YOUTUBE_VIDEO_API_URL } from "../utils/constents";

const VideoConatiner = () => {
  useEffect(() => {
    getYouTubeVideos();
  }, []);

  const getYouTubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API_URL);
    const jsonData = await data.json();
    console.log(jsonData)
  };

  return <div>VideoConatiner</div>;
};

export default VideoConatiner;
