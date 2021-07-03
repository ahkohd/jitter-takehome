import styled from "styled-components";
import TransformBox from "./TransformBox";

const ControlPanel = () => {
  return (
    <Panel className="editor__control_panels_group">
      <div className="editor__control_panels_group__panel">
        <p className="editor__control_panels_group__panel__label mb-20">
          Pick a point to rotate the rectangle on the left
        </p>
        <TransformBox className="mb-20" width="150px" height="150px" />
      </div>
    </Panel>
  );
};

export default ControlPanel;

const Panel = styled.div`
  height: 100%;
  display: flex;
  place-content: center;
  place-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 20px;

  .editor__control_panels_group__panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    background: var(--control-panel-bg-color);
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);

    width: 280px;
    min-width: 280px;
    max-width: 280px;
    padding: 15px;

    &__label {
      font: caption;
      font-size: 0.95rem;
      text-align: center;
      cursor: default;

      max-width: 80%;
      margin: unset;
      padding: unset;
    }
  }
`;
