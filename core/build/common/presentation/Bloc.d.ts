type Subscription<S> = (state: S) => void;
export declare abstract class Bloc<S> {
    private internalState;
    private listeners;
    constructor(initialState: S);
    get state(): S;
    changeState(state: S): void;
    subscribe(listener: Subscription<S>): void;
    unsubscribe(listener: Subscription<S>): void;
}
export {};
