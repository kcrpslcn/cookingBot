import { $dialog } from './dialog/dialog';
import { dialogActionT } from './dialog/dialog_action';
import { dialogEffectT } from './dialog/dialog_effect';
import { dialogReducerT } from './dialog/dialog_reducer';
import { store } from './store_functions';

type _store = {
    dialog: store<dialogActionT, dialogEffectT, dialogReducerT>;
};

export const $store: _store = {
    dialog: $dialog,
};
