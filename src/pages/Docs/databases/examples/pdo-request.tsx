export const PDORequestExample = `
// Request for a global connection
$requestForAdminPDO = Connect::adminPdo();

// Request for connection to the tenant scheme
$requestForTenantPDO = Connect::getPdoForSchema('tanant_<id>');

// Request for connection to the system schema
$requestForSystemPDO = Connect::systemPdo();
`;