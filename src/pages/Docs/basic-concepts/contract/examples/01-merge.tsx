export const MergeExample01 = `
public static function demoMerge(): OperationOutcome
{
    $userData = Operation::success(['id' => 1, 'name' => 'Alice']);
    $userStats = Operation::success(['logins' => 42, 'last_login' => '2023-01-01']);

    return $userData->merge($userStats, function($data, $stats) {
        return array_merge($data, ['stats' => $stats]);
    });
}
`;