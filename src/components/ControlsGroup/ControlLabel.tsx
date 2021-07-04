import { FC } from "react";

const ControlLabel: FC = ({ children }) => {
  return (
    <p className="editor__controls_group__panel__label mb-10">{children}</p>
  );
};

export default ControlLabel;
