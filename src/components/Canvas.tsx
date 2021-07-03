import { useCallback, useContext, useEffect, useRef } from "react";
import { EditorContext } from "providers/EditorContextProvider";
import styled from "styled-components";
import { getVisualCenterPoint, getPivotPoint } from "utils/canvas";

const Canvas = (): JSX.Element => {
  const [{ currentTransformsAnchor }] = useContext(EditorContext);
  const animationRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angle = useRef<number>(0);
  const animationDuration = useRef<number>(3);
  const timer = useRef<number>(0);

  const drawOnEachFrame = useCallback(() => {
    if (canvasRef.current) {
      const { width, height } = canvasRef.current;
      const ctx = canvasRef.current.getContext("2d")!;

      // reset transforms & clear canvas
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const r = { width: 210, height: 110 };
      const [x, y] = getPivotPoint(
        r.width,
        r.height,
        width,
        height,
        currentTransformsAnchor
      );

      // set pivot point
      ctx.translate(x, y);

      // rotate around pivot point
      ctx.rotate(angle.current);

      // get the visual center point relative to the pivot point
      const [rX, rY] = getVisualCenterPoint(
        r.width,
        r.height,
        currentTransformsAnchor
      );

      // draw the rectangle at the visual center point
      ctx.fillStyle = "red";
      ctx.fillRect(rX, rY, r.width, r.height);

      // increment rotation angle in radians
      angle.current += 0.04;
    }

    // decide if to stop or continue animation
    if (new Date().getSeconds() <= timer.current) {
      animationRef.current = requestAnimationFrame(drawOnEachFrame);
    } else {
      cancelAnimationFrame(animationRef.current!);
    }
  }, [currentTransformsAnchor]);

  useEffect(() => {
    timer.current = new Date().getSeconds() + animationDuration.current;
    animationRef.current = requestAnimationFrame(drawOnEachFrame);

    return () => {
      cancelAnimationFrame(animationRef.current!);
    };
  }, [currentTransformsAnchor, drawOnEachFrame]);

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

  &::-webkit-scrollbar {
    display: none;
  }

  canvas {
    background: white;
  }
`;
