import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class People {
  @PrimaryColumn()
  first_name: string;

  @Column()
  second_name: string;

  @Column()
  last_name: string;

  @Column()
  second_last_name: string;
}
