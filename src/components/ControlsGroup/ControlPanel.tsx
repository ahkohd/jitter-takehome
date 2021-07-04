import { FC, ReactNode } from "react";
import Icon from "components/Icon";
import styled from "styled-components";

interface ControlPanelProps {
  title: string;
  icon: string;
  children: ReactNode;
}

const ControlPanel: FC<ControlPanelProps> = ({
  title,
  icon,
  children,
}: ControlPanelProps) => {
  return (
    <Panel>
      <div className="editor__controls_group__panel">
        <div className="editor__controls_group__panel__header">
          <Icon
            className="editor__controls_group__panel__header__icon"
            id={icon}
            width="15px"
            height="15px"
          />{" "}
          {title}
        </div>
        {children}
      </div>
    </Panel>
  );
};

export default ControlPanel;

const Panel = styled.div`
  .editor__controls_group__panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    background: var(--control-panel-bg-color);
    border-radius: 10px;
    box-shadow: var(--preferred-shadow);

    width: 280px;
    min-width: 280px;
    max-width: 280px;

    &__header,
    &__label {
      cursor: default;
      user-select: none;

      font: caption;
      font-size: 0.9rem;
    }

    &__header {
      padding: 11px 15px;
      border-bottom: 1px solid var(--preferred-border-color);
      width: 100%;
      font-weight: 600;

      display: flex;
      align-items: center;

      &__icon {
        margin-right: 10px;
      }
    }

    &__label {
      color: var(--control-panel-fg-color);
      text-align: center;
      font-weight: 500;

      max-width: 80%;
      margin: unset;
      padding: 15px;
    }
  }
`;
