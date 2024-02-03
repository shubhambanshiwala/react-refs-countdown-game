import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="EASY" challengeTimer={1} />
        <TimerChallenge title="NOT EASY" challengeTimer={5} />
        <TimerChallenge title="GETTING TOUGH" challengeTimer={10} />
        <TimerChallenge title="PROS ONLY" challengeTimer={15} />
      </div>
    </>
  );
}

export default App;
