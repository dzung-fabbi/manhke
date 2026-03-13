import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { SeoModule } from '../seo/seo.module';

@Module({
  imports: [SeoModule],
  controllers: [PagesController],
})
export class PagesModule {}
