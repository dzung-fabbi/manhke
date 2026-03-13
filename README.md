# Website Siêu thị Điện máy Thế

Dự án NestJS với hỗ trợ SEO tối ưu cho website giới thiệu Siêu thị Điện máy Thế - chuyên kinh doanh đồ điện tử.

## Thông tin doanh nghiệp

- **Tên:** Siêu thị Điện máy Thế
- **Điện thoại:** 0974436333
- **Email:** hokinhdoanhleducthe@gmail.com
- **Địa chỉ:** xóm Trung Yên, Xã Diễn Ngọc, Huyện Diễn Châu, Tỉnh Nghệ An, Việt Nam
- **Giờ mở cửa:** 8:00 - 21:30 hàng ngày (kể cả ngày lễ và chủ nhật)

## Tính năng

- ✅ SEO tối ưu với meta tags, Open Graph, Twitter Cards
- ✅ Structured Data (JSON-LD) cho Organization, Breadcrumbs, Website
- ✅ Sitemap.xml tự động
- ✅ Robots.txt
- ✅ Responsive design
- ✅ Server-side rendering với Handlebars
- ✅ Floating Action Buttons (Gọi điện, Zalo)
- ✅ Hình ảnh SVG về điện máy
- ✅ Animations và hiệu ứng

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy ứng dụng ở chế độ development
npm run start:dev

# Build ứng dụng
npm run build

# Chạy ứng dụng ở chế độ production
npm run start:prod
```

## Cấu trúc dự án

```
.
├── src/
│   ├── main.ts                 # Entry point
│   ├── app.module.ts           # Root module
│   ├── app.controller.ts       # Root controller
│   ├── app.service.ts          # Root service
│   ├── seo/                    # SEO module
│   │   ├── seo.module.ts
│   │   └── seo.service.ts     # Service xử lý SEO
│   └── pages/                  # Pages module
│       ├── pages.module.ts
│       └── pages.controller.ts # Controller các trang
├── views/                      # Handlebars templates
│   ├── home.hbs               # Trang chủ
│   ├── about.hbs              # Giới thiệu
│   ├── products.hbs           # Sản phẩm
│   └── contact.hbs            # Liên hệ
├── public/                     # Static files
│   ├── logo.png               # Logo TC (PNG)
│   ├── logo.svg               # Logo TC (SVG fallback)
│   ├── favicon.svg            # Favicon
│   └── site.webmanifest       # Web manifest
└── package.json
```

## Các trang

- `/trang-chu` - Trang chủ
- `/gioi-thieu` - Giới thiệu về siêu thị
- `/san-pham` - Danh sách sản phẩm
- `/lien-he` - Thông tin liên hệ
- `/sitemap.xml` - Sitemap
- `/robots.txt` - Robots.txt

## SEO Features

### Meta Tags
- Title, Description, Keywords
- Canonical URLs
- Open Graph tags
- Twitter Card tags

### Structured Data (JSON-LD)
- Organization schema
- BreadcrumbList schema
- WebSite schema với SearchAction

### Sitemap & Robots
- Tự động generate sitemap.xml
- Robots.txt với sitemap reference

## Logo

Website sử dụng logo TC (PNG) với fallback về SVG:
- File PNG: `public/logo.png`
- File SVG fallback: `public/logo.svg`

**Lưu ý:** Đặt file `logo.png` vào thư mục `public/` để logo hiển thị đúng.

## Cấu hình

Tạo file `.env` để cấu hình:

```env
PORT=3000
BASE_URL=https://yourdomain.com
```

## License

MIT
