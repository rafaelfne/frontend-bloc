var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, injectable } from "inversify";
import { Either, TYPES } from "../../common";
import { parseFund } from "./parse/ParseFund";
let FundsRepository = class FundsRepository {
    getFundByName(params) {
        return new Promise((resolve) => {
            this.httpProvider.get(`/funds/${params.name}`)
                .then((response) => {
                resolve(Either.right(parseFund(response.data)));
            })
                .catch((error) => {
                resolve(Either.left({ kind: "UnexpectedError", error }));
            });
        });
    }
};
__decorate([
    inject(TYPES.IHttpProvider),
    __metadata("design:type", Object)
], FundsRepository.prototype, "httpProvider", void 0);
FundsRepository = __decorate([
    injectable()
], FundsRepository);
export { FundsRepository };
//# sourceMappingURL=FundsRepository.js.map