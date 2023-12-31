import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  description: string;
}
