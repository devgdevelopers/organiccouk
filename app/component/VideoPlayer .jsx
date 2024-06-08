import React, { useRef, useState, useEffect } from 'react';
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement && isPlaying) {
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
        if (isOpen) {
            onOpenChange(false);
            videoRef.current.pause();
        } else {
            onOpen();
        }
        setIsPlaying(!isOpen);
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
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" backdrop="blur">
                <ModalContent>
                    {(onClose) => (
                        <>
                           
                            <ModalBody >
                                <video
                                    ref={videoRef}
                                    className="react-player bg-none rounded-lg w-full z-20 mx-auto"
                                    src="https://organicco.uk/video/Organicco%20presentation-1222.mp4"
                                    width="100%"
                                    height="auto"
                                    onPlay={handlePlay}
                                    controls
                                    autoPlay
                                    muted // Mute the video to allow autoplay
                                />
                            </ModalBody>
                            
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default VideoPlayer;
