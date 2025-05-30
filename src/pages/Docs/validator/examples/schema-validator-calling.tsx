export const SchemaValidatorCallingExample = `
$response = SchemaValidator::validate($schema, $testData);

if ($response->isSuccess()) {
    // query chain
} else {
    return $response;
}
`;