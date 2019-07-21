import * as React from 'react';
import { EditorState } from '../states/EditorState';

interface OwnProps { }

type EditorProps = OwnProps & EditorState;

export const InstructionComponent: React.SFC<EditorProps> = (props: EditorProps) => {
    return (
        <div>
            <div className="field" >
                {
                    props.text.split("\n").map((x, idx) => <div key={idx}>{x}</div>)
                }
            </div>
        </div>
    );
};