export const ValidatorExample = `
<?php

namespace App\\Validators;

use Rift\\Core\\Contracts\\OperationOutcome;
use Rift\\Core\\Validators\\ValidatorInterface;
use Rift\\Core\\Validators\\Utils\\SchemaValidator;

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
    public function execute(array $data): OperationOutcome {
        return SchemaValidator::validate($this->schema, $data);
    }
}
`;