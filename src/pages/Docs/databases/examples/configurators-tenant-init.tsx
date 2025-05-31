export const ConfiguratorsTenantInitExample = `

use App\\Configurators\\AppTenantConfigurator;

$resultOfInit = AppTenantConfigurator::forTenant('100')->configure(); // 100 - <tenant_id>

`;