import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
export declare class PostsService {
    create(createPostInput: CreatePostInput): {
        id: string;
        title: string;
        description: string;
    };
    findAll(): {
        id: string;
        title: string;
        description: string;
    }[];
    findOne(id: string): {
        id: string;
        title: string;
        description: string;
    };
    update(id: string, updatePostInput: UpdatePostInput): string;
    remove(id: string): string;
}
