
export const ResultTypeExample = `

// Result::Failure

{
    "status": false,
    "code": 400,
    "result": null,
    "error": "Missing required field: id",
    "meta" {
        "metrics": {},
        "debug": {}
    }
}

// Result::Success

{
    "status": true,
    "code": 200,
    "result": {
        "executed": true,
        "affected_rows": 1
    },
    "error": null,
    "meta" {
        "metrics": {},
        "debug": {}
    }
}
`;