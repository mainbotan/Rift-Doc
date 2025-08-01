export const Model = `
const NAME = 'tenants';
const VERSION = '1.1.7';

protected function schema(): void {
    $this->table->field('uid')
        ->type(Types::varchar(32))
        ->nullable(false)
        ->affirm();
}
`;