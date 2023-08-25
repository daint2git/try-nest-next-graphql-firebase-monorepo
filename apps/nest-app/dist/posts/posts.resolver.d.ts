import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
export declare class PostsResolver {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPost(createPostInput: CreatePostInput): {
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
    updatePost(updatePostInput: UpdatePostInput): string;
    removePost(id: string): string;
}
