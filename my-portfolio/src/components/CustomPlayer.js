import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaHeart, FaRegHeart, FaInstagram, FaSpinner } from 'react-icons/fa'; // Ensure react-icons is installed

const CustomPlayer = ({ url, thumbnail, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        // Initialize audioRef.current only once
        if (!audioRef.current) {
            audioRef.current = new Audio(url);
            audioRef.current.addEventListener('loadeddata', () => {
                setIsLoading(false); // Set loading to false when audio is ready
            });
        }

        const audio = audioRef.current;

        const updateProgress = () => {
            setProgress((audio.currentTime / audio.duration) * 100 || 0);
        };

        audio.addEventListener('timeupdate', updateProgress);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, [url]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    return (
        <div className="custom-player">
            {isLoading ? (
                <FaSpinner className="loading-icon" />
            ) : (
                <>
                    <img src={thumbnail} alt={title} className="thumbnail" />
                    <div className="song-info">
                        <span className="song-title">{title}</span>
                        {/* Additional song info here */}
                    </div>
                    <div className="controls">
                        <button onClick={togglePlayPause} className="play-pause-btn" disabled={isLoading}>
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>
                        {/* Other controls here */}
                    </div>
                </>
            )}
            <div className="progress-container" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default CustomPlayer;
