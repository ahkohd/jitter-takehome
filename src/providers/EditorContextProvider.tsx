import React, { createContext, Dispatch, FC, useState } from "react";
import TransformsAnchor from "types/TransformsAnchor";

type EditorState = {
  currentTransformsAnchor: TransformsAnchor;
};

interface EditorActions {
  setTransformsAnchor(newAnchor: TransformsAnchor): void;
}

const initialState: EditorState = {
  currentTransformsAnchor: TransformsAnchor.TopLeft,
};

const actions = (
  state: EditorState,
  setState: Dispatch<React.SetStateAction<EditorState>>
): EditorActions => ({
  setTransformsAnchor(newAnchor) {
    setState({ ...state, currentTransformsAnchor: newAnchor });
  },
});

export const EditorContext = createContext<[EditorState, EditorActions]>([
  initialState,
  actions(initialState, () => {
    //
  }),
]);

const EditorContextProvider: FC = (props): JSX.Element => {
  const [state, setState] = useState<EditorState>(initialState);

  return (
    <EditorContext.Provider value={[state, actions(state, setState)]}>
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
