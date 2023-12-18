import Button from "./components/Button";
import FormText from "./components/FormText";
import "./App.css";
import { Stack } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = () => {
    if (username === "admin" && password === "admin") {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div className="App">
      <Stack>
        <FormText
          label="Username"
          controlId="inputUsername"
          helpText="Enter your username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormText
          label="Password"
          controlId="inputPassword"
          helpText="Enter your password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Submit" onClick={handleButtonClick} />
      </Stack>
    </div>
  );
}

export default App;
