import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class Companies {
  @PrimaryColumn()
  name: string;

  @Column()
  tradename: string;
}
