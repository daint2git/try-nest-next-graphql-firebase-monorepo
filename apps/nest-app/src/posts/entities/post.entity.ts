import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => String, { description: 'Title' })
  id: string;

  @Field(() => String, { description: 'Title' })
  title: string;

  @Field(() => String, { description: 'Description' })
  description: string;
}
