import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Registrydates {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
