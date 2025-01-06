# NX3 Getting Started

NextJS là một framework React mã nguồn mở để xây dựng các ứng dụng web full-stack (được tạo và duy trì bởi Vercel). Bạn có thể sử dụng các thành phần React để xây dựng giao diện người dùng, và NextJS để thêm các tính năng và tối ưu hóa. Nó được xây dựng trên nền tảng của Server Components, cho phép bạn render các thành phần React từ server đến client. Điều này có nghĩa là các trang của bạn có thể tương tác và động hơn, trong khi vẫn nhanh và hiệu quả. Một trong những tính năng đáng chú ý của nó là NextJS App Router, giúp điều hướng trong ứng dụng của bạn. Bài viết này sẽ đi sâu vào NextJS App Router, các thành phần của nó, cách triển khai, và cung cấp một ví dụ mã và kết quả ngắn gọn.**

### Mục lục

1. [Tạo ứng dụng Next.js đầu tiên của bạn](#1)
2. [NextJS Scripts](#2)
3. [Thêm TypeScript vào NextJS](#3)
4. [Pages and Routes trong Next JS](#4)
5. [Links and Navigation trong Next JS](#5)
6. [Route Groups trong Next JS](#6)
7. [SEO trong Next JS](#7)
8. [API Routes trong Next JS](#8)
9. [Data fetching trong Next JS](#9)
10. [Requesting Data trong Next JS](#10)
11. [NextJS không có những tính năng nào?](#11)
12. [NextJS App router là gì?](#12)
13. [Kết luận](#13)
14. [Câu hỏi thường gặp - Bắt đầu với Next.js](#14)

<a name="1"></a>
### 1. Tạo ứng dụng Next.js đầu tiên của bạn

Dưới đây là bản dịch và tối ưu nội dung bạn yêu cầu:

**Tạo ứng dụng NextJS**

Để tạo một ứng dụng NextJS, bạn có thể làm theo các bước sau:

**Bước 1**: Cài đặt NodeJS nếu bạn chưa có. Mở terminal và chạy lệnh sau để tạo một ứng dụng Next.js mới:
```bash
npx create-next-app my-next-app
```

**Bước 2**: Trong quá trình cài đặt, bạn sẽ thấy các câu hỏi sau:
- Tên dự án của bạn là gì? `my-app`
- Bạn có muốn sử dụng TypeScript không? `No / Yes`
- Bạn có muốn sử dụng ESLint không? `No / Yes`
- Bạn có muốn sử dụng Tailwind CSS không? `No / Yes`
- Bạn có muốn sử dụng thư mục `src/` không? `No / Yes`
- Bạn có muốn sử dụng App Router không? (khuyến nghị) `No / Yes`
- Bạn có muốn tùy chỉnh alias import mặc định (@/*) không? `No / Yes`
- Alias import bạn muốn cấu hình là gì? `@/*`

**Bước 3**: Di chuyển vào thư mục ứng dụng mới tạo:
```bash
cd my-next-app
```

**Bước 4**: Khởi động server phát triển:
```bash
npm run dev
```

**Bước 5**: Mở trình duyệt và truy cập `http://localhost:3000` để xem ứng dụng Next.js của bạn đang chạy.

**NextJS Scripts**

Next.js cung cấp một số script để quản lý ứng dụng của bạn:
```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export",
    "lint": "next lint"
}
```
- `dev`: Khởi động server phát triển.
- `build`: Xây dựng ứng dụng sẵn sàng cho sản xuất.
- `start`: Khởi động server sản xuất sau khi xây dựng.
- `lint`: Chạy kiểm tra linting trên các tệp dự án Next.js của bạn bằng ESLint.
- `export`: Xuất ứng dụng dưới dạng trang tĩnh.

Hy vọng bản dịch và tối ưu này sẽ giúp bạn dễ dàng tạo và quản lý ứng dụng NextJS của mình! Nếu bạn có bất kỳ câu hỏi nào khác, đừng ngần ngại hỏi nhé.

<a name="2"></a>
### 2. NextJS Scripts


<a name="3"></a>
### 3. Thêm TypeScript vào NextJS

<a name="4"></a>
### 4. Pages and Routes trong Next JS

<a name="5"></a>
### 5. Links and Navigation trong Next JS

<a name="6"></a>
### 6. Route Groups trong Next JS

<a name="7"></a>
### 7. SEO trong Next JS

<a name="8"></a>
### 8. API Routes trong Next JS

<a name="9"></a>
### 9. Data fetching trong Next JS

<a name="10"></a>
### 10. Requesting Data trong Next JS

<a name="11"></a>
### 11. NextJS không có những tính năng nào?

<a name="12"></a>
### 12. NextJS App router là gì?

<a name="13"></a>
### 13. Kết luận

<a name="14"></a>
### 14. Câu hỏi thường gặp - Bắt đầu với Next.js


*Bài tiếp theo [NX3 Getting Started](session_03_Started.md)*