export const ContractChunk1 = `

class UseCase implements HandlerInterface {

    public function fetchSomething(): OperationOutcome {
        return Operation::success(['id' => 1, 'name' => ' alice '])
            ->withMetric('start_time', microtime(true))
            ->map(function($user) {
                $user['name'] = trim($user['name']);
                return $user;
            })
            ->ensure(
                fn($user) => !empty($user['name']),
                'Name cannot be empty',
                400
            )
            ->then(function($user) {
                return self::fetchUserStats($user['id'])
                    ->map(function($stats) use ($user) {
                        return array_merge($user, ['stats' => $stats]);
                    });
            })

            ->withMetric('end_time', microtime(true));
    } 
}
`;