export const MapExample01 = `
public static function demoThenAndMap(): OperationOutcome
{
    return Operation::success(['id' => 1, 'name' => 'Alice'])
        ->then(function($data) {
            /*
            * Converting the data and returning a new Operation Outcome
            */
            return Operation::success([
                'user' => $data,
                'timestamp' => time()
            ]);
        })
        ->map(function($data) {
            /*
            * Just converting the data
            */
            $data['user']['name'] = strtoupper($data['user']['name']);
            return $data;
        });
}
`;