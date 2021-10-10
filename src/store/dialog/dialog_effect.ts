import { effectify } from '../store_functions';
import { dialogActionT } from './dialog_action';
import { dialogReducerT } from './dialog_reducer';

export type dialogEffectT = {
    effect1: number;
};

export const dialogEffect: effectify<
    dialogActionT,
    dialogEffectT,
    dialogReducerT
> = {
    effect1: _ => _,
};
