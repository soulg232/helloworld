import InputRow from "./input-row";
import { useState } from "react";

const App = () => {
  const [appName, setAppName] = useState("");
  const [appAge, setAppAge] = useState("");

  const handleNameChange = (name) => {
    setAppName(name);
  };

  const handleAgeChange = (age) => {
    setAppAge(age);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
