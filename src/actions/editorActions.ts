import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const editorActions = {
    updateText: actionCreator<string>('ACTIONS_UPDATE_TEXT'),
};