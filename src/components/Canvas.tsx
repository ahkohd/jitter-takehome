import { useContext, useRef } from "react";
import { EditorContext } from "providers/EditorContextProvider";
import styled from "styled-components";
import { useDrawRectangle } from "hooks/useDrawRectangle";
import pointer from "assets/pointer.svg";

const Canvas = (): JSX.Element => {
  const [{ currentTransformsAnchor: transformsAnchor }] =
    useContext(EditorContext);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angle = useRef<number>(0);

  useDrawRectangle({
    color: "red",
    height: 110,
    width: 210,
    transformsAnchor,
    animation: {
      duration: 3,
      animate(ctx) {
        ctx.rotate(angle.current);
        angle.current += 0.04;
      },
    },
    canvasRef,
  });

  return (
    <CanvasContainer className="editor__canvas_container">
      <canvas
        className="editor__canvas_container__canvas"
        ref={canvasRef}
        width="700"
        height="700"
      />
    </CanvasContainer>
  );
};

export default Canvas;

const CanvasContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background: var(--canvas-container-bg-color);
  place-content: center;
  place-items: center;
  overflow: scroll;
  scrollbar-width: none;
  cursor: url(${pointer}), auto;

  &::-webkit-scrollbar {
    display: none;
  }

  canvas {
    background: var(--light-bg-color);
  }
`;
