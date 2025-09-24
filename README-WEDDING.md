# Trang Web Cưới Thái & Vân

Trang web cưới được xây dựng với Next.js, Tailwind CSS, và Framer Motion.

## 🎉 Tính năng chính

- ✨ **Responsive Design**: Hoạt động tốt trên mọi thiết bị
- 🎭 **Animations**: Hiệu ứng chuyển động mượt mà với Framer Motion
- 📱 **Mobile First**: Thiết kế ưu tiên mobile
- 🎨 **Modern UI**: Giao diện hiện đại và đẹp mắt
- 📅 **Calendar Integration**: Tạo và tải file iCal cho sự kiện
- 🖼️ **Photo Gallery**: Thư viện ảnh với lightbox
- 💌 **Wishes System**: Hệ thống gửi lời chúc
- 💳 **Gift Information**: Thông tin chuyển khoản mừng cưới

## 🏗️ Cấu trúc dự án

```
├── app/                    # Next.js App Router
│   ├── globals.css        # CSS toàn cục
│   ├── layout.tsx         # Layout chính
│   └── page.tsx           # Trang chủ
├── components/
│   ├── sections/          # Các section chính
│   │   ├── header.tsx     # Header với navigation
│   │   ├── hero.tsx       # Hero section
│   │   ├── couple.tsx     # Thông tin cặp đôi
│   │   ├── events.tsx     # Sự kiện cưới
│   │   ├── gallery.tsx    # Thư viện ảnh
│   │   ├── wishes.tsx     # Lời chúc
│   │   ├── gift.tsx       # Thông tin mừng cưới
│   │   └── footer.tsx     # Footer
│   └── ui/                # UI components
│       ├── button.tsx     # Button component
│       ├── input.tsx      # Input component
│       ├── textarea.tsx   # Textarea component
│       └── modal.tsx      # Modal component
├── lib/
│   ├── constants/         # Dữ liệu constants
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
└── public/
    └── images/            # Hình ảnh tĩnh
```

## 🚀 Cài đặt và chạy

1. **Cài đặt dependencies:**

```bash
npm install
```

2. **Chạy development server:**

```bash
npm run dev
```

3. **Build production:**

```bash
npm run build
```

4. **Start production server:**

```bash
npm start
```

## 📝 Tùy chỉnh nội dung

### 1. Thông tin cặp đôi

Chỉnh sửa file `lib/constants/index.ts`:

```typescript
export const COUPLE_INFO: Couple = {
  groom: {
    name: "Thái",
    fullName: "Bùi Văn Thái",
    fatherName: "Bùi Văn Khoa",
    motherName: "Nguyễn Thị Quyên",
    image: "/images/groom.jpg",
  },
  bride: {
    name: "Vân",
    fullName: "Trần Thị Vân",
    fatherName: "Trần Văn Đông",
    motherName: "Nguyễn Thị Thoa",
    image: "/images/bride.jpg",
  },
  weddingDate: "2025-10-12",
  engagementDate: "2025-08-15",
};
```

### 2. Sự kiện cưới

Cập nhật `WEDDING_EVENTS` trong cùng file:

```typescript
export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: "le-vu-quy",
    title: "Lễ Vu Quy",
    date: "2025-10-12",
    time: "09:30",
    location: "Nhà Cô Dâu",
    address: "Địa chỉ của bạn",
    lat: 20.8449,
    lng: 106.6881,
  },
  // ... thêm sự kiện khác
];
```

### 3. Thông tin chuyển khoản

Cập nhật `GIFT_INFO`:

```typescript
export const GIFT_INFO: GiftInfo = {
  groomAccount: {
    bankName: "Tên ngân hàng",
    accountName: "Tên tài khoản",
    accountNumber: "Số tài khoản",
    qrCode: "/images/qr-groom.jpg",
  },
  brideAccount: {
    bankName: "Tên ngân hàng",
    accountName: "Tên tài khoản",
    accountNumber: "Số tài khoản",
    qrCode: "/images/qr-bride.jpg",
  },
};
```

### 4. Thêm ảnh

- Đặt ảnh vào thư mục `public/images/`
- Cập nhật đường dẫn ảnh trong constants
- Ảnh nên có kích thước phù hợp để tối ưu performance

## 🎨 Tùy chỉnh giao diện

### Màu sắc

Chỉnh sửa file `app/globals.css` để thay đổi màu chủ đạo:

```css
:root {
  --color-primary: #ec4899; /* pink-500 */
  --color-secondary: #f43f5e; /* rose-500 */
}
```

### Fonts

Thay đổi font trong `app/layout.tsx`:

```typescript
import { Inter, Dancing_Script } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });
```

## 🔧 Tích hợp API

### Lời chúc (Wishes)

Trong file `components/sections/wishes.tsx`, thay thế phần TODO:

```typescript
const onSubmit = async (data: WishFormData) => {
  try {
    const response = await fetch("/api/wishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Xử lý thành công
    }
  } catch (error) {
    // Xử lý lỗi
  }
};
```

### RSVP

Tương tự, tạo API endpoint cho RSVP trong `app/api/rsvp/route.ts`.

## 📱 SEO và Performance

### Metadata

Đã cấu hình sẵn trong `app/layout.tsx`:

- Open Graph tags
- Twitter Card
- Structured data

### Images

- Sử dụng Next.js Image component để tối ưu
- Thêm alt text cho accessibility
- Sử dụng WebP format khi có thể

## 🚀 Deploy

### Vercel (Khuyên dùng)

1. Push code lên GitHub
2. Kết nối với Vercel
3. Deploy tự động

### Netlify

1. Build project: `npm run build`
2. Upload thư mục `out` lên Netlify

### Custom Server

1. Build: `npm run build`
2. Start: `npm start`

## 📞 Hỗ trợ

Nếu bạn cần hỗ trợ hoặc có thắc mắc, vui lòng:

1. Kiểm tra documentation của Next.js
2. Xem các ví dụ trong thư mục `components/`
3. Tham khảo Tailwind CSS documentation

## 🎊 Chúc mừng!

Chúc bạn có một đám cưới thật hạnh phúc và trang web thật đẹp! ❤️

---

Made with ❤️ using Next.js, Tailwind CSS, and Framer Motion
