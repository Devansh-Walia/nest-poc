import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColummnCapPoke1686137240897 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'pokemon',
      new TableColumn({
        name: 'cap_poke',
        isArray: true,
        isNullable: true,
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'trainer',
      new TableColumn({
        name: 'cap_poke',
        isArray: true,
        isNullable: true,
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('capturedpoke');
  }
}
