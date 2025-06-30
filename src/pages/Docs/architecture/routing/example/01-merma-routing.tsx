export const MermaRoutingExample01 = `
sequenceDiagram
    participant Entrypoint
    participant Router
    participant Middleware
    participant Handler

    Entrypoint->>Router: Request (PSR-7)
    Router->>Router: Find route
    alt Route not found
        Router-->>Entrypoint: OperationOutcome(error)
    else
        loop Middleware processing
            Router->>Middleware: Process
            alt Middleware error
                Middleware-->>Entrypoint: OperationOutcome(error)
            else
                Middleware-->>Router: Modified Request
            end
        end
        Router->>Handler: execute(payload)
        Handler-->>Router: OperationOutcome
        Router-->>Entrypoint: Response
    end
`;