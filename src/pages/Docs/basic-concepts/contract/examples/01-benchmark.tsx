export const BenchmarkExample01 = `
{
    "Simple Success": {
        "OP": {
            "time ms": 7.692729,
            "memory kb": 376
        },
        "EX": {
            "time ms": 0.908925,
            "memory kb": 376
        }
    },
    "Simple Error": {
        "OP": {
            "time ms": 5.351707,
            "memory kb": 376
        },
        "EX": {
            "time ms": 11.760078,
            "memory kb": 376
        }
    },
    "Chain (5 ops)": {
        "OP": {
            "time ms": 80.672588,
            "memory kb": 376
        },
        "EX": {
            "time ms": 27.347812,
            "memory kb": 376
        }
    },
    "Deep Chain (50)": {
        "OP": {
            "time ms": 375.518931,
            "memory kb": 376
        },
        "EX": {
            "time ms": 94.414146,
            "memory kb": 376
        }
    }
}
`;