import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRelation1728544039371 implements MigrationInterface {
    name = 'UpdateRelation1728544039371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist_page_entity" DROP CONSTRAINT "FK_0d42a66cdeb2f848197a285beda"`);
        await queryRunner.query(`ALTER TABLE "artist_page_entity" DROP CONSTRAINT "UQ_0d42a66cdeb2f848197a285beda"`);
        await queryRunner.query(`ALTER TABLE "artist_page_entity" DROP COLUMN "artistId"`);
        await queryRunner.query(`ALTER TABLE "widget_entity" ALTER COLUMN "datasource" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "widget_entity" ALTER COLUMN "datasource" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist_page_entity" ADD "artistId" integer`);
        await queryRunner.query(`ALTER TABLE "artist_page_entity" ADD CONSTRAINT "UQ_0d42a66cdeb2f848197a285beda" UNIQUE ("artistId")`);
        await queryRunner.query(`ALTER TABLE "artist_page_entity" ADD CONSTRAINT "FK_0d42a66cdeb2f848197a285beda" FOREIGN KEY ("artistId") REFERENCES "artist_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
