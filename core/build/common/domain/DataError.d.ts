export interface IUnexpectedError {
    kind: 'UnexpectedError';
    error: Error;
}
export type DataError = IUnexpectedError;
