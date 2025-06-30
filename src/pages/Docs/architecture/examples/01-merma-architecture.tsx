export const MermaArchitectureExample01 = `
sequenceDiagram
    participant Client
    participant Router
    participant UseCase
    participant RepoRouter
    participant Repository
    participant DB
    
    Client->>Router: HTTP Request
    Router->>UseCase: Route to Handler
    loop Business Logic
        UseCase->>RepoRouter: Get Repository
        RepoRouter->>Repository: Tenant/System Repo
        Repository->>DB: SQL Query
        DB-->>Repository: Raw Data
        Repository-->>UseCase: OperationOutcome
    end
    UseCase-->>Router: OperationOutcome
    Router-->>Client: HTTP Response
`;