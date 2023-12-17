import Button  from "./components/Button";
import Container  from "./components/Container";

function App() {
  return (
    <div className="App">
      <Button children="Hello World" onClick={() => console.log("Clicked")} />
      <Container />
    </div>
  );
}

export default App;
