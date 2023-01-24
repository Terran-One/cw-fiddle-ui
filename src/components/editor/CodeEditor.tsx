import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const extensions = [javascript({ jsx: true })];

export const CodeEditor = () => {
  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    console.log("value:", value);
  }, []);
  return (
    <CodeMirror
      height="100%"
      value="console.log('hello world!');"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
};
