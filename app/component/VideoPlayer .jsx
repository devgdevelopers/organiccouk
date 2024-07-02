import React, { useRef, useState, useEffect } from 'react';
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import Image from 'next/image';

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
        <div className="relative w-[100%] h-[389px] rounded">
            <div onClick={togglePlay} className="relative video-container w-full h-full rounded z-[0]">
                {!isPlaying && (
                    <>
                        <PlayCircleIcon className="play-icon absolute z-[-10]" />
                        <Image src="/Group 603 (1).svg" alt="Background" width={100} height={100} className="absolute w-full h-full object-cover z-[-1]" unoptimized />
  
                    </>
                )}
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" backdrop="blur">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className=''>
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
