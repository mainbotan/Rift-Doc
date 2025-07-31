export const ThenExample02 = `
public function executeOperation(int $id): ResultType {
    return $this->getUserById($id)
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
private function getUserById(int $id): ResultType 
{
    /** 
     * unsuccessful case
     */
    return Result::Failure(
        Result::HTTP_NOT_FOUND, 
        "User {$id} not found"
    );
}
`;