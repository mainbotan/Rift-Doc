export const IntUtilsRequestExample = `
// Example of a validation call

$resultValidation = IntUtils::checkRange(15, 0, 100, 'limit');

if ($resultValidation->isSuccess()) {
    // your logic
} else {
    return $resultValidation;
}
`;