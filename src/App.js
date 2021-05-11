import "./App.css";
import { GameMetaData, MemoryGame, Messages } from "./components";
import CommerceIQLogo from "./assets/ciq-logo.svg";

function App() {
  return (
    <div className="container">
      <div className="logo-wrapper">
        <img src={CommerceIQLogo} alt="Commerce IQ logo" />
      </div>
      <GameMetaData />
      <MemoryGame />
      <Messages />
    </div>
  );
}

export default App;
