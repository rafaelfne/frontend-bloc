import { DataError, Either, TYPES, IHttpProvider } from "../../common";
import { GetStockParams, IStockRepository, IStock } from "..";
import { injectable, inject } from "inversify";

const getStockParamsDefault: GetStockParams = {
  symbol: "",
  interval: "1mo",
  range: "1mo",
  region: "US"
};

@injectable()
export class StockRepository implements IStockRepository {
  @inject(TYPES.IHttpProvider) private httpProvider!: IHttpProvider;
  async getStock(params: GetStockParams): Promise<Either<DataError, IStock>> {
    return new Promise((resolve) => {
      params = { ...getStockParamsDefault, ...params };
      this.httpProvider.get<IStock>("/stock/v3/get-chart", {
        params,
        baseURL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com",
        headers: {
          "X-RapidAPI-Key": "b2b883bfa9mshebb441f45098064p181e55jsn19c03b45a8ec",
          "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
      })
      .then((response) => {
        resolve(Either.right(response.data));
      })
      .catch((error) => {
        resolve(Either.left({ kind: "UnexpectedError", error }));
      });
    });
  }
}
