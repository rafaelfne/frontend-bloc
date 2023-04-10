export class Either {
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return this.value.kind === 'left';
    }
    isRight() {
        return this.value.kind === 'right';
    }
    fold(leftFn, rightFn) {
        switch (this.value.kind) {
            case 'left':
                return leftFn(this.value.leftValue);
            case 'right':
                return rightFn(this.value.rightValue);
        }
    }
    map(fn) {
        return this.flatMap((r) => Either.right(fn(r)));
    }
    flatMap(fn) {
        return this.fold((leftValue) => Either.left(leftValue), (rightValue) => fn(rightValue));
    }
    mapLeft(fn) {
        return this.flatMapLeft((l) => Either.left(fn(l)));
    }
    flatMapLeft(fn) {
        return this.fold((leftValue) => fn(leftValue), (rightValue) => Either.right(rightValue));
    }
    get(errorMessage) {
        return this.getOrThrow(errorMessage);
    }
    getOrThrow(errorMessage) {
        const throwFn = () => {
            throw Error(errorMessage
                ? errorMessage
                : 'An error has ocurred retrieving value: ' +
                    JSON.stringify(this.value));
        };
        return this.fold(() => throwFn(), (rightValue) => rightValue);
    }
    getLeft() {
        const throwFn = () => {
            throw Error('The value is right: ' + JSON.stringify(this.value));
        };
        return this.fold((leftValue) => leftValue, () => throwFn());
    }
    getOrElse(defaultValue) {
        return this.fold(() => defaultValue, (someValue) => someValue);
    }
    static left(value) {
        return new Either({ kind: 'left', leftValue: value });
    }
    static right(value) {
        return new Either({ kind: 'right', rightValue: value });
    }
}
//# sourceMappingURL=Either.js.map