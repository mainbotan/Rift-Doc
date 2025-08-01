export const ValidatorExample = `
<?php

namespace App\\Validators;

use Rift\\Core\\Databus\\ResultType;
use Rift\\Contracts\\Validators\\ValidatorInterface;
use Rift\\Validator\\SchemaValidator;

class YourValidator implements ValidatorInterface {
    // Validation scheme
    private array $schema = [
        'name' => [
            'type' => 'string',
            'min' => 3,
            'max' => 64
        ]...
    ];

    // All validators accept an array of data
    public function execute(array $data): ResultType {
        return SchemaValidator::validate($this->schema, $data);
    }
}
`;