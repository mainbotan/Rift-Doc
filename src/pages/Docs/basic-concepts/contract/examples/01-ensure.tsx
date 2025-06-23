export const EnsureExample01 = `
public static function demoEnsure(): OperationOutcome
{
    return Operation::success(['age' => 17])
        ->ensure(
            fn($data) => $data['age'] >= 18,
            'User must be at least 18 years old',
            403
        );
}

`;