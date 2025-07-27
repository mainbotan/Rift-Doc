export const CheckJwtStructureExample01 = `
sequenceDiagram
    participant Client
    participant Middleware as CheckJwtWithUid
    participant JwtManager

    Client->>Middleware: Request with Authorization header
    
    alt Invalid token format
        Middleware-->>Client: 401 ERROR_INVALID_TOKEN_FORMAT
    else
        Middleware->>JwtManager: decode(token)
        
        alt Token verification failed
            JwtManager-->>Middleware: Error
            Middleware-->>Client: 401 ERROR_TOKEN_VERIFICATION_FAILED
        else
            Middleware->>Middleware: validateJwtData()
            
            alt Missing UID
                Middleware-->>Client: 401 ERROR_MISSING_UID
            else Token expired
                Middleware-->>Client: 401 ERROR_TOKEN_EXPIRED
            else Invalid issuance time
                Middleware-->>Client: 401 ERROR_INVALID_ISSUANCE_TIME
            else Valid token
                Middleware-->>Client: Request with uid attribute
            end
        end
    end
`;