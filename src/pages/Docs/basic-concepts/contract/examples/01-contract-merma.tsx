export const ContractMermaExample01 = `
classDiagram
    class OperationOutcome {
        +int $code
        +mixed $result
        +?string $error
        +?array $meta
        
        +isSuccess() bool
        +withMetric(string $key, mixed $value) OperationOutcome
        +addDebugData(string $key, mixed $value) OperationOutcome
        +then(callable $callback) OperationOutcome
        +map(callable $callback) OperationOutcome
        +catch(callable $errorHandler) OperationOutcome
        +tap(callable $callback) OperationOutcome
        +ensure(callable $predicate, string $error, int $code) OperationOutcome
        +merge(OperationOutcome $other, callable $merger) OperationOutcome
        +toJson(?callable $transformer) string
    }
`;