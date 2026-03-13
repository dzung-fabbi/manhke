import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { SeoService } from '../seo/seo.service';

@Controller()
export class PagesController {
  constructor(private readonly seoService: SeoService) {}

  @Get('trang-chu')
  home(@Res() res: Response) {
    const metaTags = this.seoService.generateMetaTags('home');
    const businessInfo = this.seoService.getBusinessInfo();
    const organizationData = this.seoService.generateOrganizationStructuredData();
    const websiteData = this.seoService.generateWebsiteStructuredData();
    const breadcrumbs = this.seoService.generateBreadcrumbStructuredData([
      { name: 'Trang chủ', url: '/trang-chu' },
    ]);

    return res.render('home', {
      metaTags,
      businessInfo,
      structuredData: {
        organization: organizationData,
        website: websiteData,
        breadcrumbs,
      },
      page: 'home',
    });
  }

  @Get('gioi-thieu')
  about(@Res() res: Response) {
    const metaTags = this.seoService.generateMetaTags('about');
    const businessInfo = this.seoService.getBusinessInfo();
    const organizationData = this.seoService.generateOrganizationStructuredData();
    const breadcrumbs = this.seoService.generateBreadcrumbStructuredData([
      { name: 'Trang chủ', url: '/trang-chu' },
      { name: 'Giới thiệu', url: '/gioi-thieu' },
    ]);

    return res.render('about', {
      metaTags,
      businessInfo,
      structuredData: {
        organization: organizationData,
        breadcrumbs,
      },
      page: 'about',
    });
  }

  @Get('san-pham')
  products(@Res() res: Response) {
    const metaTags = this.seoService.generateMetaTags('products');
    const businessInfo = this.seoService.getBusinessInfo();
    const organizationData = this.seoService.generateOrganizationStructuredData();
    const breadcrumbs = this.seoService.generateBreadcrumbStructuredData([
      { name: 'Trang chủ', url: '/trang-chu' },
      { name: 'Sản phẩm', url: '/san-pham' },
    ]);

    // Danh sách sản phẩm mẫu
    const products = [
      {
        name: 'Điện Thoại Thông Minh',
        description: 'Các dòng điện thoại thông minh đa dạng từ các thương hiệu uy tín',
        category: 'Điện thoại',
      },
      {
        name: 'Laptop & Máy Tính',
        description: 'Laptop, máy tính để bàn phù hợp cho công việc và giải trí',
        category: 'Máy tính',
      },
      {
        name: 'Máy Tính Bảng',
        description: 'Tablet đa dạng kích thước và tính năng',
        category: 'Tablet',
      },
      {
        name: 'Phụ Kiện Điện Tử',
        description: 'Tai nghe, sạc pin, ốp lưng và nhiều phụ kiện khác',
        category: 'Phụ kiện',
      },
    ];

    return res.render('products', {
      metaTags,
      businessInfo,
      structuredData: {
        organization: organizationData,
        breadcrumbs,
      },
      products,
      page: 'products',
    });
  }

  @Get('lien-he')
  contact(@Res() res: Response) {
    const metaTags = this.seoService.generateMetaTags('contact');
    const businessInfo = this.seoService.getBusinessInfo();
    const organizationData = this.seoService.generateOrganizationStructuredData();
    const breadcrumbs = this.seoService.generateBreadcrumbStructuredData([
      { name: 'Trang chủ', url: '/trang-chu' },
      { name: 'Liên hệ', url: '/lien-he' },
    ]);

    return res.render('contact', {
      metaTags,
      businessInfo,
      structuredData: {
        organization: organizationData,
        breadcrumbs,
      },
      page: 'contact',
    });
  }

  @Get('sitemap.xml')
  sitemap(@Res() res: Response) {
    const sitemap = this.seoService.generateSitemap();
    res.setHeader('Content-Type', 'application/xml');
    return res.send(sitemap);
  }

  @Get('robots.txt')
  robots(@Res() res: Response) {
    const robots = this.seoService.generateRobotsTxt();
    res.setHeader('Content-Type', 'text/plain');
    return res.send(robots);
  }
}
