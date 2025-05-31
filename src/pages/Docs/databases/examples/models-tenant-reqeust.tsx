export const ModelsTenantRequestExample = `
// Getting migration from a model
$migrationRequuest = Tenants::getMigrationSQL();

// Validation of the entire mo model array (rarely used)
$testData = [
    'id' => 100,
    'email' => 'invalid_email',
    'password' => '12345678',
    'status' => 'active' 
];
$validateAllDataRequest = Tenants::validate($testData);

// Validation of a specific field
$validateFieldRequest = Tenants::validateField('password', '12345');

`;