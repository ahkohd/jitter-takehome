import TransformsAnchor from "types/TransformsAnchor";

export const getVisualCenterPoint = (
  width: number,
  height: number,
  currentPivot: TransformsAnchor
) => {
  const [rHalfWidth, rHalfHeight] = [width / 2, height / 2];

  switch (currentPivot) {
    case TransformsAnchor.TopLeft:
      return [0, 0];
    case TransformsAnchor.TopRight:
      return [-width, 0];
    case TransformsAnchor.BottomLeft:
      return [0, -height];
    case TransformsAnchor.BottomRight:
      return [-width, -height];
    case TransformsAnchor.Center:
      return [-rHalfWidth, -rHalfHeight];
  }
};

export const getPivotPoint = (
  width: number,
  height: number,
  canvasWidth: number,
  canvasHeight: number,
  desiredPivot: TransformsAnchor
) => {
  const [cX, cY] = [canvasWidth / 2, canvasHeight / 2];
  const [rHalfWidth, rHalfHeight] = [width / 2, height / 2];

  switch (desiredPivot) {
    case TransformsAnchor.TopLeft:
      return [cX - rHalfWidth, cY - rHalfHeight];
    case TransformsAnchor.TopRight:
      return [cX + rHalfWidth, cY - rHalfHeight];
    case TransformsAnchor.BottomLeft:
      return [cX - rHalfWidth, cY + rHalfHeight];
    case TransformsAnchor.BottomRight:
      return [cX + rHalfWidth, cY + rHalfHeight];
    case TransformsAnchor.Center:
      return [cX, cY];
  }
};
