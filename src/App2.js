import InputRow from "./input-row";
import React, { useState, useEffect } from "react";

const SetLocalItem = (name, variable) => {
  useEffect(() => {
    localStorage.setItem(name, variable);
  }, [variable])
}


const App = () => {
  const [appName, setAppName] = useState(localStorage.getItem('name') || '');
  const [appAge, setAppAge] = useState(localStorage.getItem('age') || '');


  const handleAgeChange = (age) => {
    setAppAge(age);
  };  
  
  const handleNameChange = (name) => {
    setAppName(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  SetLocalItem('name', appName);
  SetLocalItem('age', appAge);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <InputRow name="Name" type="text" onChange={handleNameChange} />
        <InputRow name="Age" type="number" onChange={handleAgeChange} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Hello, {appName}!</p>
        <p>You are {appAge} years old.</p>
        {appAge >= 18 && <p>You may enter!</p>}
        {appAge < 18 && <p>You may not enter!</p>}
      </div>
    </>
  );
};

export default App;
