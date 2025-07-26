export const AuthorizationModuleResponseExample01 = `
{
    "ok": false,
    "code": 404,
    "payload": "Authorization failed: Account not found.",
    "_meta": {
        "debug": [],
        "metrics": {
            "stopwatch": {
                "timings": {
                    "auth.total": {
                        "duration_ms": 55,
                        "duration_human": "55ms",
                        "memory_bytes": 0,
                        "memory_diff_bytes": 0,
                        "memory_human": "0 B",
                        "memory_diff_human": "0 B"
                    },
                    "auth.validation": {
                        "duration_ms": 0,
                        "duration_human": "0μs",
                        "memory_bytes": 2097152,
                        "memory_diff_bytes": 2097152,
                        "memory_human": "2 MB",
                        "memory_diff_human": "2 MB"
                    },
                    "auth.repo_unit": {
                        "duration_ms": 54,
                        "duration_human": "54ms",
                        "memory_bytes": 2097152,
                        "memory_diff_bytes": 2097152,
                        "memory_human": "2 MB",
                        "memory_diff_human": "2 MB"
                    },
                    "auth.hash_request": {
                        "duration_ms": 0,
                        "duration_human": "0μs",
                        "memory_bytes": 2097152,
                        "memory_diff_bytes": 2097152,
                        "memory_human": "2 MB",
                        "memory_diff_human": "2 MB"
                    },
                    "auth.jwt_gen": {
                        "duration_ms": 0,
                        "duration_human": "0μs",
                        "memory_bytes": 0,
                        "memory_diff_bytes": 0,
                        "memory_human": "0 B",
                        "memory_diff_human": "0 B"
                    }
                },
                "summary": {
                    "total_time_ms": 55,
                    "peak_memory": 2097152
                }
            }
        }
    }
}
`;