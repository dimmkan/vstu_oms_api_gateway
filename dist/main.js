"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('VSTU OMS project')
        .setDescription('VSTU OMS project API description')
        .setVersion('1.0')
        .addTag('auth')
        .addTag('user')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('documents', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map