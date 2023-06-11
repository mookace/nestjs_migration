import { MigrationInterface, QueryRunner } from "typeorm";

export class Newrelation1686478846030 implements MigrationInterface {
    name = 'Newrelation1686478846030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "profile" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_e850707b5c70fa49ea50ef2f59f" UNIQUE ("profile")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_e850707b5c70fa49ea50ef2f59f" FOREIGN KEY ("profile") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_e850707b5c70fa49ea50ef2f59f"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_e850707b5c70fa49ea50ef2f59f"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profile"`);
    }

}
