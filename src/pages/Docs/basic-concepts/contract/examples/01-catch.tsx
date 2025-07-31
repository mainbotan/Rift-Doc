export const CatchExample01 = `
public static function demoCatch(): ResultType
{
    return Result::Failure(404, 'User not found')
        ->catch(function($error, $code, $meta) {
            /**
             * We log the error and return a new result.
             */
            $debug['logged_at'] = date('Y-m-d H:i:s');
            return Result::Failure(
                $code,
                "Handled: $error",
                $debug
            );
        });
}
`;