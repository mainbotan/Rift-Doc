export const StringUtilsMethodsExample = `
// Checking the length

public static function checkLength(
    string $value,
    int $min,
    int $max,
    string $fieldName = 'string'
): ResultType ...

// Checking if it is empty

public static function notEmpty(
    string $value, 
    string $fieldName = 'string'
): ResultType ...
`;