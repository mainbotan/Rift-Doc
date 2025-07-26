export const RegistrationModuleResponseExample01 = `
{
    "ok": false,
    "code": 200,
    "payload": {
        "auth": {
            "token": "..."
        }
    },
    "_meta": {
        "debug": [],
        "metrics": {
            "stopwatch": {
                "timings": {
                    "reg.total": {
                        "duration_ms": 84,
                        "duration_human": "84ms",
                        "memory_bytes": 0,
                        "memory_diff_bytes": 0,
                        "memory_human": "0 B",
                        "memory_diff_human": "0 B"
                    },
                    "reg.validation": {
                        "duration_ms": 0,
                        "duration_human": "0μs",
                        "memory_bytes": 2097152,
                        "memory_diff_bytes": 2097152,
                        "memory_human": "2 MB",
                        "memory_diff_human": "2 MB"
                    },
                    "reg.repo_unit": {
                        "duration_ms": 24,
                        "duration_human": "24ms",
                        "memory_bytes": 2097152,
                        "memory_diff_bytes": 2097152,
                        "memory_human": "2 MB",
                        "memory_diff_human": "2 MB"
                    },
                    "reg.email_check": {
                        "duration_ms": 0,
                        "duration_human": "0μs",
                        "memory_bytes": 2097152,
                        "memory_diff_bytes": 2097152,
                        "memory_human": "2 MB",
                        "memory_diff_human": "2 MB"
                    },
                    "reg.uid_gen": {
                        "duration_ms": 0,
                        "duration_human": "0μs",
                        "memory_bytes": 2097152,
                        "memory_diff_bytes": 2097152,
                        "memory_human": "2 MB",
                        "memory_diff_human": "2 MB"
                    },
                    "reg.hash": {
                        "duration_ms": 59,
                        "duration_human": "59ms",
                        "memory_bytes": 2097152,
                        "memory_diff_bytes": 2097152,
                        "memory_human": "2 MB",
                        "memory_diff_human": "2 MB"
                    },
                    "reg.jwt_gen": {
                        "duration_ms": 0,
                        "duration_human": "0μs",
                        "memory_bytes": 2097152,
                        "memory_diff_bytes": 2097152,
                        "memory_human": "2 MB",
                        "memory_diff_human": "2 MB"
                    }
                },
                "summary": {
                    "total_time_ms": 84,
                    "peak_memory": 2097152
                }
            }
        }
    }
}
`;