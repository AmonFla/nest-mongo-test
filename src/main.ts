import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('MongDB Book REST API')
    .setDescription('API REST')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // Path for Swagger docs
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
