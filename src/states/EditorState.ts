import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { editorActions } from '../actions/editorActions';

export interface EditorState {
    text: string;
}

const initialState: EditorState = {
    text: '',
};

export const editorReducer = reducerWithInitialState(initialState)
    .case(editorActions.updateText, (state, text) => {
        return Object.assign({}, state, { text });
    });
