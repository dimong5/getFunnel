"use client";

import cn from "classnames";
import { PlayerVideo } from "../PlayerVideo";
import { PlayerDialogue } from "../PlayerDialogue";
import { Panel } from "../Panel";
import { Divider } from "../Divider";

import styles from "./Player.module.scss";
import { BottomBar } from "../BottomBar";
import { QuizChoices } from "../QuizChoices";
import { Suspense, useState } from "react";
import { ViewFunnelObjectType } from "@/gqty";
import { Input } from "../Input";

interface PlayerProps {
  containerClassName?: string;
  funnel: ViewFunnelObjectType;
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

const findFirstStep = (steps: ViewFunnelObjectType["steps"]) => {
  return steps.find((step) => step.first);
};

const findSecondStep = (steps: ViewFunnelObjectType["steps"]) => {
  const firstStep = findFirstStep(steps);
  if (!firstStep) return;
  const secondStep = findNextStep(steps, firstStep);
  return secondStep;
};

const findNextStep = (
  steps: ViewFunnelObjectType["steps"],
  currentStep: ViewFunnelObjectType["steps"][0]
) => {
  return steps.find((step) => step.id === currentStep.data.nextStep);
};

const getVideosFromFunnel = (funnel: ViewFunnelObjectType) => {
  const files = funnel.files;
  const videosData = files
    .filter((file) => file.__typename === "VideoObjectType")
    .map((video) => video.$on.VideoObjectType?.data);
};

export function Player(props: PlayerProps) {
  const { funnel } = props;
  const [steps, setSteps] = useState(funnel.steps);
  const [videos, setVideos] = useState();
  const [currentStep, setCurrentStep] = useState(() => findSecondStep(steps));
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
