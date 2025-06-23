export const ThenExample02 = `
public function executeOperation(int $id): OperationOutcome {
    return $this->getUserById($id)
    /**
     * Converting the data and returning a new Operation Outcome
     */
    ->then(function($data) {
            return Operation::success([
                'user' => $data,
                'timestamp' => time()
            ]);
        });
}
private function getUserById(int $id): OperationOutcome 
{
    /** 
     * unsuccessful case
     */
    return Operation::error(
        Operation::HTTP_NOT_FOUND, 
        "User {$id} not found"
    );
}
`;