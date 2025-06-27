
export const UseContractWrapperExample = `
// somewhere in your app

use Rift\\Core\\Contracts\\Operation; // response wrapper
use Rift\\Core\\Contracts\\OperationOutcome; // response object

class YourUseCase {

    public function execute(array $data): OperationOutcome {
    
        // the general version
        return Operation::response($result, self::HTTP_OK);

        // positive response - a quick option without a code
        return Operation::success($result);

        // with metrics (only with positive response)
        return Operation::success($result, $metrics_array)

        // negative response
        return Operation::error(self::HTTP_INTERNAL_SERVER_ERROR, 'error description: internal error');

        // with debug info
        return Operation::error(self::HTTP_INTERNAL_SERVER_ERROR, 'ups error', $debug_array);
    }
}
`;