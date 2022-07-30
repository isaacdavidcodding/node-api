import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarSites1659023363703 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Sites',
        columns: [
          {
            name: 'id',
            type: 'string',
            isPrimary: true,
            isNullable: false
          },
          {
            name: 'endereco',
            type: 'string',
            isNullable: false
          },
          {
            name: 'descricao',
            type: 'string',
            isNullable: true
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Sites')
  }
}
