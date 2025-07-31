export const MergeExample01 = `
public static function demoMerge(): ResultType
{
    $userData = Result::Success(['id' => 1, 'name' => 'Alice']);
    $userStats = Result::Success(['logins' => 42, 'last_login' => '2023-01-01']);

    return $userData->merge($userStats, function($data, $stats) {
        return array_merge($data, ['stats' => $stats]);
    });
}
`;