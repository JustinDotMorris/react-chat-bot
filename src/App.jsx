import { useState } from "react";
import "./App.scss";
import "./assets/_reset.scss";
import UserInput from "./components/UserInput/UserInput.jsx";

const App = () => {
  const [userMessage, setUserMessage] = useState("");

  const userFirstMessage = (event) => {
    setUserMessage(event.target.value);
    console.log(userMessage);
  };

  return (
    <div className="App">
      <header>
        <h1>JSM APP</h1>
      </header>
      <main className="main">
        <p>This is main</p>
      </main>
      <div className="App__userInput">
        <UserInput userFirstMessage={userFirstMessage} />
      </div>
    </div>
  );
};

export default App;
