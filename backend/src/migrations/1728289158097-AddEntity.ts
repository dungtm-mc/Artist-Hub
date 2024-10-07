import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEntity1728289158097 implements MigrationInterface {
    name = 'AddEntity1728289158097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "price" integer NOT NULL, "customers" integer NOT NULL, "revenues" integer NOT NULL, "artistId" integer, CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_entity" ADD CONSTRAINT "FK_2781ee53d44a6557295f8a9447d" FOREIGN KEY ("artistId") REFERENCES "artist_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_entity" DROP CONSTRAINT "FK_2781ee53d44a6557295f8a9447d"`);
        await queryRunner.query(`DROP TABLE "product_entity"`);
    }

}
