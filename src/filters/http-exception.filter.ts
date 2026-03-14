import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { SeoService } from '../seo/seo.service';

@Catch(NotFoundException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Tạo instance SeoService
    const seoService = new SeoService();

    const metaTags = seoService.generateMetaTags('notfound');
    const businessInfo = seoService.getBusinessInfo();
    const organizationData = seoService.generateOrganizationStructuredData();
    const breadcrumbs = seoService.generateBreadcrumbStructuredData([
      { name: 'Trang chủ', url: '/trang-chu' },
      { name: '404 - Không tìm thấy', url: request.url },
    ]);

    response.status(404).render('notfound', {
      metaTags,
      businessInfo,
      structuredData: {
        organization: organizationData,
        breadcrumbs,
      },
      page: 'notfound',
    });
  }
}
