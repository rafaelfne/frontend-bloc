import { inject, injectable } from "inversify";
import { Either, IUsecase, TYPES } from "../../../common";
import { GetFundParams, IFundsRepository } from "../repository";

@injectable()
export class GetFundBuNameUsecase implements IUsecase {
  @inject(TYPES.IFundsRepository)
  private readonly fundsRepository!: IFundsRepository;

  async execute<E, S>(params: GetFundParams): Promise<Either<E, S>> {
    return this.fundsRepository.getFundByName(params) as Promise<Either<E, S>>;
  }
}