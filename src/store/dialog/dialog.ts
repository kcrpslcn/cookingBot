import { createStore, store } from '../store_functions';
import { dialogAction as dialogActions, dialogActionT } from './dialog_action';
import { dialogEffect as dialogEffects, dialogEffectT } from './dialog_effect';
import {
    dialogReducer as dialogReducers,
    dialogReducerT,
} from './dialog_reducer';

export const $dialog: store<
    dialogActionT,
    dialogEffectT,
    dialogReducerT
> = createStore({
    actions: dialogActions,
    effects: dialogEffects,
    reducers: dialogReducers,
});
