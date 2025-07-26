export const VerificationModuleStructureExample01 = `
sequenceDiagram
    participant Client
    participant VerifyService
    participant Validator
    participant JwtService
    participant CryptoService
    participant RepoRouter
    participant TenantRepo

    Client->>VerifyService: POST /verify (token, X-Verification-Code)
    
    %% Validation
    VerifyService->>Validator: validate(code)
    alt Invalid code
        VerifyService-->>Client: 400 ERROR_TOKEN_LOST
    end
    
    %% Token processing
    VerifyService->>JwtService: decode(token)
    alt Invalid/expired token
        VerifyService-->>Client: 401 ERROR_TOKEN_EXPIRED
    end
    
    %% Code verification
    VerifyService->>CryptoService: decrypt(jwtData.code)
    VerifyService->>VerifyService: compareCodes(decrypted, clientCode)
    alt Code mismatch
        VerifyService-->>Client: 401 ERROR_CODE_MISMATCH
    else
        %% Repository operations
        VerifyService->>RepoRouter: factory()/tenants()
        VerifyService->>TenantRepo: updateVerifyStatus(uid, VERIFIED)
        VerifyService-->>Client: 200 Verification success
    end
    
    %% Error handling
    opt On any error
        VerifyService-->>Client: ERROR_VERIFY_FAILED
    end
`;