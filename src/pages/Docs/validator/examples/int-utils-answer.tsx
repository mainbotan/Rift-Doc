export const IntUtilsAnswerExample = `
// positive range check
{
    "status": true,
    "code": 200,
    "result": null,
    "error": null,
    "meta": ...
}

// negative range check
{
    "status": false,
    "code": 400,
    "result": null,
    "error": 'limit must be between 0 and 100',
    "meta": ...
}
`;