"use client";

import {
	forwardRef,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import cn from "classnames";

import styles from "./PlayerProgressBar.module.scss";
import { animated, useSpring } from "@react-spring/web";

interface PlayerProgressBarProps {
	containerClassName?: string;
}

export const PlayerProgressBar = forwardRef<
	HTMLVideoElement,
	PlayerProgressBarProps
>(function PlayerProgressBar(props, ref) {
	const [width, setWidth] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [buffered, setBuffered] = useState(0);

	const videoRef = ref as React.RefObject<HTMLVideoElement>;
	const { containerClassName } = props;

	const progressIndicatorRef = useRef<HTMLDivElement>(null);

	const progressInPixels = useMemo(() => {
		const duration = videoRef?.current?.duration;
		if (!currentTime || !duration) return 0;
		const progressInPercent = (currentTime / duration) * 100;
		const progressInPixels = (progressInPercent * width) / 100;
		return progressInPixels;
	}, [videoRef, width, currentTime]);

	const bufferedInPixels = useMemo(() => {
		const duration = videoRef?.current?.duration;
		if (!buffered || !duration) return 0;
		const bufferedInPercent = buffered;
		const bufferedInPixels = (bufferedInPercent * width) / 100;
		return bufferedInPixels;
	}, [videoRef, width, buffered]);

	useEffect(() => {
		if (!videoRef?.current) return;
		videoRef.current.addEventListener("timeupdate", () => {
			setCurrentTime(videoRef?.current?.currentTime || 0);
		});
	}, [videoRef, width]);

	useEffect(() => {
		const video = videoRef.current;
		if (video) {
			const handleProgress = () => {
				const bufferedTime = video?.buffered?.end(0);
				const duration = video.duration;
				const bufferedPercentage = (bufferedTime / duration) * 100;
				setBuffered(bufferedPercentage);
			};

			video.addEventListener('progress', handleProgress);

			return () => {
				video.removeEventListener('progress', handleProgress);
			};
		}
	}, [videoRef]);

	useEffect(() => {
		const progressIndicator = progressIndicatorRef.current;
		if (!progressIndicator) return;
		setWidth(progressIndicator.clientWidth);
	}, []);

	const containerClasses = cn(styles.progress, containerClassName);

	const fullIndicatorStyle = useSpring({
		width: `${progressInPixels}px`,
		borderRadius: width === progressInPixels ? undefined : "2px",
	})

	const fullIndicatorPreloadedStyle = useSpring({
		width: `${bufferedInPixels}px`,
		borderRadius: width === bufferedInPixels ? undefined : "2px",
	})

	const fullIndicatorCircleStyle = useSpring({
		left: `${progressInPixels}px`,
	})

	const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault();
		event.stopPropagation();
		const rect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - rect.left; // x position within the element.
		const percentage = x / rect.width;
		const duration = videoRef?.current?.duration;
		if (!duration) return;
		const newTime = duration * percentage;
		videoRef.current.currentTime = newTime;
	};

	return (
		<div className={containerClasses}>
			<div onClick={handleClick}
				ref={progressIndicatorRef} className={styles.progressIndicator}>
				<animated.div
					style={fullIndicatorPreloadedStyle}
					className={styles.progressIndicatorPreloaded}
				/>
				<animated.div
					style={fullIndicatorStyle}
					className={styles.progressIndicatorFull}
				>

					<animated.div
						style={fullIndicatorCircleStyle}
						className={styles.progressCircle}
					/>
				</animated.div>

			</div>
		</div>
	);
});
