export const SerializeActionExample02 = `
$json = $result->toJson(fn($outcome) => [
    'ok' => $outcome->isSuccess(),
    'code' => $outcome->code,
    'payload' => $outcome->result ?? $outcome->error,
    '_meta' => $outcome->meta
]);
`;