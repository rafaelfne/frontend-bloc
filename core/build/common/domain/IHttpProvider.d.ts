import { AxiosRequestConfig, AxiosResponse } from "axios";
export type RequestConfig = AxiosRequestConfig;
export type Response<T> = AxiosResponse<T>;
export interface IHttpProvider {
    get<T>(url: string, config?: RequestConfig): Promise<Response<T>>;
}
