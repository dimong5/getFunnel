'use client';

import cn from "classnames";

import { IChoice } from "../QuizChoices/QuizChoices";
import styles from "./QuizChoice.module.scss";
import Arrow from "../../public/icons/arrow-circle-right.svg";
interface QuizChoiceProps {
	containerClassName?: string;
	choice: IChoice;
}

export function QuizChoice(props: QuizChoiceProps) {
	const { containerClassName, choice } = props;
	const containerClasses = cn(styles.container, containerClassName);

	return (
		<div className={containerClasses}>
			<div>
				<h5 className={styles.title}>{choice.title}</h5>
				<div>
					{choice.substring && (
						<p className={styles.substring}>{choice.substring}</p>
					)}
				</div>
			</div>
			<div className={styles.icon}>
				<Arrow width={28} height={28} />
				{/* <Image
					className={styles.icon}
					src="/icons/arrow-circle-right.svg"
					width={28}
					height={28}
					alt={"Arrow right"}
				/> */}
			</div>
		</div>
	);
}
