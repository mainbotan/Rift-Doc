export const RunTimeDeploy = `
const TENANT_SCHEMA_PREFIX = 'tenant_';

$this->configurator
    ->registerTenantModel(App\\Tenant\\Clients\\ClientModel::class)
    ->registerTenantModel(App\\Tenant\\Services\\ServiceModel::class)
    ->registerTenantModel(App\\Tenant\\Invoices\\InvoiceModel::class)
    ->registerTenantModel(App\\Tenant\\Orders\\OrderModel::class)

    ->forTenant($tenantUuid, self::TENANT_SCHEMA_PREFIX)
    ->configure();
`;