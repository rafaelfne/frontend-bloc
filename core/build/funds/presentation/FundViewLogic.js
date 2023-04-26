var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ViewLogic } from "../../common";
import { inject, injectable } from "inversify";
import { fundInitialState } from "./FundState";
let FundViewLogic = class FundViewLogic extends ViewLogic {
    constructor(getFundUsecase) {
        super(fundInitialState);
        this.getFundUsecase = getFundUsecase;
    }
    getFund(params) {
        return __awaiter(this, void 0, void 0, function* () {
            this.changeState({ kind: "LoadingFundState" });
            const result = yield this.getFundUsecase.execute(params);
            result.fold((error) => this.changeState(this.handleError(error)), (fund) => this.changeState({ kind: "LoadedFundState", fund }));
        });
    }
    handleError(error) {
        switch (error.kind) {
            case "UnexpectedError": {
                return {
                    kind: "ErrorFundState",
                    error: "Sorry, an error has ocurred. Please try later again"
                };
            }
        }
    }
};
FundViewLogic = __decorate([
    injectable(),
    __param(0, inject("IUsecase")),
    __metadata("design:paramtypes", [Object])
], FundViewLogic);
export { FundViewLogic };
//# sourceMappingURL=FundViewLogic.js.map