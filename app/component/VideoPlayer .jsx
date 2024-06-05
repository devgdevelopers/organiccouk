import React, { useRef, useState } from 'react';
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 11;
        }
    };

    return (
        <div className="relative w-[100%] lg:w-[50%]">
            <div onClick={togglePlay}>
                {!isPlaying && <PlayCircleIcon className="play-icon" />}
            </div>
            <video
                ref={videoRef}
                className="react-player bg-none rounded-lg my-20 w-full z-20 mx-auto"
                src="/assets/videoSec.mp4"
                width="90%"
                height="auto"
                onPlay={handlePlay}
                controls
            />
        </div>
    );
};

export default VideoPlayer;
