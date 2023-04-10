var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { injectable } from "inversify";
let Bloc = class Bloc {
    constructor(initialState) {
        this.listeners = [];
        this.internalState = initialState;
    }
    get state() {
        return this.internalState;
    }
    changeState(state) {
        this.internalState = state;
        if (this.listeners.length > 0) {
            this.listeners.forEach((listener) => listener(this.state));
        }
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
    unsubscribe(listener) {
        const index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
};
Bloc = __decorate([
    injectable(),
    __metadata("design:paramtypes", [Object])
], Bloc);
export { Bloc };
//# sourceMappingURL=Bloc.js.map