import EditorContextProvider from "providers/EditorContextProvider";
import Canvas from "./Canvas";
import ControlPanel from "./ControlPanel";

const Editor = () => {
  return (
    <EditorContextProvider>
      <Canvas />
      <ControlPanel />
    </EditorContextProvider>
  );
};

export default Editor;
