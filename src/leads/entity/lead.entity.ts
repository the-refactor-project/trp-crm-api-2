import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("leads")
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  channel: string;

  @Column()
  origin: string;

  @Column()
  referral: string;

  @Column({
    type: "date",
    default: () => "CURRENT_TIMESTAMP",
  })
  entryDate: Date;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  askedFor: string;

  @Column()
  comments: string;
}
