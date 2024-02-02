import { useState } from 'react';
import AddVideo from './component/AddVideo';
import VideoList from './component/VideoList';
import VideoPlayer from './component/VideoPlayer';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [tabs, setTabs] = useState("all");

  const handleAddVideo = (videoUrl) => {
    const newVideo = {
      id: Date.now(),
      title: `Video ${videos.length + 1}`,
      url: videoUrl,
      bookmarked: false,
    };
    setVideos((item) => [...item, newVideo]);
  };

  const handlePlayVideo = (videoId) => {
    const video = videos.find((video) => video.id === videoId);
    setSelectedVideo(video.url);
  };

  const handleBookmarkVideo = (videoId) => {
    const updatedVideos = videos.map((video) =>
      video.id === videoId ? { ...video, bookmarked: !video.bookmarked } : video
    );

    setVideos(updatedVideos);

    const updatedBookmarkedVideos = updatedVideos.filter((video) => video.bookmarked);
    setBookmarkedVideos(updatedBookmarkedVideos);
  };

  const handleCloseVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <>

      <div className="container mx-auto p-8 flex items-center	justify-center">

        <div >

          <h1 className="text-3xl font-bold my-6 text-center ">Samta AI Video Library</h1>
          <AddVideo onAddVideo={handleAddVideo} />

        </div>

      </div>

      {videos && Array.isArray(videos) && videos.length > 0 && (
        <>
          <div className='mt-5 lg:mx-52 mx-5'>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
              <li className="me-2">
                <span
                  style={{ cursor: "pointer" }}
                  aria-current="page"
                  className={tabs === "all" ? `inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active` : `inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50`}
                  onClick={() => {
                    setTabs("all")
                  }}
                >
                  ALL Video
                </span>
              </li>
              <li className="me-2">
                <span
                  style={{ cursor: "pointer" }}

                  onClick={() => {
                    setTabs("bookmark")
                  }}
                  className={tabs === "bookmark" ? `inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active` : `inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50`}
                >
                  Bookmark
                </span>
              </li>

            </ul>

          </div>
          <div className='lg:mx-52 mx-5 border p-5'>

            {tabs && tabs === "all" ? <>
              <VideoList
                videos={videos}
                onPlayVideo={handlePlayVideo}
                onBookmarkVideo={handleBookmarkVideo}
              />
            </> : <>
              <VideoList
                videos={bookmarkedVideos.length > 0 && bookmarkedVideos}
                onPlayVideo={handlePlayVideo}
                onBookmarkVideo={handleBookmarkVideo}
              />
            </>}

            {selectedVideo && (
              <VideoPlayer videoUrl={selectedVideo} onClose={handleCloseVideoPlayer} />
            )}
          </div>
        </>
      )}
    </>


  );
};

export default App;
