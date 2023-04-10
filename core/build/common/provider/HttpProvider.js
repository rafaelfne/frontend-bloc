var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import axios from "axios";
import { injectable } from "inversify";
let HttpProvider = class HttpProvider {
    constructor() {
        axios.defaults.baseURL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com";
    }
    get(url, config) {
        return axios.get(url, config);
    }
};
HttpProvider = __decorate([
    injectable(),
    __metadata("design:paramtypes", [])
], HttpProvider);
export { HttpProvider };
//# sourceMappingURL=HttpProvider.js.map