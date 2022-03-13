import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1647133626806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createTable(

        new Table({

          "name": "users",

          "columns": [

            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },

            {
              name: "name",
              type: "varchar(50)",
              isUnique: false,
              isNullable: false
            },

            {
              name: "username",
              type: "varchar(50)",
              isUnique: true,
              isNullable: false
            },

            {
              name: "password",
              type: "varchar(50)",
              isUnique: true,
              isNullable: false
            },

            {
              name: "email",
              type: "varchar(80)",
              isUnique: true,
              isNullable: true
            },

            {
              name: "driver_licence",
              type: "varchar(20)",
              isUnique: true,
              isNullable: false
            },

            {
              name: "isAdmin",
              type: "boolean",
              default: false
            },

            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            }

          ]

        })

      )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.dropTable("users");

    }

}
