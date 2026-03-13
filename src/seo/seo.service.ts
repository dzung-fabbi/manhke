import { Injectable } from '@nestjs/common';

export interface MetaTags {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

@Injectable()
export class SeoService {
  private readonly businessInfo = {
    name: 'Siêu thị Điện máy Thế',
    phone: '0974436333',
    email: 'hokinhdoanhleducthe@gmail.com',
    address: {
      street: 'xóm Trung Yên',
      commune: 'Xã Diễn Ngọc',
      district: 'Huyện Diễn Châu',
      province: 'Tỉnh Nghệ An',
      country: 'Việt Nam',
    },
    fullAddress: 'xóm Trung Yên, Xã Diễn Ngọc, Huyện Diễn Châu, Tỉnh Nghệ An, Việt Nam',
  };

  getBusinessInfo() {
    return this.businessInfo;
  }

  generateMetaTags(page: string): MetaTags {
    const baseUrl = process.env.BASE_URL || 'https://example.com';
    const metaConfig: Record<string, MetaTags> = {
      home: {
        title: 'Điện máy Thế - Điện Thoại, Máy Tính, Thiết Bị Điện Tử',
        description: 'Điện máy Thế chuyên cung cấp các sản phẩm điện tử chất lượng cao: điện thoại, máy tính, laptop, tablet, phụ kiện điện tử tại Diễn Châu, Nghệ An. Liên hệ: 0974436333',
        keywords: 'điện máy Thế, đồ điện tử, điện thoại, máy tính, laptop, tablet, phụ kiện điện tử, Diễn Châu, Nghệ An, mua điện thoại, mua laptop',
        ogTitle: 'Điện máy Thế - Điện Thoại, Máy Tính, Thiết Bị Điện Tử',
        ogDescription: 'Điện máy Thế chuyên cung cấp các sản phẩm điện tử chất lượng cao tại Diễn Châu, Nghệ An',
        ogImage: `${baseUrl}/images/og-image.jpg`,
        ogUrl: `${baseUrl}/trang-chu`,
        canonical: `${baseUrl}/trang-chu`,
      },
      about: {
        title: 'Giới Thiệu - Điện máy Thế',
        description: 'Tìm hiểu về Điện máy Thế - chuyên kinh doanh đồ điện tử tại Diễn Châu, Nghệ An. Với nhiều năm kinh nghiệm trong lĩnh vực điện tử, chúng tôi cam kết mang đến sản phẩm chất lượng và dịch vụ tốt nhất.',
        keywords: 'giới thiệu, về chúng tôi, điện máy Thế, doanh nghiệp điện tử, Diễn Châu, Nghệ An',
        ogTitle: 'Giới Thiệu - Điện máy Thế',
        ogDescription: 'Tìm hiểu về Điện máy Thế - chuyên kinh doanh đồ điện tử tại Diễn Châu, Nghệ An',
        ogImage: `${baseUrl}/images/og-image.jpg`,
        ogUrl: `${baseUrl}/gioi-thieu`,
        canonical: `${baseUrl}/gioi-thieu`,
      },
      products: {
        title: 'Sản Phẩm - Điện máy Thế',
        description: 'Khám phá các sản phẩm điện tử đa dạng tại Điện máy Thế: điện thoại thông minh, laptop, máy tính bảng, phụ kiện điện tử và nhiều sản phẩm khác. Giá cả hợp lý, chất lượng đảm bảo.',
        keywords: 'sản phẩm điện tử, điện máy Thế, điện thoại, laptop, máy tính, tablet, phụ kiện, mua sắm điện tử',
        ogTitle: 'Sản Phẩm - Điện máy Thế',
        ogDescription: 'Khám phá các sản phẩm điện tử đa dạng với giá cả hợp lý tại Điện máy Thế',
        ogImage: `${baseUrl}/images/og-image.jpg`,
        ogUrl: `${baseUrl}/san-pham`,
        canonical: `${baseUrl}/san-pham`,
      },
      contact: {
        title: 'Liên Hệ - Điện máy Thế',
        description: `Liên hệ với Điện máy Thế tại ${this.businessInfo.fullAddress}. Điện thoại: ${this.businessInfo.phone}, Email: ${this.businessInfo.email}. Chúng tôi luôn sẵn sàng phục vụ bạn.`,
        keywords: 'liên hệ, địa chỉ, điện thoại, email, điện máy Thế, Diễn Châu, Nghệ An',
        ogTitle: 'Liên Hệ - Điện máy Thế',
        ogDescription: `Liên hệ với Điện máy Thế tại ${this.businessInfo.fullAddress}`,
        ogImage: `${baseUrl}/images/og-image.jpg`,
        ogUrl: `${baseUrl}/lien-he`,
        canonical: `${baseUrl}/lien-he`,
      },
    };

    return metaConfig[page] || metaConfig.home;
  }

  generateOrganizationStructuredData(): StructuredData {
    const baseUrl = process.env.BASE_URL || 'https://example.com';
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: this.businessInfo.name,
      image: `${baseUrl}/logo.png`,
      '@id': baseUrl,
      url: baseUrl,
      telephone: this.businessInfo.phone,
      email: this.businessInfo.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: this.businessInfo.address.street,
        addressLocality: `${this.businessInfo.address.commune}, ${this.businessInfo.address.district}`,
        addressRegion: this.businessInfo.address.province,
        addressCountry: this.businessInfo.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        // Có thể thêm tọa độ GPS nếu có
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '21:30',
      },
      priceRange: '$$',
    };
  }

  generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>): StructuredData {
    const baseUrl = process.env.BASE_URL || 'https://example.com';
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${baseUrl}${item.url}`,
      })),
    };
  }

  generateWebsiteStructuredData(): StructuredData {
    const baseUrl = process.env.BASE_URL || 'https://example.com';
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: this.businessInfo.name,
      url: baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/tim-kiem?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };
  }

  generateSitemap(): string {
    const baseUrl = process.env.BASE_URL || 'https://example.com';
    const pages = [
      { url: '/trang-chu', changefreq: 'daily', priority: '1.0' },
      { url: '/gioi-thieu', changefreq: 'monthly', priority: '0.8' },
      { url: '/san-pham', changefreq: 'weekly', priority: '0.9' },
      { url: '/lien-he', changefreq: 'monthly', priority: '0.7' },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

    return sitemap;
  }

  generateRobotsTxt(): string {
    const baseUrl = process.env.BASE_URL || 'https://example.com';
    return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
  }
}
