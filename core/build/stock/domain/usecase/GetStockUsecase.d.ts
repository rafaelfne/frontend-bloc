import { Either, IUsecase } from "../../../common";
import { GetStockParams } from "../repository";
export declare class GetStockUsecase implements IUsecase {
    private repository;
    execute<E, S>(params: GetStockParams): Promise<Either<E, S>>;
}
