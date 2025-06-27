export const CatchMemraExample01 = `
flowchart TD
    A[Start demoCatch function] --> B[Create Operation with 404 error]
    B --> C[Call catch with handler]
    C --> D{Error occurred?}
    D -- Yes --> E[Invoke error handler]
    E --> F[Create debug data with timestamp]
    F --> G[Create new Operation with handled error]
    G --> H[Return result]
    D -- No --> H
    H --> I[End function, return OperationOutcome]
    
    subgraph Error Handler
    E --> F --> G
    end
    
    subgraph Result
    I --> J["{
        code: 404,
        result: null,
        error: 'Handled: User not found',
        meta: {
            debug: {
                logged_at: '2025-06-18 18:28:46'
            }
        }
    }"]
    end
`;