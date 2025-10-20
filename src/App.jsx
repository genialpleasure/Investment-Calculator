import { useState } from "react"
import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Resuls from "./Components/Results"

function App() {
  const[userInput, setUserInput ] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    });

    const inputIsValid = userInput.duration >= 1; 

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevInput => {
            return {
                ...prevInput,
                [inputIdentifier]: +newValue
            };
        });
    }

  return (
    <>
       <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a valid duration (minimum 1 year).</p>}
      {inputIsValid && <Resuls userInput={userInput}/>}
    </>

  )

}

export default App
