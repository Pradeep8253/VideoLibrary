import React from 'react';

const VideoPlayer = ({ videoUrl, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg">
                <div className="relative aspect-w-16 aspect-h-9">
                    <video className="w-[50vw] h-[60vh] object-cover" controls src={videoUrl}>
                    </video>

                </div>
                <button
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition duration-300"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>


                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
