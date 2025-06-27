export const MetricsAndDebugResponseExample01 = `
{
    code: 200,
    result: {
        user_id: 123
    },
    error: null,
    meta: {
        metrics: {
            start_time: 1750690652.059879,
            db_queries: 5,
            cache_hits: 12,
            end_time: 1750690652.060085
        },
        debug: {
            init_source: "user_service",
            processing_stage: "data_validation",
            memory_usage: 1407656,
            completed_at: "2025-06-23 14:57:32"
        }
    }
}
`