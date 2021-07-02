import styled from "styled-components";

interface TransformDialProps {
  width?: string | number;
  height?: string | number;
  isActive?: boolean;
}

const TransformDial = styled.button<TransformDialProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  background-color: var(
    ${({ isActive }) =>
      isActive
        ? "--transform-dial-bg-active-color"
        : " --transform-dial-bg-color"}
  );
  outline: none;
  border: 5px solid var(--transform-dial-border-color);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  position: absolute;
  z-index: 1;

  &:hover {
    background: var(--transform-dial-hover-bg-color);
  }

  &.transform_box__dial {
    &--top_left {
      top: calc(-25px / 2);
      left: calc(-25px / 2);
    }

    &--top_right {
      top: calc(-25px / 2);
      right: calc(-25px / 2);
    }

    &--bottom_left {
      bottom: calc(-25px / 2);
      left: calc(-25px / 2);
    }

    &--bottom_right {
      bottom: calc(-25px / 2);
      right: calc(-25px / 2);
    }

    &--center {
      top: calc(50% - 25px / 2);
      right: calc(50% - 25px / 2);
    }
  }
`;

export default TransformDial;

TransformDial.defaultProps = {
  width: "25px",
  height: "25px",
  isActive: false,
};
