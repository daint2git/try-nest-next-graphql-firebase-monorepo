"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: 'http://localhost:3000',
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            allowedHeaders: 'Content-Type, Accept, Authorization',
            credentials: true,
        },
    });
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map