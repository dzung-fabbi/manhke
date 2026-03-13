import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeoModule } from './seo/seo.module';
import { PagesModule } from './pages/pages.module';

@Module({
  imports: [SeoModule, PagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
