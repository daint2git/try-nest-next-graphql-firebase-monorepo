import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

const postsData = [
  { id: '1', title: 'title 1', description: 'description 1' },
  { id: '2', title: 'title 2', description: 'description 2' },
];

@Injectable()
export class PostsService {
  create(createPostInput: CreatePostInput) {
    const newPost = { ...createPostInput, id: String(Date.now()) };

    postsData.push(newPost);

    return newPost;
  }

  findAll() {
    return postsData;
  }

  findOne(id: string) {
    return postsData.find((post) => post.id === id);
  }

  update(id: string, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
