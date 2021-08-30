/* eslint-disable */
const rTabs = (str) => str.trim().replace(/^ {4}/gm, "");

const examples = {
    javascript: rTabs(`
    // @monaco-editor/react is Monaco editor wrapper for painless integration with React
    // applications without need of webpack (or other module bundler)
    // configuration files.
    
    import logo from "./logo.svg";
    import "./App.css";
    
    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hola Mundo desde Frontend React
            </a>
          </header>
        </div>
      );
    }
    
    export default App;
  `)
};

export default examples;