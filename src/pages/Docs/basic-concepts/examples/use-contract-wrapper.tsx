
export const UseContractWrapperExample = `
// somewhere in your app

use Rift\\Core\\Contracts\\Operation; // response wrapper
use Rift\\Core\\Contracts\\OperationOutcome; // response object

class YourUseCase extends Operation {

    public function execute(array $data): OperationOutcome {
    
        // the general version
        return self::response($result, self::HTTP_OK);

        // positive response - a quick option without a code
        return self::success($result);

        // with metrics (only with positive response)
        return self::success($result, $metrics_array)

        // negative response
        return self::error(self::HTTP_INTERNAL_SERVER_ERROR, 'error description: internal error');

        // with debug info
        return self::error(self::HTTP_INTERNAL_SERVER_ERROR, 'ups error', $debug_array);
    }
}
`;