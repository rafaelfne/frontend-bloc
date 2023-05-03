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
import { inject, injectable } from "inversify";
import { Either } from "../../common";
import { parseFund } from "./parse/ParseFund";
let FundsRepository = class FundsRepository {
    constructor(httpProvider) {
        this.httpProvider = httpProvider;
    }
    getFundByName(params) {
        return new Promise((resolve) => {
            this.httpProvider.get(`/v1/funds/${params.name}`)
                .then((response) => __awaiter(this, void 0, void 0, function* () {
                const { data } = yield this.httpProvider.get(`/v1/funds/${params.name}/statistics`);
                resolve(Either.right(parseFund(response.data, data)));
            }))
                .catch((error) => {
                resolve(Either.left({ kind: "UnexpectedError", error }));
            });
        });
    }
};
FundsRepository = __decorate([
    injectable(),
    __param(0, inject("IHttpProvider")),
    __metadata("design:paramtypes", [Object])
], FundsRepository);
export { FundsRepository };
//# sourceMappingURL=FundsRepository.js.map