export const PDOMethodsExample = `
/**
 * Connecting to a database without a specific schema,
 * used to initialize new tenants
 * and simplified deployment of the system schema.
 *
 * Be careful, this method returns a global
 * Database connection and has access to all schemas.
*/
public static function adminPdo(): ResultType;

/**
 * Connecting to a specific schema
 * /
public static function getPdoForSchema(string $schema): ResultType;

/**
 * Connection to the system schema
 * /
public static function systemPdo(): ResultType;
`;