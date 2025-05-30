export const StringUtilsRequestExample = `
// Example of a validation call

$resultValidation = StringUtils::checkLength('Rift', 1, 5, 'name');

if ($resultValidation->isSuccess()) {
    // your logic
} else {
    return $resultValidation;
}
`;