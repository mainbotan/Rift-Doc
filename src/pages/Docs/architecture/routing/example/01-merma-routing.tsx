export const MermaRoutingExample01 = `
sequenceDiagram
    participant Client
    participant Router
    participant Middleware
    participant Handler

    Client->>Router: Request (PSR-7)
    Router->>Router: Find route
    alt Route not found
        Router-->>Client: OperationOutcome(error)
    else
        loop Middleware processing
            Router->>Middleware: Process
            alt Middleware error
                Middleware-->>Client: OperationOutcome(error)
            else
                Middleware-->>Router: Modified Request
            end
        end
        Router->>Handler: execute(payload)
        Handler-->>Router: OperationOutcome
        Router-->>Client: Response
    end
`;