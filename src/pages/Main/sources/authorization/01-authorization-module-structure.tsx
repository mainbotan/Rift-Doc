export const AuthorizationModuleStructureExample01 = `
sequenceDiagram
    participant Client
    participant AuthByEmail
    participant Validator
    participant Repository
    participant JWT
    
    Client->>AuthByEmail: execute(request)
    AuthByEmail->>Validator: validate(body)
    AuthByEmail->>Repository: getTenantUidAndHashByEmail()
    alt Invalid credentials
        AuthByEmail-->>Client: ERROR_INVALID_CREDENTIALS
    else Valid
        AuthByEmail->>JWT: encode(uid)
        AuthByEmail-->>Client: {token}
    end
`;