export const ContractProcessingMermaExample01 = `
flowchart TD
    A[Init OperationOutcome] --> B{isSuccess?}
    B -->|Yes| C[map/then/ensure]
    B -->|No| D[catch/tap]
    C --> E[return OperationOutcome]
    D --> F[error handling]
    E --> G[client]
    F --> G
`;