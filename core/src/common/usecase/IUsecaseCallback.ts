export interface IUsecaseCallback {
  execute<T>(params?: unknown, callback?: (data: T) => void): void
}
