export const RepositoriesTenantsAnswersExample = `
// success request for creating user
{
    code: 200,
    result: 
        insert_id: 1,
        affected_rows: 1
    error: null,
    meta: 
        ...
}

// unsuccess request for creating user
{
    code: 500,
    result: null,
    error: "
        Database error: SQLSTATE[23000]: 
        Integrity constraint violation: 1062 Duplicate 
        entry 'createTest@gmail.com' for key 'tenants.email'
    ",
    meta:
        debug: 
            query: "INSERT INTO tenants (email, password) VALUES (:email, :password)",
            error_info: 
                0: 23000,
                1: 1062,
                2: "Duplicate entry 'createTest@gmail.com' for key 'tenants.email'"
}
`;