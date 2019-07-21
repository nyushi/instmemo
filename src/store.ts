import { createStore, combineReducers } from 'redux';
import { editorReducer, EditorState } from './states/EditorState';

export type AppState = {
    editor: EditorState
};

const store = createStore(
    combineReducers<AppState>({
        editor: editorReducer
    }),
);

export default store;
