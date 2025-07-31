export const ThenExample01 = `
public static function demoThen(): ResultType
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
        });
}
`;