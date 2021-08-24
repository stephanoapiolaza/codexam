import './Code.css';
import { useEffect, useRef } from "react";
import { basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";

export default function Code() {
    const editor = useRef();

    const myTheme = EditorView.baseTheme({
        "&.cm-editor": {
            backgroundColor: '#23241e',
            fontSize: '0.8rem'
        },
        ".cm-scroller": {
            fontFamily:'Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace'
        },
        ".cm-activeLine": {
            backgroundColor: 'transparent !important'
        },
        ".cm-gutters": {
            backgroundColor: 'transparent !important',
            borderRight: 'none !important'
        },
        ".cm-activeLineGutter": {
            backgroundColor: 'transparent !important'
        },
        ".cm-focused": {
            backgroundColor: 'yellow'
        }
    })

    useEffect(() => {
        const log = (event) => console.log(event);
        editor.current.addEventListener("input", log);

        const state = EditorState.create({
            doc: "<script>https://www.google.cl/</script>",
            extensions: [basicSetup, javascript(), myTheme]
        });
        const view = new EditorView({ state, parent: editor.current });
        return () => {
            view.destroy();
            editor.current.removeEventListener("input", log);
        };
    }, []);

    return (
        <div className="App has-full-height scrollable">
            <div ref={editor}></div>
        </div>
    );
}
