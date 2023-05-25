import cn from "classnames";

import styles from "./Divider.module.scss";

interface DividerProps {
	containerClassName?: string;
	type?: "vertical" | "horizontal"
	size?: number
}

export function Divider(props: DividerProps) {
	const { containerClassName, type, size = 10 } = props;

	const containerClasses = cn(styles.container, containerClassName);

	return (
		<div
			className={containerClasses}
			style={{
				width: type ? size : undefined,
				height: type ? undefined : size,
			}}
		/>
	);
}
