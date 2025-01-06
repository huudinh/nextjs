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

Viết lệnh bên dưới vào file `page.tsx`, sau đó chạy ứng dụng với lênh `npm run dev`

```
export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      {
          <style>{`
              a{
                  color:grey;
                  text-decoration:none;
              }
          `}</style>
      }
  </div>
  );
}
```

<a name="7"></a>
### 7. Vòng đời Next.js

Mỗi ứng dụng Next.js đều có một vòng đời bao gồm các giai đoạn khác nhau như khởi tạo, kết xuất và cập nhật. Hiểu rõ các giai đoạn này giúp quản lý trạng thái, thực hiện các tác động phụ và tối ưu hóa các thành phần một cách hiệu quả. Điều này đặc biệt quan trọng trong việc phát triển các ứng dụng web phức tạp, giúp cải thiện hiệu suất và trải nghiệm người dùng.

#### Initialization

Giai đoạn này bao gồm việc thiết lập trạng thái ban đầu và cấu hình ứng dụng. Điều này được thực hiện trong quá trình tải ban đầu của ứng dụng. Việc hiểu rõ các giai đoạn này giúp bạn quản lý trạng thái, thực hiện các tác động phụ và tối ưu hóa các thành phần một cách hiệu quả.

#### Rendering Phase

Các phương thức `getInitialProps`, `getServerSideProps`, và `getStaticProps` trong Next.js được sử dụng để lấy dữ liệu trước khi kết xuất trang:

- **getInitialProps**: Được sử dụng trong cả phía máy chủ và phía khách hàng để lấy dữ liệu trước khi kết xuất trang.
- **getServerSideProps**: Chỉ được sử dụng phía máy chủ để lấy dữ liệu mỗi khi có yêu cầu đến trang.
- **getStaticProps**: Được sử dụng để lấy dữ liệu tại thời điểm xây dựng trang, phù hợp cho các trang tĩnh.

Phương thức `render()` trả về biểu diễn JSX của thành phần và được gọi trong quá trình kết xuất ban đầu và các lần cập nhật sau đó. Hiểu rõ các phương thức này giúp bạn quản lý trạng thái, thực hiện các tác động phụ và tối ưu hóa các thành phần một cách hiệu quả.

#### Updating Phase

- **getStaticPaths**: Được sử dụng cho các tuyến động để xác định các đường dẫn nào nên được kết xuất trước tại thời điểm xây dựng.
- **useEffect / useLayoutEffect**: Các hook của React được sử dụng để quản lý các tác động phụ trong các thành phần chức năng.

Hiểu rõ cách sử dụng các phương thức và hook này sẽ giúp bạn quản lý trạng thái, thực hiện các tác động phụ và tối ưu hóa các thành phần một cách hiệu quả trong ứng dụng Next.js của mình.

#### Unmounting Phase

Trong React, việc dọn dẹp các tác động phụ (cleanup effects) là rất quan trọng để tránh rò rỉ bộ nhớ và các vấn đề khác khi các thành phần bị gỡ bỏ (unmounted). Bạn có thể thực hiện việc này bằng cách trả về một hàm dọn dẹp từ bên trong useEffect. Dưới đây là một ví dụ:

```
import { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        // Đăng ký một sự kiện hoặc thiết lập một bộ đếm thời gian
        const timer = setInterval(() => {
            console.log('Timer is running');
        }, 1000);

        // Hàm dọn dẹp được trả về từ useEffect
        return () => {
            clearInterval(timer); // Dọn dẹp bộ đếm thời gian
            console.log('Component unmounted, timer cleared');
        };
    }, []); // Mảng phụ thuộc rỗng để chỉ chạy một lần khi thành phần được gắn kết

    return <div>My Component</div>;
}

export default MyComponent;
```

Trong ví dụ trên:

useEffect được sử dụng để thiết lập một bộ đếm thời gian (setInterval) khi thành phần được gắn kết (mounted).

Hàm dọn dẹp (clearInterval) được trả về từ useEffect để xóa bộ đếm thời gian khi thành phần bị gỡ bỏ (unmounted).

Việc dọn dẹp các tác động phụ giúp đảm bảo rằng các tài nguyên như bộ đếm thời gian, sự kiện, hoặc các kết nối mạng được giải phóng đúng cách, tránh gây ra các vấn đề về hiệu suất và rò rỉ bộ nhớ.

<a name="8"></a>
### 8. Câu hỏi thường gặp về Next.js

#### Next.js là một Framework hay Thư viện?

