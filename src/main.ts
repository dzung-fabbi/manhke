import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Đăng ký helper cho JSON - sử dụng instance Handlebars từ hbs
  hbs.handlebars.registerHelper('json', function (context) {
    return JSON.stringify(context);
  });

  hbs.handlebars.registerHelper('eq', function (a, b) {
    return a === b;
  });

  // Cấu hình view engine (Handlebars)
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  // Cấu hình static files
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/',
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
