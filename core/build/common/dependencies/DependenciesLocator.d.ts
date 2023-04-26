import { Container } from 'inversify';
declare class DependenciesLocator {
    private container;
    defineDependencies(): Container;
    get<T>(type: string): T;
}
export { DependenciesLocator };
