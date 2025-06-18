export const ThenExample01 = `
public static function demoThen(): OperationOutcome
{
    return Operation::success(['id' => 1, 'name' => 'Alice'])
        /*
         * Converting the data and returning a new Operation Outcome
        */
        ->then(function($data) {
            return Operation::success([
                'user' => $data,
                'timestamp' => time()
            ]);
        });
}
`;