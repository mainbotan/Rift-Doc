export const ConfiguratorsSystemExample = `
<?php

namespace App\\Configurators;

use Rift\\Core\\Database\\Configurators\\SystemConfigurator;

class AppSystemConfigurator extends SystemConfigurator
{
    // enumeration of all models specific to this scheme

    protected static array $models = [
        \\Rift\\Models\\System\\Tenants::class
    ];
} 
`;