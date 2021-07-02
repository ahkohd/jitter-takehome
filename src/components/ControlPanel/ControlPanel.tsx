import styled from "styled-components";
import TransformBox from "./TransformBox";

const ControlPanel = () => {
  return (
    <Panel className="editor__control_panel">
      <div className="editor__control_panel__content">
        <p className="editor__control_panel__content__label">
          Pick a point to rotate the rectangle on the left
        </p>
        <TransformBox />
      </div>
    </Panel>
  );
};

export default ControlPanel;

const Panel = styled.div`
  width: 25vw;
  background: var(--control-panel-bg-color);
  border-left: 1px solid var(--control-panel-border-color);
  height: 100%;
  display: flex;
  place-content: center;
  place-items: center;

  .editor__control_panel__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;

    &__label {
      font-size: 1.3rem;
      text-align: center;
      max-width: 80%;
      padding-bottom: 20px;
    }
  }
`;
