import './App.css';

function App() {
  return (
    <div className="app has-text-white has-background-dark">
        <div className="columns is-gapless">
            <div className="column">
                <p className="bd-notification is-info is-size-4 has-text-centered has-text-bold">1h 40 min</p>
                <div className="columns is-desktop">
                    <div className="column">
                        <div className="column">
                            <p className="bd-notification is-info is-size-5 has-text-left has-text-bold">Task</p>
                        </div>
                        <div className="column">
                            <p className="bd-notification is-info">Hola este es un ejercicio</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="column">
                            <p className="bd-notification is-info is-size-5 has-text-left has-text-bold">Solution Javascript(Node.js 8.9.4)</p>
                        </div>
                        <div className="column">
                            <textarea className="textarea is-large" placeholder="e.g. Hello world">
                                import React from "react";
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
