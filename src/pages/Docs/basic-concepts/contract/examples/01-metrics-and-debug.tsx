export const MetricsAndDebugExample01 = `
public static function demoMeta(): OperationOutcome
{
    // 1. Create successful operation with initial metrics and debug data
    $operation = Operation::success(
        result: ['user_id' => 123],
        metrics: ['start_time' => microtime(true)],
        debug: ['init_source' => 'user_service']
    );

    // 2. Add metrics during processing
    $operation
        ->withMetric('db_queries', 5)
        ->withMetric('cache_hits', 12);

    // 3. Add debug information
    $operation
        ->addDebugData('processing_stage', 'data_validation')
        ->addDebugData('memory_usage', memory_get_usage());

    // 4. Demonstrate metric retrieval
    $queries = $operation->getMetric('db_queries'); // 5
    $cacheHits = $operation->getMetric('cache_hits'); // 12

    // 5. Demonstrate debug retrieval
    $source = $operation->getDebug('init_source'); // 'user_service'
    $stage = $operation->getDebug('processing_stage'); // 'data_validation'

    // 6. Final modification before return
    $operation
        ->withMetric('end_time', microtime(true))
        ->addDebugData('completed_at', date('Y-m-d H:i:s'));

    return $operation;
}
`;