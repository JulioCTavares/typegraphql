import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTask1650914139755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tasks',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'title',
                        type: 'varchar(255)',
                        isNullable: false
                    },
                    {
                        name: 'description',
                        type: 'varchar(255)',
                        isNullable: false
                    },
                    {
                        name: 'is_complete',
                        type: 'boolean',
                        default: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                      },
                      {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                      },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tasks');
    }

}
