import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRelation21728545506738 implements MigrationInterface {
    name = 'UpdateRelation21728545506738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist_entity" ADD "pageId" integer`);
        await queryRunner.query(`ALTER TABLE "artist_entity" ADD CONSTRAINT "UQ_66b2ebf95bcc3837a7ac4804a3f" UNIQUE ("pageId")`);
        await queryRunner.query(`ALTER TABLE "artist_entity" ADD CONSTRAINT "FK_66b2ebf95bcc3837a7ac4804a3f" FOREIGN KEY ("pageId") REFERENCES "artist_page_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist_entity" DROP CONSTRAINT "FK_66b2ebf95bcc3837a7ac4804a3f"`);
        await queryRunner.query(`ALTER TABLE "artist_entity" DROP CONSTRAINT "UQ_66b2ebf95bcc3837a7ac4804a3f"`);
        await queryRunner.query(`ALTER TABLE "artist_entity" DROP COLUMN "pageId"`);
    }

}
