import './App.css';
import React from 'react';
import MarkdownPreviewer from './components/markdownPreviewer';
// import ReactDOM from 'react-dom';
// import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Processor</h1>
      </header>
      <body>
        <MarkdownPreviewer />
      </body>
    </div>
  );
}

export default App;
