import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity");
  const inputValue = useRef();
  function clickHandler() {
    setPlayerName(inputValue.current.value);
  }

  return (
    <section id="player">
      <h2>{`Welcome ${playerName}`}</h2>
      <p>
        <input type="text" ref={inputValue} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
