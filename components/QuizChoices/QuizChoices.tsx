import cn from "classnames";
import { QuizChoice } from "../QuizChoice";
import { MapItems } from "../Map/MapItems";
import styles from "./QuizChoices.module.scss";
import { Divider } from "../Divider";

export interface IChoice {
  title: string;
  substring?: string;
}

interface QuizChoicesProps {
  containerClassName?: string;
  choices: IChoice[];
}

export function QuizChoices(props: QuizChoicesProps) {
  const { containerClassName, choices } = props;

  const containerClasses = cn(styles.container, containerClassName);

  const renderItems = (choice: IChoice, i: number) => {
    return (
      <>
        {i !== 0 && <Divider size={12} />}
        <QuizChoice choice={choice} />
      </>)
  };

  return (
    <div className={containerClasses}>
      <MapItems<IChoice>
        items={choices}
        renderItems={renderItems}
        keyExtractor={(choice: IChoice) => choice.title}
      />
    </div>
  );
}
