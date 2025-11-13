# NX21 Meta data

### Trong HTML
Metadata là dữ liệu cung cấp thông tin về các dữ liệu khác. Trong ngữ cảnh của web và phát triển ứng dụng, metadata thường được sử dụng để cung cấp thông tin về nội dung của trang web hoặc ứng dụng. Metadata có thể bao gồm các thông tin như tiêu đề trang, mô tả, từ khóa, tác giả, và nhiều thông tin khác giúp các công cụ tìm kiếm hiểu và xếp hạng trang web của bạn.

Ví dụ, trong HTML, bạn có thể sử dụng các thẻ `<meta>` để thêm metadata vào trang web của mình:
```html
<head>
  <title>Trang chủ</title>
  <meta name="description" content="Đây là trang chủ của tôi" />
  <meta name="keywords" content="Next.js, React, SEO" />
  <meta name="author" content="Tên của bạn" />
</head>
```

Metadata không chỉ giúp cải thiện SEO (tối ưu hóa công cụ tìm kiếm) mà còn cung cấp thông tin hữu ích cho các trình duyệt và các dịch vụ khác khi truy cập trang web của bạn.


### Trong Nextjs

Trong Next.js, bạn có thể sử dụng hook `import type { Metadata } from "next";` để định nghĩa metadata cho các trang của mình. Dưới đây là một ví dụ về cách sử dụng hook này:

```jsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Đây là trang chủ của tôi',
  keywords: ['Next.js', 'React', 'SEO'],
};

export default function Home() {
  return (
    <div>
      <h1>Chào mừng đến với trang chủ của tôi</h1>
      <p>Đây là trang chủ của tôi, nơi bạn có thể tìm thấy thông tin về Next.js và React.</p>
    </div>
  );
}
```

Trong ví dụ này, chúng ta đã định nghĩa một đối tượng `metadata` chứa các thông tin như tiêu đề, mô tả và từ khóa của trang. Sau đó, chúng ta có thể sử dụng đối tượng này trong các thành phần của trang để cung cấp thông tin metadata cho các công cụ tìm kiếm và trình duyệt.

### Sửa file src/app/Layout.tsx

```
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'; 
import Header from "../components/Header";
import { Container } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to my HomePage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body className={inter.className}>
      <Container>
        <Header />
        {children}
      </Container>
      </body>
    </html>
  );
}
```

### Tạo file app/admin/users/layout.tsx 

```
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Page",
  description: "Welcome to my User Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
```

### Tạo file app/admin/users/[id]/layout.tsx 

```
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Detail",
  description: "Welcome to my User Detail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
```



*Bài tiếp theo [NX21 Meta data](session_21_meta_data.md)*