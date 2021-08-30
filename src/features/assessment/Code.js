import './Code.css';
import { useRef } from "react";
import Editor from "@monaco-editor/react";
import { ClockLoader as Loader } from "react-spinners";
import example from "./example";
import {verifyAssessment, setLoading} from '../../store/assessment/action';
import {UseAssessment} from '../../store/assessment/state';

const Code = () => {

    const editorRef = useRef(null);
    const [state, dispatch] = UseAssessment();

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
        handleEditorChange(editorRef.current.getValue());
    };

    const handleEditorChange = async (value, event) => {
        await verifyAssessment(dispatch, {type: 'code', data: value});
        setLoading(dispatch, false);
    }

    return (
        <div className="App has-full-height scrollable">
            <Editor
                height="calc(100% - 19px)" // By default, it fully fits with its parent
                theme={'vs-dark'}
                language={'javascript'}
                loading={<Loader />}
                value={example["javascript"]}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
            />
        </div>
    );
};

export default Code;
