
export const OperationOutcomeExample = `

// example of the validator's response

{
    code: 400,
    result: null,
    error: 'Missing required field: id',
    meta {
        metrics: {},
        debug: {}
    }
}

// example of the repo's response

{
    code: 200,
    result: {
        executed: true,
        affected_rows: 1
    },
    error: null,
    meta {
        metrics: {},
        debug: {}
    }
}
`;