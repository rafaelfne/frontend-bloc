import { inject, injectable } from "inversify";
import { Either, IHttpProvider, TYPES } from "../../common";
import { IUnexpectedError } from "../../common/domain/DataError";
import { IFund } from "../domain/entity";
import { GetFundParams, IFundsRepository } from "../domain/repository";
import { parseFund } from "./parse/ParseFund";

@injectable()
export class FundsRepository implements IFundsRepository {
  @inject(TYPES.IHttpProvider) private httpProvider!: IHttpProvider;
  getFundByName(params: GetFundParams): Promise<Either<IUnexpectedError,IFund>> {
    return new Promise((resolve) => {
      this.httpProvider.get<IFund>(`/funds/${params.name}`)
      .then((response) => {
        resolve(Either.right(parseFund(response.data)));
      })
      .catch((error) => {
        resolve(Either.left({ kind: "UnexpectedError", error }));
      });
    });
  }
}
