import cn from "classnames";
import { PlayerVideo } from "../PlayerVideo";
import { PlayerDialogue } from "../PlayerDialogue";
import { Panel } from "../Panel";
import { Divider } from "../Divider";
// import "react-spring-bottom-sheet/dist/style.css";

import styles from "./Player.module.scss";
import { BottomBar } from "../BottomBar";
// import { Suspense } from "react";
import { QuizChoices } from "../QuizChoices";
import { Suspense } from "react";

interface PlayerProps {
  containerClassName?: string;
}

const options = [
  { title: "Choose a coach", substring: "Which coach is right for you?" },
  { title: "Watch the tour of the gym" },
  { title: "Watch fitness tutorial. Now!" },
  {
    title: "Watch fitness tutorial. Now! Watch fitness tutorial. Now!",
    substring: "Which coach is right for you?",
  },
];

export function Player(props: PlayerProps) {
  const { containerClassName } = props;
  const containerClasses = cn(
    styles.panelContainer,
    containerClassName,
    styles.card
  );
  return (
    <Panel containerClassName={containerClasses}>
      <PlayerVideo />
      <Divider size={1} type="vertical" />
      <div className={styles.divider} />
      <div className="mobile-only">
        <Suspense fallback={<p>Loading...</p>}>
          <BottomBar>
            <PlayerDialogue title={"Send us your contact..."}>
              <QuizChoices choices={options} />
            </PlayerDialogue>
          </BottomBar>
        </Suspense>
      </div>
      <div className="non-mobile">
        <Suspense fallback={<p>Loading...</p>}>
          <PlayerDialogue title={"Send us your contact..."}>
            {/* <Input iconSrc="/icons/person.svg" placeholder="Name" />
          <Divider />
          <Input iconSrc="/icons/phone.svg" placeholder="Phone number" />
          <Divider />
          <Input iconSrc="/icons/email.svg" placeholder="Email" /> */}
            <QuizChoices choices={options} />
          </PlayerDialogue>
        </Suspense>
      </div>
      {/* <PlayerDialogue title={"What's the next step?"} >
        <QuizChoices choices={options} />
      </PlayerDialogue> */}
    </Panel>
  );
}
