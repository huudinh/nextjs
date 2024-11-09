# NX7 Dàn Layout

Layout trong Next.js là một tính năng mạnh mẽ giúp bạn tái sử dụng code HTML chung cho nhiều component khác nhau, giúp cho code gọn gàng, dễ bảo trì và hiệu quả hơn

### Ưu điểm của Layout

- Layout giúp bạn chia sẻ phần HTML chung giữa các component, tránh việc viết code lặp lại nhiều lần

- Layout giúp chia nhỏ giao diện thành các phần riêng biệt, giúp code dễ tổ chức và quản lý hơn.

- Layout đảm bảo sự nhất quán về giao diện và trải nghiệm người dùng trên toàn bộ ứng dụng.

### Yêu cầu tối thiểu để sử dụng Layout

- Layout chỉ hoạt động trên Next.js v9.0 trở lên

- Cần có ít nhất một file layout trong ứng dụng

### Quy tắc đặt tên file Layout

-  File layout phải có tên là layout.tsx nếu bạn sử dụng TypeScript, hoặc layout.js nếu bạn sử dụng JavaScript

- File layout.tsx (hoặc layout.js) được đặt trong thư mục app

- File layout.tsx (hoặc layout.js) được đặt trong thư mục của component mà bạn muốn sử dụng layout

### Root layout

- app/layout.tsx (hoặc app/layout.js)

- Là layout cha cho tất cả các trang trong ứng dụng

- Định nghĩa các thẻ HTML cơ bản như <html>, <body>, <head>, v.v.

- Root layout không thể là server component

```
// app/layout.tsx
import React from 'react';

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>Next.js Layout Example</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

### Layout tự định nghĩa

Trong thư mục của component mà bạn muốn sử dụng layout

Là layout cho một nhóm component cụ thể

Cung cấp cấu trúc HTML chung cho nhóm component đó

Layout tự định nghĩa có thể là server component

```
// pages/blog/[slug].tsx
import React from 'react';
import { useRouter } from 'next/router';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/BlogLayout';

export default function BlogPostPage({ slug }) {
  const router = useRouter();
  const { data: post } = await getStaticProps({ params: { slug } });

  if (!post) {
    return router.push('/404');
  }

  return (
    <Layout>
      <BlogPost post={post} />
    </Layout>
  );
}
```

### Nested Layout

Next.js tự động hỗ trợ nested layout, giúp bạn tạo ra cấu trúc layout phức tạp một cách dễ dàng. Khi có nhiều file layout.tsx (hoặc layout.js) trong ứng dụng, Next.js sẽ tự động "lồng" các layout vào nhau, tạo ra cấu trúc layout phân cấp.

```
pages
  └─── blog
      └─── [slug]
          └─── layout.tsx (Layout cho trang chi tiết bài viết blog)
      └─── index.tsx (Có thể sử dụng layout của thư mục `blog`)
```

### Ví dụ

```
/**
  /app/components/header.tsx
**/

'use client'

import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link href={"/admin"}>Admin</Link>
                </li>
                <li>
                    <Link href={"/admin/dashboard"}>DashBoard</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;
```

Đây là một đoạn mã mẫu về cách tạo một component Header trong Next.js. Trong đoạn mã này, bạn đã tạo một component Header và sử dụng component Link từ next/link để tạo ra các liên kết điều hướng đến trang “Admin” và “Dashboard”.

Cụ thể, khi người dùng nhấp vào liên kết “Admin”, họ sẽ được chuyển hướng đến trang /admin, và khi nhấp vào liên kết “DashBoard”, họ sẽ được chuyển hướng đến trang /admin/dashboard.

Component Header này có thể được sử dụng như một phần của layout chung cho nhiều trang khác nhau trong ứng dụng của bạn.

```
  /**
    /app/layout.tsx
  **/

  <html lang="en">      
    <body className={inter.className}>
      <Header />
      {children}
    </body>
  </html>
```

Đây là một đoạn mã mẫu về cách tạo một Root Layout trong Next.js. Trong đoạn mã này, bạn đã tạo một component RootLayout và sử dụng component Header mà bạn đã định nghĩa trước đó.

Cụ thể, RootLayout là một component chứa toàn bộ cấu trúc HTML cơ bản của trang, bao gồm các thẻ <html> và <body>. Trong thẻ <body>, bạn đã chèn component Header và children, đại diện cho nội dung cụ thể của từng trang.

*Bài tiếp theo [NX8 Sử Dụng CSS với Next.JS ](/session/session_8_css.md)*