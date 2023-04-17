import { GetFundParams, IFund } from "../domain";

export interface ICommonFundState {
  params?: GetFundParams;
}

export interface ILoadingFundState {
  kind: "LoadingFundState";
}

export interface IErrorFundState {
  kind: "ErrorFundState";
  error: string;
}

export interface ILoadedFundState {
  kind: "LoadedFundState";
  fund: IFund;
}

export type TFundState = ICommonFundState & (
  ILoadingFundState | IErrorFundState | ILoadedFundState
);

export const fundInitialState: TFundState = {
  kind: "LoadingFundState"
};
