import { inject, injectable } from "inversify";
import { Either, IUsecase } from "../../../common";
import { GetFundParams, IFundsRepository } from "../repository";

@injectable()
export class GetFundBuNameUsecase implements IUsecase {
  @inject("IFundsRepository")
  private readonly fundsRepository!: IFundsRepository;

  async execute<E, S>(params: GetFundParams): Promise<Either<E, S>> {
    return this.fundsRepository.getFundByName(params) as Promise<Either<E, S>>;
  }
}