import React, { useCallback, useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import Message from './components/Message';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = useCallback((inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }, []);
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <Message />}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
