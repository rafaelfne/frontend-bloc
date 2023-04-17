import { IHttpProvider, RequestConfig, Response } from "../domain/IHttpProvider";
import axios from "axios";
import { injectable } from "inversify";

@injectable()
export class HttpProvider implements IHttpProvider {
  constructor() {
    axios.defaults.baseURL = "http://localhost:3000";
  }
  get<T>(url: string, config?: RequestConfig): Promise<Response<T>> {
    return axios.get<T>(url, config);
  }
}
