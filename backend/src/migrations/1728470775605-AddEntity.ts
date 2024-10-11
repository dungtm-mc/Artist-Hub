import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEntity1728470775605 implements MigrationInterface {
    name = 'AddEntity1728470775605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist_entity" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "artist_entity" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "artist_entity" ADD "bio" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist_entity" DROP COLUMN "bio"`);
        await queryRunner.query(`ALTER TABLE "artist_entity" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist_entity" ADD "email" character varying NOT NULL`);
    }

}
