import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEntityForWidget1728471005725 implements MigrationInterface {
    name = 'AddEntityForWidget1728471005725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "artist_page_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "hasAIAssistant" boolean NOT NULL, "editMode" boolean NOT NULL, CONSTRAINT "PK_082f1712071a13d7dcb9e477ba1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."widget_entity_type_enum" AS ENUM('fans', 'social', 'stream', 'sale', 'insights')`);
        await queryRunner.query(`CREATE TABLE "widget_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "type" "public"."widget_entity_type_enum" NOT NULL, "datasource" character varying(100) NOT NULL, "artistPageId" integer, CONSTRAINT "PK_9f7c9040d7436300c3eb8849850" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "widget_entity" ADD CONSTRAINT "FK_238751a8560e80d9abb4bbfeefd" FOREIGN KEY ("artistPageId") REFERENCES "artist_page_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "widget_entity" DROP CONSTRAINT "FK_238751a8560e80d9abb4bbfeefd"`);
        await queryRunner.query(`DROP TABLE "widget_entity"`);
        await queryRunner.query(`DROP TYPE "public"."widget_entity_type_enum"`);
        await queryRunner.query(`DROP TABLE "artist_page_entity"`);
    }

}
