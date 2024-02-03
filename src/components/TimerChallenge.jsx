import { useState } from "react";
import { useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, challengeTimer }) {
  let timerRef = useRef();
  let dialogueRef = useRef();
  const [timeRemaining, setTimeRemaining] = useState(challengeTimer * 1000);
  const timerIsActive = timeRemaining && timeRemaining < challengeTimer * 1000;
  function handleStart() {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }
  function handleStop() {
    clearInterval(timerRef.current);
    dialogueRef.current.open();
  }

  function handleReset() {
    setTimeRemaining(challengeTimer * 1000);
  }

  if (timeRemaining <= 0) {
    clearInterval(timerRef.current);
    dialogueRef.current.open();
  }
  return (
    <>
      <ResultModal
        timer={timeRemaining}
        targetTime={challengeTimer}
        ref={dialogueRef}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{challengeTimer}</p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Time inactive"}
        </p>
      </section>
    </>
  );
}
