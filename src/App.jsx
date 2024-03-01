import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInputs((oldInputs) => {
      const newInputs = { ...oldInputs, [name]: +value };
      return newInputs;
    });
  };

  return (
    <main>
      <Header />
      <UserInput userInputs={userInputs} onChange={handleChange} />
      {userInputs.duration < 1 && (
        <p className="center">Please enter a duration greater than 0.</p>
      )}
      <Results userInput={userInputs} />
    </main>
  );
}

export default App;
