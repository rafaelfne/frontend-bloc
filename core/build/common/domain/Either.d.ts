export declare class Either<L, R> {
    private readonly value;
    private constructor();
    isLeft(): boolean;
    isRight(): boolean;
    fold<T>(leftFn: (left: L) => T, rightFn: (right: R) => T): T;
    map<T>(fn: (r: R) => T): Either<L, T>;
    flatMap<T>(fn: (right: R) => Either<L, T>): Either<L, T>;
    mapLeft<T>(fn: (l: L) => T): Either<T, R>;
    flatMapLeft<T>(fn: (left: L) => Either<T, R>): Either<T, R>;
    get(errorMessage?: string): R;
    getOrThrow(errorMessage?: string): R;
    getLeft(): L;
    getOrElse(defaultValue: R): R;
    static left<L, R>(value: L): Either<L, R>;
    static right<L, R>(value: R): Either<L, R>;
}
