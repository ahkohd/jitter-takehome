import styled from "styled-components";

const CanvasContainer = styled.div`
  flex: 1;
  height: 100%;

  canvas {
    height: 100%;
    width: 100%;
  }
`;

const Canvas = (): JSX.Element => {
  return (
    <CanvasContainer className="editor__canvas_container">
      <canvas className="editor__canvas_container__canvas" />
    </CanvasContainer>
  );
};

export default Canvas;
