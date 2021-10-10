export type store<A, E, R> = {
    actions: actionify<A, E, R>;
    effects: effectify<A, E, R>;
    reducers: reducify<A, E, R>;
};

export type reducer<T, K, V> = (store: store<T, K, V>) => store<T, K, V>;
export type action<T, K, V> = (store: store<T, K, V>) => void;
export type effect<T, K, V> = (action: action<T, K, V>) => action<T, K, V>;

export type actionify<T, K, V> = {
    [Property in keyof T]: action<T, K, V>;
};

export type effectify<T, K, V> = {
    [Property in keyof K]: effect<T, K, V>;
};

export type reducify<T, K, V> = {
    [Property in keyof V]: reducer<T, K, V>;
};

export function createStore<T, K, V>({
    actions,
    effects,
    reducers,
}: store<T, K, V>): store<T, K, V> {
    return {
        actions: actions,
        effects: effects,
        reducers: reducers,
    };
}
