export const ThenAndMapExample01 = `
public static function demoThenAndMap(): ResultType
{
    return Result::Success(['id' => 1, 'name' => 'Alice'])
        /**
         * Converting the data and returning a new Operation Outcome
         */
        ->then(function($data) {
            return Result::Success([
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