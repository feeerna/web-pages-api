import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class WebPagesClients {
  @PrimaryColumn()
  client_id: number;

  @Column()
  client_type: string;

  @Column()
  domain: string;

  @Column({ type: 'json', nullable: true })
  social_media: {};
}
