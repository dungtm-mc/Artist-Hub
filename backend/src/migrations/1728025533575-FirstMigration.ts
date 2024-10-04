import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1728025533575 implements MigrationInterface {
    name = 'FirstMigration1728025533575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."fan_entity_channel_enum" AS ENUM('TikTok', 'Instagram', 'Youtube', 'X')`);
        await queryRunner.query(`CREATE TYPE "public"."fan_entity_type_enum" AS ENUM('email', 'sms')`);
        await queryRunner.query(`CREATE TABLE "fan_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "channel" "public"."fan_entity_channel_enum" NOT NULL, "type" "public"."fan_entity_type_enum" NOT NULL, "location" character varying NOT NULL, "campaignId" integer, CONSTRAINT "PK_1970b502b9e8289916482a12452" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "campaign_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "artistId" integer, CONSTRAINT "PK_9e02b1f09bf92b8ce7b80e4fb7a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "artist_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "labelId" integer, "managerId" integer, CONSTRAINT "PK_c6ec16b57b60c8096406808021d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "label_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "dewcription" character varying NOT NULL, "managerId" integer, CONSTRAINT "PK_6655d360cb34f17da3b55cd4194" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_entity_role_enum" AS ENUM('admin', 'label manager', 'artist manager')`);
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "role" "public"."user_entity_role_enum" NOT NULL, "labelId" integer, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "fan_entity" ADD CONSTRAINT "FK_0c6187e9817c7849bfc5c95719d" FOREIGN KEY ("campaignId") REFERENCES "campaign_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "campaign_entity" ADD CONSTRAINT "FK_88c663b5c7365a6d9d68212eb57" FOREIGN KEY ("artistId") REFERENCES "artist_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "artist_entity" ADD CONSTRAINT "FK_d97767520b457247846e6016a9d" FOREIGN KEY ("labelId") REFERENCES "label_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "artist_entity" ADD CONSTRAINT "FK_d1c7218df2bad5ee129818375f2" FOREIGN KEY ("managerId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "label_entity" ADD CONSTRAINT "FK_ff032793b20922729324023648f" FOREIGN KEY ("managerId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "FK_9c2c03290f379c9ecb5ab06acb1" FOREIGN KEY ("labelId") REFERENCES "label_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "FK_9c2c03290f379c9ecb5ab06acb1"`);
        await queryRunner.query(`ALTER TABLE "label_entity" DROP CONSTRAINT "FK_ff032793b20922729324023648f"`);
        await queryRunner.query(`ALTER TABLE "artist_entity" DROP CONSTRAINT "FK_d1c7218df2bad5ee129818375f2"`);
        await queryRunner.query(`ALTER TABLE "artist_entity" DROP CONSTRAINT "FK_d97767520b457247846e6016a9d"`);
        await queryRunner.query(`ALTER TABLE "campaign_entity" DROP CONSTRAINT "FK_88c663b5c7365a6d9d68212eb57"`);
        await queryRunner.query(`ALTER TABLE "fan_entity" DROP CONSTRAINT "FK_0c6187e9817c7849bfc5c95719d"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
        await queryRunner.query(`DROP TYPE "public"."user_entity_role_enum"`);
        await queryRunner.query(`DROP TABLE "label_entity"`);
        await queryRunner.query(`DROP TABLE "artist_entity"`);
        await queryRunner.query(`DROP TABLE "campaign_entity"`);
        await queryRunner.query(`DROP TABLE "fan_entity"`);
        await queryRunner.query(`DROP TYPE "public"."fan_entity_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."fan_entity_channel_enum"`);
    }

}
