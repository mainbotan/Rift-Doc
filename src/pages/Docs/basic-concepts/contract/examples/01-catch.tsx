export const CatchExample01 = `
public static function demoCatch(): OperationOutcome
{
    return Operation::error(404, 'User not found')
        ->catch(function($error, $code, $meta) {
            /**
             * We log the error and return a new result.
             */
            $debug['logged_at'] = date('Y-m-d H:i:s');
            return Operation::error(
                $code,
                "Handled: $error",
                $debug
            );
        });
}
`;