export const EnsureExample01 = `
public static function demoEnsure(): ResultType
{
    return Result::Success(['age' => 17])
        ->ensure(
            fn($data) => $data['age'] >= 18,
            'User must be at least 18 years old',
            Result::HTTP_FORBIDDEN
        );
}

`;