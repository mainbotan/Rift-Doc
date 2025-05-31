export const ModelsAnswersExample = `
// SQL Migration
string(163) "
CREATE TABLE IF NOT EXISTS tenants (
    id SERIAL PRIMARY KEY, 
    email VARCHAR(64) NOT NULL UNIQUE, 
    password VARCHAR(64) NOT NULL, 
    status VARCHAR(20) DEFAULT 'pending'
);"

// Validation across the entire model
{
    code: 400,
    result: null,
    error: "Invalid email format",
    meta:
        debug: ...
}

// Validation of a single field
{
    code: 400,
    result: null,
    error: "password must be at least 8 characters",
    meta: 
        debug: ...
}
`;