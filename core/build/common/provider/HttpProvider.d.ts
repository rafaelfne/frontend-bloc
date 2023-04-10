import { IHttpProvider, RequestConfig, Response } from "../domain/IHttpProvider";
export declare class HttpProvider implements IHttpProvider {
    constructor();
    get<T>(url: string, config?: RequestConfig): Promise<Response<T>>;
}
