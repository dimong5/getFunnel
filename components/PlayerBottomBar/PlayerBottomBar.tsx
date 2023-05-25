import { forwardRef } from "react";
import cn from "classnames";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { Divider } from "../Divider";
import { PlayerProgressBar } from "../PlayerProgressBar";

import styles from "./PlayerBottomBar.module.scss";


interface PlayerBottomBarProps {
	playVideo: () => void;
	pauseVideo: () => void;
	forwardVideo: () => void;
	backwardVideo: () => void;
	isPlay: boolean;
	containerClassName?: string;
}

export const PlayerBottomBar = forwardRef<
	HTMLVideoElement,
	PlayerBottomBarProps
>(function PlayerBottomBar(props, ref) {
	const {
		containerClassName,
		isPlay = false,
		pauseVideo,
		forwardVideo,
		playVideo,
		backwardVideo,
	} = props;

	const containerClasses = cn(styles.container, containerClassName);

	const fade = useSpring({
		from: { opacity: 0 },
		to: { opacity: isPlay ? 1 : 0.3 },
		config: { duration: 300 },
	});

	return (
		<div className={containerClasses}>
			<div className={styles.controls}>
				<animated.div style={fade}>
					<Image
						className={styles.rotate}
						src="/icons/forward.svg"
						onClick={() => backwardVideo()}
						width={48}
						height={21}
						alt={"Back"}
					/>
				</animated.div>
				<Divider type="horizontal" />
				{!isPlay && (
					<Image
						onClick={() => playVideo()}
						src="/icons/play.svg"
						width={43}
						height={43}
						alt={"Arrow right"}
					/>
				)}
				{isPlay && (
					<Image
						onClick={() => pauseVideo()}
						src="/icons/pause.svg"
						width={43}
						height={43}
						alt={"Arrow right"}
					/>
				)}
				<Divider type="horizontal" />

				<animated.div style={fade}>
					<Image
						src="/icons/forward.svg"
						onClick={() => forwardVideo()}
						width={48}
						height={21}
						alt={"Forward"}
					/>
				</animated.div>
			</div>

			<PlayerProgressBar ref={ref} />
		</div>
	);
});
