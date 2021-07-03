import styled from "styled-components";
import EditorContextProvider from "providers/EditorContextProvider";
import Canvas from "./Canvas";
import ControlPanel from "./ControlPanel/ControlPanel";

const Editor = () => {
  return (
    <EditorContextProvider>
      <Section className="editor">
        <Canvas />
        <ControlPanel />
      </Section>
    </EditorContextProvider>
  );
};

export default Editor;

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
