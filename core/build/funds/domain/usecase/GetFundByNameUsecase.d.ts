import { Either, IUsecase } from "../../../common";
import { GetFundParams } from "../repository";
export declare class GetFundBuNameUsecase implements IUsecase {
    private readonly fundsRepository;
    execute<E, S>(params: GetFundParams): Promise<Either<E, S>>;
}
