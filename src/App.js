import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing MUI</h1>
        <TextField
          id="outlined-basic"
          label="Enter text here:"
          variant="outlined"
          multiline
          rows={10}
        />
        <Button variant="contained">Click here!</Button>
      </header>
    </div>
  );
}

export default App;
