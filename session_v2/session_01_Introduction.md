# Introduction

Next.js là một framework React mạnh mẽ và linh hoạt, nhanh chóng trở nên phổ biến trong cộng đồng phát triển web. Được tạo bởi Vercel, Next.js đơn giản hóa quy trình phát triển ứng dụng web hiện đại với các tính năng nổi bật. Trong bài viết này, chúng ta sẽ khám phá các khái niệm chính của Next.js, các tính năng của nó và cách bắt đầu để tạo 1 dự án mới.

### Mục lục

1. [Next.js là gì?](#1)
2. [Điều kiện cần để học Next.js](#2)
3. [Lịch sử của Next.js](#3)
4. [Next.js hoạt động như thế nào?](#4)
5. [Các tính năng của Next.js](#5)
6. [Các bước để tạo ứng dụng Next.js](#6)
7. [Vòng đời Next.js](#7)
8. [Câu hỏi thường gặp về Next.js](#8)

<a name="1"></a>
### 1. Next.js là gì?

Next.js là một framework dựa trên React, giúp tối ưu hóa quá trình phát triển ứng dụng web với các tính năng tích hợp như kết xuất phía máy chủ (SSR), tạo trang web tĩnh (SSG) và các tuyến API. Framework này đơn giản hóa các khía cạnh phức tạp của phát triển web, cho phép nhà phát triển tập trung vào việc xây dựng ứng dụng thay vì xử lý cấu hình. Next.js nhanh và tương thích tốt với các công cụ và thư viện khác.

<a name="2"></a>
### 2. Điều kiện cần để học Next.js

- HTML và CSS

- JavaScript

- React

-  Node.js và NPM

-  Có kiến thức về Git và GitHub

<a name="3"></a>
### 3. Lịch sử của Next.js

Next.js được tạo ra bởi Vercel (trước đây là ZEIT) để đơn giản hóa việc phát triển các ứng dụng React với khả năng kết xuất phía máy chủ. Framework này nhanh chóng trở nên phổ biến nhờ các tối ưu hóa về hiệu suất và dễ sử dụng. Phiên bản ổn định hiện tại của Next.js là 14.0, được phát hành vào ngày 26 tháng 10 năm 2023. Framework này tiếp tục phát triển, giới thiệu các tính năng mới qua từng bản cập nhật.

<a name="4"></a>
### 4. Next.js hoạt động như thế nào?

Next.js hoạt động bằng cách hỗ trợ cả kết xuất phía máy chủ (SSR) và tạo trang web tĩnh (SSG), cho phép các nhà phát triển chọn phương pháp kết xuất phù hợp nhất cho nhu cầu của ứng dụng. SSR tạo HTML trên máy chủ cho mỗi yêu cầu, trong khi SSG tạo HTML trước tại thời điểm xây dựng. Cả hai phương pháp này đều cải thiện hiệu suất và SEO bằng cách đảm bảo việc phân phối nội dung nhanh chóng và tối ưu.

<a name="5"></a>
### 5. Các tính năng của Next.js

#### 1. Server-Side Rendering (SSR)

Next.js cho phép các nhà phát triển tiền kết xuất các trang trên máy chủ tại thời điểm yêu cầu, mang lại hiệu suất và SEO tốt hơn so với kết xuất phía máy khách truyền thống.

####  2. Static Site Generation (SSG)

Next.js cung cấp khả năng tạo trang web tĩnh cho các trang không thay đổi thường xuyên. Quá trình này bao gồm việc tạo các trang HTML tại thời điểm xây dựng, sau đó các trang này được phục vụ trực tiếp từ CDN. Điều này giúp cải thiện hiệu suất và tốc độ tải trang.

#### 3. API Routes

Next.js cung cấp một cách đơn giản để tạo các điểm cuối API trong ứng dụng của bạn, loại bỏ nhu cầu về một máy chủ backend riêng biệt. Điều này giúp giảm bớt sự phức tạp và tăng hiệu quả trong quá trình phát triển ứng dụng web.

####  4. File-Based Routing

Next.js sử dụng hệ thống định tuyến dựa trên tệp, nơi các tuyến được tạo ra bằng cách thêm các tệp và thư mục vào thư mục `pages`. Điều này giúp dễ dàng tổ chức và quản lý cấu trúc của ứng dụng của bạn.

#### 5. Automatic Code Splitting

Next.js tự động chia nhỏ mã của bạn thành các phần nhỏ hơn, đảm bảo rằng chỉ có JavaScript cần thiết được tải cho mỗi trang. Điều này giúp cải thiện hiệu suất và tốc độ tải trang, mang lại trải nghiệm người dùng mượt mà hơn.

####  6. Hot Module Replacement (HMR)

Hot Module Replacement (HMR) cho phép các nhà phát triển thấy các thay đổi trong thời gian thực mà không cần phải làm mới trình duyệt, giúp tăng tốc đáng kể quá trình phát triển. Điều này đặc biệt hữu ích khi làm việc với các ứng dụng web phức tạp, vì nó giúp tiết kiệm thời gian và cải thiện hiệu suất làm việc.

#### 7. Built-In CSS and Sass Support

Next.js hỗ trợ việc nhập trực tiếp các tệp CSS và Sass vào các thành phần của bạn, giúp việc tạo kiểu cho ứng dụng trở nên dễ dàng mà không cần cấu hình bổ sung. Điều này giúp bạn tiết kiệm thời gian và công sức trong quá trình phát triển, đồng thời giữ cho mã nguồn của bạn gọn gàng và dễ quản lý.

<a name="6"></a>
### 6. Các bước để tạo ứng dụng Next.js

#### Step 1: Install Node in Your System

Cài đặt node js vào hệ điều hành

`node -v` kiểm tra phiên bản đã cài đặt

#### Step 2: Initialize the Next.js Project

Bây giờ hãy tạo một thư mục cho dự án của bạn trên màn hình, điều hướng đến thư mục đó thông qua trình soạn thảo mã và chạy lệnh sau.

```
npx create-next-app@latest 
#OR
yarn create next-app
#OR
pnpm create next-app
```

#### Step 3: Configure your next.js app

Viết tên dự án (mặc định là my-app) 

```
√ What is your project named? my-app
√ Would you like to use TypeScript? No / Yes
√ Would you like to use ESLint? No / Yes
√ Would you like to use Tailwind CSS? No / Yes
√ Would you like to use `src/` directory? No / Yes
√ Would you like to use App Router? (recommended) No / Yes
√ Would you like to customize the default import alias (@/*)? No / Yes
√ What import alias would you like configured? @/*
```

#### Step 4: Switch to Project Directory

Di chuyển đến thư mục dự án để cài đặt bất kỳ phụ thuộc nào khác.

```
cd my-app

```

#### Step 5: Run the Application

Viết lệnh bên dưới để chạy Ứng dụng NextJS, sau đó mở URL trong trình duyệt.

//index.js

```
import React from'react';
import Link from'next/link';

export default class extends React.Component {
    render() {
        return ( {
        
        // This is Jsx contains HTML
        // code in Javascript}
        <div>
            <h1>Hello</h1>
            {
                // This is Styled-jsx contains
                // CSS code in Javascript}
                <style jsx>{`
                    a{
                        color:grey;
                        text-decoration:none;
                    }
                `}</style>
            }
        </div>
        )
    }  
}
```

<a name="7"></a>
### 7. Vòng đời Next.js

<a name="8"></a>
### 8. Câu hỏi thường gặp về Next.js


*Bài tiếp theo [NX2 Cài đặt Nextjs](/session/session_02_setup.md)*