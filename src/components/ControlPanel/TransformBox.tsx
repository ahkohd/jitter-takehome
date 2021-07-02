import { EditorContext } from "providers/EditorContextProvider";
import { useContext } from "react";
import styled from "styled-components";
import TransformsAnchor from "types/TransformsAnchor";
import TransformDial from "./TransformDial";

interface TransformBoxProps {
  width?: string | number;
  height?: string | number;
}

const TransformBox = ({ height, width }: TransformBoxProps): JSX.Element => {
  const [{ currentTransformsAnchor }, actions] = useContext(EditorContext);

  const handleChangeAnchor = (anchor: TransformsAnchor) => {
    actions.setTransformsAnchor(anchor);
  };

  return (
    <Box className="transform_box" style={{ width, height }}>
      <div className="transform_box__bg"></div>
      <TransformDial
        className="transform_box__dial transform_box__dial--top_left"
        isActive={currentTransformsAnchor === TransformsAnchor.TopLeft}
        onClick={() => handleChangeAnchor(TransformsAnchor.TopLeft)}
      />
      <TransformDial
        className="transform_box__dial transform_box__dial--top_right"
        isActive={currentTransformsAnchor === TransformsAnchor.TopRight}
        onClick={() => handleChangeAnchor(TransformsAnchor.TopRight)}
      />
      <TransformDial
        className="transform_box__dial transform_box__dial--bottom_left"
        isActive={currentTransformsAnchor === TransformsAnchor.BottomLeft}
        onClick={() => handleChangeAnchor(TransformsAnchor.BottomLeft)}
      />
      <TransformDial
        className="transform_box__dial transform_box__dial--bottom_right"
        isActive={currentTransformsAnchor === TransformsAnchor.BottomRight}
        onClick={() => handleChangeAnchor(TransformsAnchor.BottomRight)}
      />
      <TransformDial
        className="transform_box__dial transform_box__dial--center"
        isActive={currentTransformsAnchor === TransformsAnchor.Center}
        onClick={() => handleChangeAnchor(TransformsAnchor.Center)}
      />
    </Box>
  );
};

export default TransformBox;

TransformBox.defaultProps = {
  width: "200px",
  height: "200px",
};

const Box = styled.div`
  position: relative;
  border: 1.5px dashed var(--transform-bg-border-color);

  .transform_box__bg {
    width: 50%;
    height: 50%;
    position: absolute;
    border: 1.5px dashed var(--transform-bg-border-color);
    border-left: none;
    border-top: none;
    top: 0;
    left: 0;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      left: 100%;
      top: 100%;
      border: 1.5px dashed var(--transform-bg-border-color);
      border-bottom: none;
      border-right: none;
      position: absolute;
    }
  }
`;
