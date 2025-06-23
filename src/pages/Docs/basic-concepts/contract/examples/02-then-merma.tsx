export const ThenMermaExample02 = `
stateDiagram-v2
    [*] --> executeOperation
    executeOperation --> getUserById
    getUserById --> Error: User not found
    getUserById --> Transform: User found
    Transform --> Success: Data converted
    Error --> [*]
    Success --> [*]
`;