const VideoCard = (props) => {
  const { info } = props;
  //console.log("VideoCard received info:", info);
  if (!info || !info.snippet) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm h-64 flex items-center justify-center text-gray-500">
        <p>Video data unavailable or loading...</p>
      </div>
    );
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const thumbnailUrl =
    thumbnails?.high?.url ||
    thumbnails?.medium?.url ||
    thumbnails?.default?.url ||
    "https://placehold.co/320x180/e0e0e0/ffffff?text=No+Image";

  const formatViewCount = (count) => {
    if (!count) return "0 views";
    const num = parseInt(count);
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M views";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K views";
    return num + " views";
  };

  return (
    <div className="p-1 m-2 shadow-lg rounded-lg transform transition-transform hover:scale-105 duration-300 cursor-pointer min-w-full">
      <img
        className="rounded-lg w-full h-full object-cover"
        src={thumbnailUrl}
        alt={title || "Video thumbnail"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/320x180/e0e0e0/ffffff?text=Image+Error";
        }}
      />
      <ul className="py-2">
        <li className="font-bold text-base line-clamp-2 mb-1">{title}</li>
        <li className="text-gray-600 text-sm">{channelTitle}</li>
        <li className="text-gray-600 text-sm">
          {statistics?.viewCount
            ? formatViewCount(statistics.viewCount)
            : "N/A views"}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
