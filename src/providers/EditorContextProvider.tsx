import React, { createContext, Dispatch, FC, useState } from "react";

type EditorState = {};

interface EditorActions {}

export const EditorContext = createContext<[EditorState, EditorActions] | null>(
  null
);

const initialState = {};

const actions = (
  state: EditorState,
  setState: Dispatch<React.SetStateAction<EditorState>>
): EditorActions => ({
  increment() {
    //
  },
});

const EditorContextProvider: FC = (props): JSX.Element => {
  const [state, setState] = useState<EditorState>([initialState, actions]);

  return (
    <EditorContext.Provider value={[state, actions(state, setState)]}>
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
