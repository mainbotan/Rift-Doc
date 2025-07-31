export const ModelsOptionsExample = `
// SQL generation for migration
public static function getMigrationSQL(): string;


// Validation of the entity submitted for input according to the model scheme
public static function validate(array $data): ResultType;


// Validation of a separate field according to the scheme
public static function validateField(string $field, $value): ResultType;
`;