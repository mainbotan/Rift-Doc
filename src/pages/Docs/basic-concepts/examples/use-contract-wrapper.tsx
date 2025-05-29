
export const UseContractWrapperExample = `
// somewhere in your app

use Rift\\Core\\Contracts\\Response; // response wrapper
use Rift\\Core\\Contracts\\ResponseDTO; // response object

class YourUseCase extends Response {

    public function execute(array $data): ResponseDTO {
    
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