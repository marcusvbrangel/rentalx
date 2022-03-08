import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSpecifications1646773128829 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createTable(

        new Table({

          name: "specifications",

          columns: [

            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },

            {
              name: "name",
              type: "varchar(50)",
              isUnique: true,
              isNullable: false,
            },

            {
              name: "description",
              type: "varchar(200)",
              isUnique: false,
              isNullable: false,
            },

            {
              name: "created_at",
              type: "timestamp",
              isUnique: false,
              isNullable: true,
              default: "now()",
            }

          ]

        })

      )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.dropTable("specifications");

    }

}
