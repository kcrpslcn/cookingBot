import { actionify, store } from '../store_functions';
import { dialogEffectT } from './dialog_effect';
import { dialogReducerT } from './dialog_reducer';

export type dialogActionT = {
    action1: number;
    action2: number;
};

export const dialogAction: actionify<
    dialogActionT,
    dialogEffectT,
    dialogReducerT
> = {
    action1: (
        _: store<dialogActionT, dialogEffectT, dialogReducerT>,
    ): store<dialogActionT, dialogEffectT, dialogReducerT> => _,
    action2: _ => _,
};
