declare class DependenciesLocator {
    private container;
    defineDependencies(): void;
    get<T>(type: symbol): T;
}
export { DependenciesLocator };
