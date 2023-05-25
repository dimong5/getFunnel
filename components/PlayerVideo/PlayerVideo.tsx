"use client";

import { useRef, useState } from "react";
import { PlayerBottomBar } from "../PlayerBottomBar";
import { PlayerTopBar } from "../PlayerTopBar";
import { Video } from "../Video";
import styles from "./PlayerVideo.module.scss";
import { PlayerContext } from "../Player/PlayerContext";

interface PlayerProps { }

export function PlayerVideo(props: PlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isPlay, setIsPlay] = useState(true);

    function playVideo() {
        videoRef?.current?.play();
        setIsPlay(true);
    }

    function pauseVideo() {
        videoRef?.current?.pause();
        setIsPlay(false);
    }

    function forwardVideo() {
        if (!videoRef?.current?.currentTime) return;
        videoRef.current.currentTime = videoRef?.current?.currentTime + 10;
    }

    function backwardVideo() {
        if (!videoRef?.current?.currentTime) return;
        videoRef.current.currentTime = videoRef?.current?.currentTime - 10;
    }

    return (
        <PlayerContext.Provider value={{ videoRef, isPlay, setIsPlay }}>
            <div className={styles.container}>
                <PlayerTopBar />
                <Video ref={videoRef} />
                <PlayerBottomBar
                    ref={videoRef}
                    isPlay={isPlay}
                    playVideo={playVideo}
                    pauseVideo={pauseVideo}
                    forwardVideo={forwardVideo}
                    backwardVideo={backwardVideo}
                />
            </div>
        </PlayerContext.Provider>
    );
}
