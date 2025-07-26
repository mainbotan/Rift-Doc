export const RegistrationModuleStructureExample01 = `
sequenceDiagram
    participant Client
    participant RegistrateByEmail
    participant Validator
    participant Repository
    participant UidManager
    participant HashManager
    participant JwtManager
    participant Mailer
    participant EncryptionManager

    Client->>RegistrateByEmail: execute(request)
    
    %% Validation
    RegistrateByEmail->>Validator: validate(body)
    
    %% Repository access
    RegistrateByEmail->>Repository: factory()/tenants()
    
    %% Email check
    RegistrateByEmail->>Repository: getTenantUidByEmail()
    alt Email exists
        RegistrateByEmail-->>Client: ERROR_EMAIL_EXISTS
    else
        %% UID generation
        RegistrateByEmail->>UidManager: generate()
        
        %% Password hashing
        RegistrateByEmail->>HashManager: passwordHash()
        
        %% Create tenant
        RegistrateByEmail->>Repository: createTenant()
        
        %% Auth token generation
        RegistrateByEmail->>JwtManager: encode(uid)
        
        %% Verification code flow
        RegistrateByEmail->>EncryptionManager: encrypt(code)
        RegistrateByEmail->>Mailer: sendConfirmationEmail()
        RegistrateByEmail->>JwtManager: encode(verifyData)
        
        %% Final response
        RegistrateByEmail-->>Client: {authToken, verifyToken}
    end
    
    %% Error handling
    opt On error
        RegistrateByEmail-->>Client: ERROR_REGISTRATION_FAILED
    end
`;