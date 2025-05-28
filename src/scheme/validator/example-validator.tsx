
export const ExampleValidator = `

class ExampleValidator implements ValidatorInterface {

    private array $schema = [
        'id' => [
            'type' => 'string',
            'min' => 3,
            'max' => 64,
            'message' => 'invalid id'
        ],
        'status' => [
            'type' => 'string',
            'enum' => ['active', 'banned']
        ],
        'items' => [
            'type' => 'array',
            'schema' => [
                'id' => [...],
                'name' => [...] 
            ]
        ],
        'limit' => [
            'type' => 'int',
            'min' => 1,
            'max' => 1000,
            'optional' => true
        ],
        'offset' => [
            'type' => 'int',
            'min' => 1,
            'max' => 1000,
            'optional' => true
        ]
    ];

    public function execute(array $data): ResponseDTO {
        return SchemaValidator::validate($this->schema, $data);
    }
}
`;