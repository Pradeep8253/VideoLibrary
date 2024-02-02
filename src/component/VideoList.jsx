import React from 'react';

const VideoList = ({ videos, onPlayVideo, onBookmarkVideo }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos && Array.isArray(videos) && videos.map((video) => (
                <div key={video.id} className="bg-white p-4 rounded shadow-md border">
                    <p className="text-lg font-medium mb-2">{video.title}</p>
                    <div className="flex justify-between">
                        <button
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
                            onClick={() => onPlayVideo(video.id)}
                        >
                            Play
                        </button>
                        <button
                            className={`px-3 py-1 rounded ${video.bookmarked
                                ? 'bg-yellow-500 text-white'
                                : 'bg-blue-300 text-gray-700'
                                } hover:bg-yellow-600 transition duration-300`}
                            onClick={() => onBookmarkVideo(video.id)}
                        >
                            {video.bookmarked ? 'Bookmarked' : 'Bookmark'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoList;
