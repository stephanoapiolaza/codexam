import React from 'react';
import { Resizable } from "re-resizable";
import './App.css';
import Menu from './Menu';
import Footer from "./Footer";
import Code from "./Code";
import Task from "./Task";
import Clock from "./Clock";
import {AssessmentState} from '../../store/assessment/state';
import Render from "./Render";

function App() {
    const [width, setWidth] = React.useState('100%');
    const [height, setHeight] = React.useState('100%');
    return (
      <AssessmentState>
          <div className="app">
              <div className="columns is-gapless">
                  <div className="column is-narrow">
                      <div className="column is-paddingless has-full-height">
                          <Menu />
                      </div>
                  </div>
                  <div className="column has-text-bold is-size-6 has-text-white has-background-black-strong-4">
                      <div className="column is-paddingless">
                          <div className="column has-text-centered">
                              <Clock />
                          </div>
                          <div className="column">
                              <div className="columns has-background-black-strong-2">
                                  <div className="column has-border-black">
                                      <p className="bd-notification is-info is-size-5 has-text-left has-text-bold has-text-white">Task</p>
                                  </div>
                                  <div className="column has-text-white has-border-black">
                                      <p className="bd-notification is-info is-size-5 has-text-left has-text-bold">Solution Javascript(Node.js 8.9.4)</p>
                                  </div>
                              </div>
                              <div className="columns has-border-black">
                                  <div className="column is-paddingless pl-3 pr-3 pt-3 has-background-black-strong-2 has-r-border-black">
                                      <Task />
                                  </div>
                                  <div className="column is-paddingless has-background-black-strong-5">
                                      <div className="column has-height-4 is-paddingless has-b-border-black">
                                          <Resizable
                                              size={{ width, height }}
                                              onResizeStop={(e, direction, ref, d) => {
                                                  if(direction === 'right' && d.width < 0) return;
                                                  if(direction === 'top') return;
                                                  if(direction === 'bottom') return;
                                                  setWidth(width + d.width);
                                                  setHeight(height + d.height);
                                              }}
                                          >
                                              <Code />
                                          </Resizable>
                                      </div>
                                      <div className="column has-full-height is-paddingless">
                                          <div className="column is-paddingless has-full-height">
                                              <div className="column is-paddingless">
                                                  <div className="tabs is-small">
                                                      <ul>
                                                          <li className="is-active"><a className="has-text-white">Preview</a></li>
                                                          <li><a>Test Output</a></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                              <div className="column is-paddingless has-full-height">
                                                  <Resizable
                                                      size={{ width, height }}
                                                      onResizeStop={(e, direction, ref, d) => {
                                                          if(direction === 'right' && d.width < 0) return;
                                                          if(direction === 'bottom') return;
                                                          setWidth(width + d.width);
                                                          setHeight(height + d.height);
                                                      }}
                                                  >
                                                      <Render />
                                                  </Resizable>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <Footer/>
          </div>
      </AssessmentState>
  );
}

export default App;
