export const ContractProcessingMermaExample01 = `
flowchart TD
    A[Init ResultType] --> B{isSuccess?}
    B -->|Yes| C[map/then/ensure]
    B -->|No| D[catch/tap]
    C --> E[return ResultType]
    D --> F[error handling]
    E --> G[client]
    F --> G
`;