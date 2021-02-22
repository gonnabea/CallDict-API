import { Field, Int } from '@nestjs/graphql';

export class User {
  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;

  @Field(type => String)
  avatarUrl: string;
}
