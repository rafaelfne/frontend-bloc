import { Either } from "../domain";

export interface IUsecase {
  execute<S, E>(params?: unknown): Promise<Either<S, E>>
}