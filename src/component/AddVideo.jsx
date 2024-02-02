import { useRef, useState } from 'react';

const AddVideo = ({ onAddVideo }) => {

    const inputRef = useRef(null)
    const handleUpload = () => {
        let file = inputRef.current.files[0]
        const acceptedTypes = ['video/mp4', 'video/webm', 'video/ogg']
        if (acceptedTypes.includes(file.type)) {

            onAddVideo(URL.createObjectURL(file))
        }
        inputRef.current.value = ""
    };

    return (
        <div className=" space-x-4">

            <input
                type="file"
                className="border p-2 rounded"
                ref={inputRef}
            />
            <button
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                onClick={handleUpload}
            >
                Add Video
            </button>

        </div>
    );
};

export default AddVideo;
