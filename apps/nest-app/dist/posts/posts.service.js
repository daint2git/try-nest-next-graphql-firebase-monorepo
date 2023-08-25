"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const postsData = [
    { id: '1', title: 'title 1', description: 'description 1' },
    { id: '2', title: 'title 2', description: 'description 2' },
];
let PostsService = class PostsService {
    create(createPostInput) {
        const newPost = { ...createPostInput, id: String(Date.now()) };
        postsData.push(newPost);
        return newPost;
    }
    findAll() {
        return postsData;
    }
    findOne(id) {
        return postsData.find((post) => post.id === id);
    }
    update(id, updatePostInput) {
        return `This action updates a #${id} post`;
    }
    remove(id) {
        return `This action removes a #${id} post`;
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)()
], PostsService);
//# sourceMappingURL=posts.service.js.map