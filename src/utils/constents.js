const GOOGLE_API_KEY = "AIzaSyDyjYREhiFXGO888prMkvgrYxVUDeRx6rk";

export const YOUTUBE_VIDEO_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
