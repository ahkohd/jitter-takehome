import styled from "styled-components";
import ControlLabel from "./ControlLabel";
import ControlPanel from "./ControlPanel";
import TransformBox from "./TransformBox";

const ControlsGroup = () => {
  return (
    <Section className="editor__controls_group">
      <ControlPanel title="Transform" icon="anchor">
        <ControlLabel>
          Pick a point to rotate the rectangle on the left
        </ControlLabel>
        <TransformBox className="mb-40" width="150px" height="150px" />
      </ControlPanel>
    </Section>
  );
};

export default ControlsGroup;

const Section = styled.section`
  height: 100%;
  display: flex;
  place-content: center;
  place-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 20px;
`;
