
export const UseContractWrapperExample = `
// somewhere in your app

use Rift\\Core\\Contracts\\Operation; // response wrapper
use Rift\\Core\\Contracts\\ResultType; // response object

class YourUseCase {

    public function execute(array $data): ResultType {
    
        // the general version
        return Operation::response($result, self::HTTP_OK);

        // positive response - a quick option without a code
        return Result::Success($result);

        // with metrics (only with positive response)
        return Result::Success($result, $metrics_array)

        // negative response
        return Result::Failure(self::HTTP_INTERNAL_SERVER_ERROR, 'error description: internal error');

        // with debug info
        return Result::Failure(self::HTTP_INTERNAL_SERVER_ERROR, 'ups error', $debug_array);
    }
}
`;