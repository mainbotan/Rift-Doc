
export const UpperLavelGetContract = `
// upper layer

use Rift\\Core\\Contracts\\Response; // response wrapper
use Rift\\Core\\Contracts\\ResponseDTO; // response object

class UpperLayer extends Response {

    public function execute(array $data): ResponseDTO {
        
        $request = $useCase->execute($data);
        
        // manual verification
        if ($request->code === self::HTTP_OK) {

            $requestResult = $request->result;

            // query chain
        } {
            return $request;     
        }

        // built-in ResponseDTO method
        if ($request->isSuccess()) {

            $requestResult = $request->result;
            
            // query chain
        } {
            return $request    
        }
    }
}
`;