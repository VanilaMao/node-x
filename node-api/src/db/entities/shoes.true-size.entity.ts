import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Shoes } from './shoes.entity';

@Entity()
export class TrueToSize{
   
   @PrimaryGeneratedColumn("uuid")
   id: string;

   @Column("float")
   averageSize: number;

   @Column("float", { array: true })
   sizes: number[];

   @OneToOne(() => Shoes, shoes=>shoes.trueToSize)
   shoes: Shoes;
}
  