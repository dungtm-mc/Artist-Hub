import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1727681379727 implements MigrationInterface {
    name = 'FirstMigration1727681379727'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('user', 'admin', 'manager')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "avatar" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`INSERT INTO "user" (email, password, name, avatar, role) VALUES ("", "", "", "", "")`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    }

}
