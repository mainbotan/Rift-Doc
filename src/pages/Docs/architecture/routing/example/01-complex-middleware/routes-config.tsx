export const ComplexMiddlewareExample01RoutesConfigs = `
$routesBox->get('/tokenInfo', App\\UseCases\\TokenInfo::class, [App\\Middlewares\\AuthClient::class]);
`;