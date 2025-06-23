export const ThenAndMapExample01 = `
public static function demoThenAndMap(): OperationOutcome
{
    return Operation::success(['id' => 1, 'name' => 'Alice'])
        /**
         * Converting the data and returning a new Operation Outcome
         */
        ->then(function($data) {
            return Operation::success([
                'user' => $data,
                'timestamp' => time()
            ]);
        })
        /**
         * Just converting the data
         */
        ->map(function($data) {
            $data['user']['name'] = strtoupper($data['user']['name']);
            return $data;
        });
}
`;