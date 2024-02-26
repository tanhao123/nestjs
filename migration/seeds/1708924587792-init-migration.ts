import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1708924587792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("INSERT INTO test.user VALUES ('3', 'test seed', 'last name', '1');");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
