import { beforeAll, describe, test, expect } from '@jest/globals';
import { DependenciesLocator, HttpProviderFake } from '../../common';
import { Container } from 'inversify';
import { IFundsRepository } from '../domain';

let container: Container;

beforeAll(() => {
  const dependenciesLocator = new DependenciesLocator();
  container = dependenciesLocator.defineDependencies();
  container.rebind("IHttpProvider").toConstantValue(new HttpProviderFake());
});

describe('IFundsRepository', () => {
  test('should get fund', async () => {
    const repository = container.get<IFundsRepository>("IFundsRepository");
    const result = await repository.getFundByName({ name: 'warren-fic-fim-cp' });
    expect(result.get().identifier).toEqual("warren-fic-fim-cp");
  });
});