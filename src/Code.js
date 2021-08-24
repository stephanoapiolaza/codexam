import './Code.css';
import { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { ClockLoader as Loader } from "react-spinners";
import example from "./example";

export default function Code() {

    useEffect(() => {

    }, []);

    return (
        <div className="App has-full-height scrollable">
            <Editor
                height="calc(100% - 19px)" // By default, it fully fits with its parent
                theme={'vs-dark'}
                language={'javascript'}
                loading={<Loader />}
                value={example["javascript"]}
            />
        </div>
    );
}
