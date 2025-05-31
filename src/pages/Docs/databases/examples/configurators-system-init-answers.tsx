export const ConfiguratorsSystemInitAnswers = `
// successful chain execution
{
    code:  200,
    result: "System configured successfully",
    error: null,
    meta: ...
}

// unsuccessful execution - SQL syntax error in the model
{
    code: 500,
    result: null,
    error: "Failed to create table for model: App\\Models\\System\\Tenants",
    meta: 
        debug:
            error: "
                SQLSTATE[42000]: Syntax error or access violation: 
                1064 You have an error in your SQL syntax; 
                check the manual that corresponds to your MySQL server 
                version for the right syntax to use near 
                'KE, email VARCHAR(64) NOT NULL UNIQUE, password VARCHAR(64) NOT NULL, 
                status VAR' at line 1"
}
`;