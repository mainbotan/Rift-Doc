export const MermaRoutingExample01 = `
sequenceDiagram
    participant Entrypoint
    participant Router
    participant Middleware
    participant Handler

    Entrypoint->>Router: Request (PSR-7)
    Router->>Router: Find route
    alt Route not found
        Router-->>Entrypoint: ResultType(error)
    else
        loop Middleware processing
            Router->>Middleware: Process
            alt Middleware error
                Middleware-->>Entrypoint: ResultType(error)
            else
                Middleware-->>Router: Modified Request
            end
        end
        Router->>Handler: execute(payload)
        Handler-->>Router: ResultType
        Router-->>Entrypoint: Response
    end
`;