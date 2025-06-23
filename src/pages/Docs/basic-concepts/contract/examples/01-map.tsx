export const MapExample01 = `
public static function demoMap(): OperationOutcome
{
    return Operation::success(['id' => 1, 'name' => 'Alice'])
        ->map(function($data) {
            /**
             * Just converting the data
             */
            $data['name'] = strtoupper($data['name']);
            return $data;
        });
}
`;