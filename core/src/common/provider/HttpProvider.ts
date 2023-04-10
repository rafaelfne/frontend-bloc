import { IHttpProvider, RequestConfig, Response } from "../domain/IHttpProvider";
import axios from "axios";
import { injectable } from "inversify";

@injectable()
export class HttpProvider implements IHttpProvider {
  constructor() {
    axios.defaults.baseURL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com";
  }
  get<T>(url: string, config?: RequestConfig): Promise<Response<T>> {
    return axios.get<T>(url, config);
  }
}
