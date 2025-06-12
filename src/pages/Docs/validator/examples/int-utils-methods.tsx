export const IntUtilsMethodsExample = `
// Checking the range

public static function checkRange(
    int $value,
    int $min,
    int $max,
    string $fieldName = 'value'
): OperationOutcome ...

// Is positive number

public static function isPositive(
    int $value, 
    string $fieldName = 'value'
): OperationOutcome ...

`;