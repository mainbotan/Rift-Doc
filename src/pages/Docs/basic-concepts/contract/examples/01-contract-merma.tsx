export const ContractMermaExample01 = `
classDiagram
    class ResultType {
        +int $code
        +mixed $result
        +?string $error
        +?array $meta
        
        +isSuccess() bool
        +withMetric(string $key, mixed $value) ResultType
        +addDebugData(string $key, mixed $value) ResultType
        +then(callable $callback) ResultType
        +map(callable $callback) ResultType
        +catch(callable $errorHandler) ResultType
        +tap(callable $callback) ResultType
        +ensure(callable $predicate, string $error, int $code) ResultType
        +merge(ResultType $other, callable $merger) ResultType
        +toJson(?callable $transformer) string
    }
`;