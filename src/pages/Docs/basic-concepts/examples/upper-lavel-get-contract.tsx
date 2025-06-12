
export const UpperLavelGetContract = `
// upper layer

use Rift\\Core\\Contracts\\Operation; // response wrapper
use Rift\\Core\\Contracts\\OperationOutcome; // response object

class UpperLayer extends Operation {

    public function execute(array $data): OperationOutcome {
        
        $request = $useCase->execute($data);
        
        // manual verification
        if ($request->code === self::HTTP_OK) {

            $requestResult = $request->result;

            // query chain
        } {
            return $request;     
        }

        // built-in OperationOutcome method
        if ($request->isSuccess()) {

            $requestResult = $request->result;
            
            // query chain
        } {
            return $request    
        }
    }
}
`;