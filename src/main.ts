import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('VSTU OMS project')
    .setDescription('VSTU OMS project API description')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documents', app, document);

  await app.listen(3000);
}
bootstrap();
