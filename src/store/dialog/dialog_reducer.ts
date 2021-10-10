import { reducify } from '../store_functions';
import { dialogActionT } from './dialog_action';
import { dialogEffectT } from './dialog_effect';

export type dialogReducerT = {
    reducer1: number;
};

export const dialogReducer: reducify<
    dialogActionT,
    dialogEffectT,
    dialogReducerT
> = {
    reducer1: _ => _,
};
