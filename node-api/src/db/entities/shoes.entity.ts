import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { TrueToSize } from './shoes.true-size.entity';

@Entity()
export class Shoes{
   
   @PrimaryGeneratedColumn("uuid")
   id: string;

   @Column({length: 50})
   name: string;

   @OneToOne(()=>TrueToSize, trueToSize=>trueToSize.shoes,{
      cascade: true
    })
    @JoinColumn()
   trueToSize: TrueToSize;
}