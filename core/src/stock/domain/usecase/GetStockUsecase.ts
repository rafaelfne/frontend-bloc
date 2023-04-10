import { Either, IUsecase, TYPES } from "../../../common";
import { GetStockParams, IStockRepository } from "../repository";
import { inject, injectable } from "inversify";

@injectable()
export class GetStockUsecase implements IUsecase {
  @inject(TYPES.IStockRepository)
  private repository!: IStockRepository;

  async execute<E, S>(params: GetStockParams): Promise<Either<E, S>> {
    return this.repository.getStock(params) as Promise<Either<E, S>>;
  }
}