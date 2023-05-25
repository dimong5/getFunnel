/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useRef, useEffect, forwardRef, useState, useLayoutEffect, useContext } from 'react';
import cn from 'classnames'

import styles from './Video.module.scss'
import Hls from 'hls.js';
import { PlayerContext } from '../Player/PlayerContext';

interface VideoProps {
	containerClassName?: string;
}

export const Video = forwardRef<HTMLVideoElement, VideoProps>(function Video(props, ref) {
	const { containerClassName } = props
	const [ended, setEnded] = useState(false)
	const { setIsPlay, isPlay } = useContext(PlayerContext);

	const [initializing, setInitializing] = useState(true)
	const currentRef = useRef<HTMLVideoElement>(null);
	const containerClasses = cn(styles.container, containerClassName)
	const hlsRef = useRef<Hls>();
	const [isBuffering, setIsBuffering] = useState(false);

	const videoRef = ref || currentRef

	useEffect(() => {
		if (videoRef && 'current' in videoRef && videoRef.current !== null && !initializing) {
			const handleWaiting = () => {
				setIsBuffering(true);
			};

			const handlePlaying = () => {
				setIsBuffering(false);
			};

			if (videoRef.current) {
				videoRef.current.addEventListener('waiting', handleWaiting);
				videoRef.current.addEventListener('playing', handlePlaying);
			}

			return () => {
				if (videoRef.current) {
					videoRef.current.removeEventListener('waiting', handleWaiting);
					videoRef.current.removeEventListener('playing', handlePlaying);
				}
			};
		}
	}, [videoRef, initializing]);

	useEffect(() => {
		if (videoRef && 'current' in videoRef && videoRef.current !== null) {
			videoRef.current.addEventListener("ended", () => {
				console.log("end of video");
				setIsPlay(false);
				setEnded(true);
			});
		}
	}, [videoRef]);

	useLayoutEffect(() => {
		const hls = new Hls();
		if (videoRef && 'current' in videoRef && videoRef.current !== null) {
			const video = videoRef.current;
			hlsRef.current = hls;
			hlsRef.current.loadSource('https://minio.app.sellandchill.com/processed-video/0afae824-dc12-42db-81e5-8e111eb2c529/34c38b71-a4f1-4dc4-a6a2-4fc4abaaf57d/1_wdawdawd.mp4/master.m3u8');
			hlsRef.current.attachMedia(video);
			hlsRef.current.on(Hls.Events.MEDIA_DETACHED, function () {
				console.log("video & hls.js detaching");
				setEnded(true);
			});

			hlsRef.current.on(Hls.Events.MANIFEST_PARSED, function () {
				setInitializing(false)
				video.play().catch((e) => {
					setIsPlay(false)
				})
			});
		}
		return () => {
			hls.detachMedia();
			hls.destroy();
		};

	}, [videoRef]);

	return (
		<div className={containerClasses}>
			{initializing && <div className={styles.preloader}><div className={styles.loader} /></div>}
			{isBuffering && <div className={styles.preloader}><div className={styles.buffer} /></div>}
			<video style={{ filter: ended && !isPlay ? "blur(2px)" : '' }} ref={videoRef} autoPlay />
		</div>
	)
})
