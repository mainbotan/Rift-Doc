
export const UpperLavelGetContract = `
// upper layer

use Rift\\Core\\Contracts\\Operation; // response wrapper
use Rift\\Core\\Contracts\\ResultType; // response object

class UpperLayer extends Operation {

    public function execute(array $data): ResultType {
        
        $request = $useCase->execute($data);
        
        // manual verification
        if ($request->code === self::HTTP_OK) {

            $requestResult = $request->result;

            // query chain
        } {
            return $request;     
        }

        // built-in ResultType method
        if ($request->isSuccess()) {

            $requestResult = $request->result;
            
            // query chain
        } {
            return $request    
        }
    }
}
`;