export const TapExample01 = `
public static function demoTap(): OperationOutcome
{
    return Operation::success(['value' => 42])
        ->tap(function($result) {
            /**
             * Logging without changing the result
             */
            error_log("Processing value: {$result['value']}");
        })
        ->map(function($result) {
            $result['value'] *= 2;
            return $result;
        })
        ->tap(function($result) {
            error_log("Doubled value: {$result['value']}");
        });
}
`;