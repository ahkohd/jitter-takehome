import { RefObject, useCallback, useEffect, useRef } from "react";
import TransformsAnchor from "types/TransformsAnchor";
import { getPivotPoint, getVisualCenterPoint } from "utils/canvas";

interface useDrawRectangleOptions {
  color: string;
  height: number;
  width: number;
  transformsAnchor: TransformsAnchor;
  animation?: {
    duration: number;
    animate(ctx: CanvasRenderingContext2D): void;
  };
  canvasRef: RefObject<HTMLCanvasElement>;
}

export const useDrawRectangle = ({
  color,
  width,
  height,
  animation,
  transformsAnchor,
  canvasRef,
}: useDrawRectangleOptions) => {
  const animationRef = useRef<number>();
  const timer = useRef<number>(0);

  const drawOnEachFrame = useCallback(() => {
    if (canvasRef.current) {
      const { width: cW, height: cH } = canvasRef.current;
      const ctx = canvasRef.current.getContext("2d")!;

      // reset transforms & clear canvas
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, cW, cH);

      const [x, y] = getPivotPoint(width, height, cW, cH, transformsAnchor);

      // set pivot point
      ctx.translate(x, y);

      // play user defined animation
      if (animation) animation.animate(ctx);

      // get the visual center point relative to the pivot point
      const [rX, rY] = getVisualCenterPoint(width, height, transformsAnchor);

      // draw the rectangle at the visual center point
      ctx.fillStyle = color;
      ctx.fillRect(rX, rY, width, height);
    }

    // decide if to stop or continue animation
    if (new Date().getSeconds() <= timer.current) {
      animationRef.current = requestAnimationFrame(drawOnEachFrame);
    } else {
      cancelAnimationFrame(animationRef.current!);
    }
  }, [animation, canvasRef, color, height, transformsAnchor, width]);

  useEffect(() => {
    if (animation) {
      timer.current = new Date().getSeconds() + animation.duration;
    }

    animationRef.current = requestAnimationFrame(drawOnEachFrame);

    return () => {
      cancelAnimationFrame(animationRef.current!);
    };
  }, [drawOnEachFrame, animation]);
};
