import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class Identifications {
  @PrimaryColumn()
  identification_type_id: number;

  @Column()
  value: string;

  @Column()
  owner_type: string;

  @Column({ default: true })
  owner_id: number;
}
