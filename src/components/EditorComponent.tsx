import * as React from 'react';
import { EditorState } from '../states/EditorState';
import { EditorActions } from '../containers/EditorContainer';

interface OwnProps { }

type EditorProps = OwnProps & EditorState & EditorActions;

export const EditorComponent: React.SFC<EditorProps> = (props: EditorProps) => {
  return (
    <div>
      <div className="field" >
        <textarea
          value={props.text}
          onChange={(e) => props.updateText(e.target.value)}>
        </textarea>
      </div>
    </div>
  );
};