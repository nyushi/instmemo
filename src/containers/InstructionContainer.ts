import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { editorActions } from '../actions/editorActions';
import { InstructionComponent } from '../components/InstructionComponent';

export interface EditorActions {
    updateText: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        updateText: (v: string) => dispatch(editorActions.updateText(v)),
    };
}

function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.editor);
}

export default connect(mapStateToProps, mapDispatchToProps)(InstructionComponent);
