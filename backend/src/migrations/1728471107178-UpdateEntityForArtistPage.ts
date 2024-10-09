import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntityForArtistPage1728471107178 implements MigrationInterface {
    name = 'UpdateEntityForArtistPage1728471107178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist_page_entity" ADD "artistId" integer`);
        await queryRunner.query(`ALTER TABLE "artist_page_entity" ADD CONSTRAINT "UQ_0d42a66cdeb2f848197a285beda" UNIQUE ("artistId")`);
        await queryRunner.query(`ALTER TABLE "artist_page_entity" ADD CONSTRAINT "FK_0d42a66cdeb2f848197a285beda" FOREIGN KEY ("artistId") REFERENCES "artist_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist_page_entity" DROP CONSTRAINT "FK_0d42a66cdeb2f848197a285beda"`);
        await queryRunner.query(`ALTER TABLE "artist_page_entity" DROP CONSTRAINT "UQ_0d42a66cdeb2f848197a285beda"`);
        await queryRunner.query(`ALTER TABLE "artist_page_entity" DROP COLUMN "artistId"`);
    }

}
