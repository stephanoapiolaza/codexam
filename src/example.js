/* eslint-disable */
const rTabs = (str) => str.trim().replace(/^ {4}/gm, "");

const examples = {
    javascript: rTabs(`
    // @monaco-editor/react is Monaco editor wrapper for painless integration with React
    // applications without need of webpack (or other module bundler)
    // configuration files.
    
    import React, { useState } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    import examples from "./examples";
    
    function App() {
      const [theme, setTheme] = useState("light");
      const [language, setLanguage] = useState("javascript");
      const [isEditorReady, setIsEditorReady] = useState(false);
    
      function handleEditorDidMount() {
        setIsEditorReady(true);
      }
    
      function toggleTheme() {
        setTheme(theme === "light" ? "vs-dark" : "light");
      }
    
      function toggleLanguage() {
        setLanguage(language === "javascript" ? "python" : "javascript");
      }
    
      return (
        <>
          <button onClick={toggleTheme} disabled={!isEditorReady}>
            Toggle theme
          </button>
          <button onClick={toggleLanguage} disabled={!isEditorReady}>
            Toggle language
          </button>
    
          <Editor
            height="90vh" // By default, it fully fits with its parent
            theme={theme}
            language={language}
            value={examples[language]}
            editorDidMount={handleEditorDidMount}
            loading={"Loading..."}
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);  
  `)
};

export default examples;