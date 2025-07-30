export const PartOfAppDiConfig = `
$bonding = [
    // Interfaces to implementations
    EmitterInterface::class => get(CompositeEmitter::class),
    RouterInterface::class => get(Router::class),
    RoutesBoxInterface::class => require __DIR__ . '/../routes.php',
    MailerInterface::class => get(Mailer::class),
    CacheInterface::class => get(RedisCacheService::class),

    // Symfony Mailer
    TransportInterface::class => function () {
        return Transport::fromDsn($_ENV['MAILER_DSN']);
    },
    Mailer::class => autowire()
        ->constructorParameter('transport', get(TransportInterface::class)),
];

$defaultRealisation = require __DIR__ . '/../../vendor/rift/core/di/rift.php';
$diConfiguration = array_merge($bonding, $defaultRealisation);

return $diConfiguration;
`;