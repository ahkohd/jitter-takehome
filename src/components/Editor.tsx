import EditorContextProvider from "providers/EditorContextProvider";
import Canvas from "./Canvas";
import ControlPanel from "./ControlPanel/ControlPanel";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

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
