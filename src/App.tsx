import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button children="Hello World" onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
