import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timer, onReset },
  ref
) {
  const timeRemaining = (timer / 1000).toFixed(2);
  const userLost = timer <= 0;
  const dialogRef = useRef();
  const score = Math.round(1 - (timer / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialogRef} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{timeRemaining} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
