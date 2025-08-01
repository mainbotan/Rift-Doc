export const StringUtilsAnswerExample = `
// positive length check
{
    "status": true,
    "code": 200,
    "result": null,
    "error": null,
    "meta": ...
}

// negative length check
{
    "status": false,
    "code": 400,
    "result": null,
    "error": "name must be at least 1 characters",
    "meta": ...
}
`;