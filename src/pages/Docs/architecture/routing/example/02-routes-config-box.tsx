export const RoutesConfigBoxExample02 = `
$routesBox->get('/welcome', App\\UseCases\\Welcome::class, [App\\Middlewares\\CheckHeader::class]);
`;