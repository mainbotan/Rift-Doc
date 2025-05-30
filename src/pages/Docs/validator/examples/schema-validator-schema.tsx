export const SchemaValidatorSchemaExample = `
$schema = [

    // Simple string field with length constraints and custom error message
    'username' => [
        'type' => 'string',
        'min' => 3,
        'max' => 20,
        'message' => 'Username must be between 3 and 20 characters',
    ],

    // Integer field with range validation
    'age' => [
        'type' => 'int',
        'min' => 18,
        'max' => 99
    ],

    // Optional float field with a default value
    'rating' => [
        'type' => 'float',
        'optional' => true,
        'default' => 4.5,
    ],

    // Boolean field with default value (supports flexible boolean input)
    'is_active' => [
        'type' => 'bool',
        'default' => true,
    ],

    // Enum string field with limited values and custom error message
    'role' => [
        'type' => 'string',
        'enum' => ['admin', 'user', 'guest'],
        'message' => 'Role must be one of: admin, user, guest',
    ],

    // Optional array field with default value
    'tags' => [
        'type' => 'array',
        'optional' => true,
        'default' => [],
    ],

    // Array of objects — nested schema validation inside each item
    'contacts' => [
        'type' => 'array',
        'schema' => [

            // Nested enum field inside each object
            'type' => [
                'type' => 'string',
                'enum' => ['email', 'phone'],
            ],

            // String with length constraints inside each contact object
            'value' => [
                'type' => 'string',
                'min' => 5,
                'max' => 50,
            ]
        ]
    ],

    // Integer field with custom validation via callback
    'custom_code' => [
        'type' => 'int',

        // Custom validator must return ResponseDTO — here it checks for even numbers
        'validate' => function ($value, $all) {
            if ($value % 2 !== 0) {
                return Response::error(Response::HTTP_BAD_REQUEST, 'custom_code must be even');
            }
            return Response::success(null);
        }
    ]
];


`;