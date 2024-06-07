import React, { useRef, useState, useEffect } from 'react';
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            videoElement.play();
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        videoElement.pause();
                        setIsPlaying(false);
                    } else {
                        if (isPlaying) {
                            videoElement.play();
                        }
                    }
                });
            },
            {
                threshold: 0.5, // Adjust this value as needed
            }
        );

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, [isPlaying]);

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
                src="https://organicco.uk/video/Organicco%20presentation-1222.mp4"
                width="90%"
                height="auto"
                onPlay={handlePlay}
                controls
                autoPlay
                muted // Mute the video to allow autoplay
            />
        </div>
    );
};

export default VideoPlayer;
