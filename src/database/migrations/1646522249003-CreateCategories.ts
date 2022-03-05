import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1646522249003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createTable(

        new Table({

          name: "categories",

          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              "name": "name",
              "type": "varchar(50)",
              "isUnique": true,
              "isNullable": false
            },
            {
              "name": "description",
              "type": "varchar(200)",
              "isUnique": false,
              "isNullable": true
            },
            {
              "name": "created_at",
              "type": "timestamp",
              "isUnique": false,
              "isNullable": false,
              "default": "now()"
            }

          ]

        })

      );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.dropTable("categories");

    }

}
