import { describe, test, expect, beforeEach, jest } from "@jest/globals";
import { DependenciesLocator } from "../../common";
import { Container } from "inversify";
import { FundsRepository } from "../database";
import { parseFund } from "../database/parse/ParseFund";

import { fund } from "./mock/fund";
import { statistics } from "./mock/statistics";
import { GetFundParams } from "../domain";

type FunctionLike = (...args: never) => unknown;

describe("FundsRepository", () => {
  let container: Container;
  let httpProviderMock: {
    get: jest.Mock<FunctionLike>
  };
  let fundsRepository: FundsRepository;

  beforeEach(() => {
    const dependenciesLocator = new DependenciesLocator();
    container = dependenciesLocator.defineDependencies();
    httpProviderMock =  {
      get: jest.fn()
    };
    container.rebind("IHttpProvider").toConstantValue(httpProviderMock);
    fundsRepository = container.get<FundsRepository>("IFundsRepository");
  });

  describe("getFundByName", () => {
    const params: GetFundParams = {
      name: "warren-fic-fim-cp"
    };

    test("should return the parsed fund when the HTTP requests succeed", async () => {
      httpProviderMock.get.mockImplementationOnce(() => Promise.resolve({ data: fund }));
      httpProviderMock.get.mockImplementationOnce(() => Promise.resolve({ data: statistics }));
      const result = await fundsRepository.getFundByName(params);
      expect(result.isRight()).toBe(true);
      expect(result.get()).toEqual(parseFund(fund, statistics));
      expect(httpProviderMock.get).toHaveBeenCalledTimes(2);
      expect(httpProviderMock.get).toHaveBeenNthCalledWith(1, `/v1/funds/${params.name}`);
      expect(httpProviderMock.get).toHaveBeenNthCalledWith(2, `/v1/funds/${params.name}/statistics`);
    });

    test("should return an unexpected error when the HTTP requests fail", async () => {
      const error = new Error("Unexpected error");
      httpProviderMock.get.mockImplementationOnce(() => Promise.reject(error));
      const result = await fundsRepository.getFundByName(params);
      expect(result.isLeft()).toBe(true);
      expect(result.getLeft()).toEqual({ kind: "UnexpectedError", error });
      expect(httpProviderMock.get).toHaveBeenCalledTimes(1);
      expect(httpProviderMock.get).toHaveBeenCalledWith(`/v1/funds/${params.name}`);
    });
  });
});