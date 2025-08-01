export const PartOfRiftDiConfig = `
...imports...

return [
    /**
     * |
     * Critical dependencies
     * | 
     */

    // Response Emitters
    CompositeEmitter::class => autowire()
        ->constructorParameter('emitters', [
            get(JsonEmitter::class),
            get(XmlEmitter::class),
            get(TextEmitter::class),
        ]),
    JsonEmitter::class => autowire(),
    XmlEmitter::class => autowire(),
    TextEmitter::class => autowire(),

    // Router
    Router::class => autowire()
        ->constructorParameter('routesBox', get(RoutesBoxInterface::class))
        ->constructorParameter('container', get(ContainerInterface::class)),

    // PSR-11 Container
    ContainerInterface::class => function (Container $container) {
        return $container;
    },

    // PDO Connector
    ConnectorInterface::class => get(Connector::class),
    Connector::class => autowire()
        ->constructorParameter('driver', $_ENV['DB_DRIVER'])
        ->constructorParameter('host', $_ENV['DB_HOST'])
        ->constructorParameter('port', (int) $_ENV['DB_PORT'])
        ->constructorParameter('username', $_ENV['DB_USER'])
        ->constructorParameter('password', $_ENV['DB_PASSWORD'])
        ->constructorParameter('defaultDatabase', $_ENV['DB_NAME']),

    // Schemas configurator
    ConfiguratorInterface::class => get(Configurator::class),
    Configurator::class => autowire(),

    // Migration Dispatcher
    DispatcherInterface::class => get(Dispatcher::class),
    Dispatcher::class => autowire()
        ->constructorParameter('dbDriver', $_ENV['DB_DRIVER'])
        ->constructorParameter('dbName', $_ENV['DB_NAME']),

    /**
     * |
     * Additional services
     * |
     */

    // Redis
    RedisCacheService::class => autowire(),
    ClientInterface::class => get(Client::class),
    ...
];
`;