Next.js được coi là một framework vì nó cung cấp một cách cấu trúc để xây dựng các ứng dụng, bao gồm cả các chức năng phía máy khách và phía máy chủ. Điều này giúp các nhà phát triển dễ dàng quản lý và mở rộng ứng dụng của mình một cách hiệu quả.

#### Làm thế nào để học Nextjs

Bắt đầu học Next.jslà một hành trình thú vị! Dưới đây là một số bước để bạn có thể bắt đầu:

**Hiểu cơ bản về JavaScript và React:**

Trước khi bắt đầu với Next.js, hãy đảm bảo bạn đã nắm vững các khái niệm cơ bản về JavaScript và React. Điều này sẽ giúp bạn dễ dàng hiểu và áp dụng các khái niệm của Next.js.

**Tài liệu chính thức của Next.js:**

Truy cập vào tài liệu chính thức của Next.js để bắt đầu. Tài liệu này rất chi tiết và bao gồm các hướng dẫn từ cơ bản đến nâng cao.

**Thực hành qua các dự án nhỏ:**

Bắt đầu với các dự án nhỏ để làm quen với Next.js.Bạn có thể tạo một blog đơn giản hoặc một trang web tĩnh để thực hành các khái niệm cơ bản.

**Tham gia cộng đồng:**

Tham gia các diễn đàn, nhóm Facebook, hoặc các cộng đồng trực tuyến khác để trao đổi và học hỏi từ những người khác. Cộng đồng Next.jsrất lớn và luôn sẵn sàng giúp đỡ.

**Xem các video hướng dẫn:**

Có rất nhiều video hướng dẫn trên YouTube và các nền tảng học trực tuyến như Udemy, Coursera, và Pluralsight. Các video này có thể giúp bạn hiểu rõ hơn về cách sử dụng Next.jstrong thực tế.

**Đọc blog và bài viết:**

Đọc các blog và bài viết về Next.jsđể cập nhật các xu hướng và kỹ thuật mới nhất. Các blog như Dev.to và Medium có rất nhiều bài viết hữu ích về Next.js.

**Thực hành liên tục:**

Hãy luôn thực hành và áp dụng những gì bạn đã học vào các dự án thực tế. Điều này sẽ giúp bạn nắm vững các khái niệm và kỹ năng cần thiết.

#### Server-Side Rendering (SSR) trong Nextjs là gì

Server-Side Rendering (SSR) trong Next.jslà một tính năng cho phép bạn kết xuất trước các trang trên máy chủ tại thời điểm yêu cầu. Điều này mang lại hiệu suất tốt hơn và cải thiện SEO so với việc kết xuất phía máy khách truyền thống. SSR giúp trang web của bạn tải nhanh hơn và được tối ưu hóa tốt hơn cho các công cụ tìm kiếm, vì nội dung trang đã được kết xuất sẵn trên máy chủ trước khi gửi đến trình duyệt của người dùng.

```
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}
```

*Giải thích:*

**getServerSideProps:**

Đây là một hàm đặc biệt trong Next.jsđược chạy trên máy chủ mỗi khi có yêu cầu đến trang. Hàm này cho phép bạn lấy dữ liệu từ các nguồn bên ngoài và truyền dữ liệu đó vào trang dưới dạng props.

**Fetch data from external API:**

Sử dụng fetch để gửi yêu cầu HTTP đến API bên ngoài (https://api.example.com/data) và lấy dữ liệu.

**Parse JSON response:**

Sử dụng res.json() để phân tích cú pháp phản hồi JSON từ API và lưu trữ dữ liệu trong biến data.

**Pass data to the page via props:** 

Trả về một đối tượng chứa props, trong đó data là dữ liệu đã lấy từ API. Props này sẽ được truyền vào trang và có thể được sử dụng trong thành phần React của bạn.

#### Nextjs có dễ tiếp cận với người mới không

Next.js rất dễ tiếp cận với người mới. Framework này được xây dựng trên nền tảng React, vì vậy nếu bạn đã có kiến thức cơ bản về React, HTML, CSS và JavaScript, bạn có thể nhanh chóng làm quen với Next.js. Next.js cung cấp nhiều tính năng tích hợp sẵn và các quy ước giúp đơn giản hóa quá trình phát triển, làm cho việc tạo ra các ứng dụng web mạnh mẽ và hiệu quả trở nên dễ dàng hơn. Ngoài ra, tài liệu phong phú và cộng đồng hỗ trợ tích cực cũng là một điểm mạnh giúp Next.js trở thành lựa chọn tuyệt vời cho các nhà phát triển ở mọi cấp độ.

*Bài tiếp theo [NX3 Getting Started](/session/session_03_Started.md)*