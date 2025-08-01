export const MetricsAndDebugMermaExample01 = `
flowchart TD
    A[Start demoMeta] --> B[Create ResultType with Result::Success]
    B --> C["Initialize with:
            - result: {user_id: 123}
            - metrics: {start_time}
            - debug: {init_source}"]
    
    C --> D[Add metrics via withMetric]
    D --> D1["db_queries = 5"]
    D1 --> D2["cache_hits = 12"]
    
    D2 --> E[Add debug via addDebugData]
    E --> E1["processing_stage = 'data_validation'"]
    E1 --> E2["memory_usage = current_memory"]
    
    E2 --> F[Retrieve metrics via getMetric]
    F --> F1["queries = getMetric('db_queries')"]
    F1 --> F2["hits = getMetric('cache_hits')"]
    
    F2 --> G[Retrieve debug via getDebug]
    G --> G1["source = getDebug('init_source')"]
    G1 --> G2["stage = getDebug('processing_stage')"]
    
    G2 --> H[Final modifications]
    H --> H1["withMetric('end_time')"]
    H1 --> H2["addDebugData('completed_at')"]
    
    H2 --> I[Return ResultType]
    
    subgraph FinalStructure
    I --> J["{
        code: 200,
        result: {user_id: 123},
        error: null,
        meta: {
            metrics: {
                start_time: ...,
                db_queries: 5,
                cache_hits: 12,
                end_time: ...
            },
            debug: {
                init_source: 'user_service',
                processing_stage: 'data_validation',
                memory_usage: ...,
                completed_at: '2025-06-23...'
            }
        }
    }"]
    end
`;