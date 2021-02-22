import { Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  @Field(type => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => String)
  @Column()
  email: string;

  @Field(type => String)
  @Column()
  password: string;

  @Field(type => String)
  @Column()
  avatarUrl: string;
}
