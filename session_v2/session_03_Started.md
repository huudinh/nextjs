# NX3 Getting Started

NextJS là một framework React mã nguồn mở để xây dựng các ứng dụng web full-stack (được tạo và duy trì bởi Vercel). Bạn có thể sử dụng các thành phần React để xây dựng giao diện người dùng, và NextJS để thêm các tính năng và tối ưu hóa. Nó được xây dựng trên nền tảng của Server Components, cho phép bạn render các thành phần React từ server đến client. Điều này có nghĩa là các trang của bạn có thể tương tác và động hơn, trong khi vẫn nhanh và hiệu quả. Một trong những tính năng đáng chú ý của nó là NextJS App Router, giúp điều hướng trong ứng dụng của bạn. Bài viết này sẽ đi sâu vào NextJS App Router, các thành phần của nó, cách triển khai, và cung cấp một ví dụ mã và kết quả ngắn gọn.**

### Mục lục

1. [Tạo ứng dụng Next.js đầu tiên của bạn](#1)
2. [NextJS Scripts](#2)
3. [Hiển thị lời chào Hello](#3)
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

Để tạo một ứng dụng NextJS, bạn có thể làm theo các bước sau:

**Bước 1**: Cài đặt NodeJS nếu bạn chưa có. Mở terminal và chạy lệnh sau để tạo một ứng dụng Next.js mới:
```bash
npx create-next-app my-app
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
cd my-app
```

**Bước 4**: Khởi động server phát triển:
```bash
npm run dev
```

**Bước 5**: Mở trình duyệt và truy cập `http://localhost:3000` để xem ứng dụng Next.js của bạn đang chạy.

<a name="2"></a>
### 2. NextJS Scripts

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



<a name="3"></a>
### 3. Hiển thị lời chào Hello

Sửa file src/app/page.tsx

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

<a name="4"></a>
### 4. Pages and Routes trong Next JS

1. **Routing**: Next.js sử dụng cấu trúc router dựa trên tệp, trong đó các thư mục xác định các tuyến đường. Một tệp `page.tsx` đặc biệt được sử dụng để tạo các đoạn đường dẫn.

2. **Pages**: Một trang là một giao diện người dùng (UI) duy nhất cho một tuyến đường. Sử dụng các thư mục lồng nhau để xác định các tuyến đường và tệp `page.tsx` để làm cho nó có thể truy cập công khai.
   - `src/app/pages.tsx` tương ứng với trang chủ (/).
   - `src/app/about/pages.tsx` tương ứng với trang giới thiệu (/about).

3. **Layouts**: Một layout là một giao diện người dùng được chia sẻ giữa nhiều trang. Khi điều hướng, layouts giữ nguyên trạng thái, vẫn tương tác và không render lại.

<a name="5"></a>
### 5. Links and Navigation trong Next JS

Next.js cung cấp hai phương pháp chính để liên kết và điều hướng giữa các tuyến đường:

1. **Sử dụng thành phần `<Link>`**: Thành phần `<Link>` là một thành phần tích hợp mở rộng thẻ HTML `<a>` để cung cấp tính năng prefetching và điều hướng phía client giữa các tuyến đường.

   ```jsx
   // src/app/page.tsx

    'use client';
    import Link from "next/link"

    const Home = () => {
    return (
        <div className="container">
        <Link href="/about">About</Link>
        <h1>Hello</h1>
        {
            <style>{`
                a{
                    color:red;
                    text-decoration:none;
                }
                .container{
                max-width:800px;
                margin:10px auto;
                }
            `}</style>
        }
        </div>
    );
    }
   ```

2. **Sử dụng hook `useRouter`**: Hook `useRouter` cho phép bạn thay đổi tuyến đường một cách lập trình. Hook này chỉ có thể được sử dụng trong các thành phần phía client.
   ```jsx
    // src/app/about/page.tsx
    'use client';
    import { useRouter } from 'next/navigation'

    const About = () => {
        const router = useRouter();

        const goToHome = () => {
            router.push('/');
        };

        return (
            <div className='container'>
                <h1>About</h1>
                <button onClick={goToHome}>Go to Home Page</button>
                {
                <style>{`
                    .container{
                        max-width:800px;
                        margin:10px auto;
                    }
                        button{
                        padding:5px 10px;
                        }
                `}</style>
                }
            </div>
        );
    };

    export default About;
   ```

**Điều hướng và routing** trong Next.js sử dụng các kỹ thuật như Prefetching, Caching, Partial rendering, Soft navigation, và Back and forward navigation để cải thiện hiệu suất và trải nghiệm người dùng.


<a name="6"></a>
### 6. Route Groups trong Next JS

Dưới đây là bản dịch và tóm tắt nội dung về Route Groups trong Next.js:

**Route Groups trong Next.js**

1. **Tạo Route Group**: Bạn có thể tạo một nhóm route bằng cách đặt tên thư mục trong dấu ngoặc đơn (folderName). Điều này giúp:
   - Tổ chức các route mà không ảnh hưởng đến URL.
   - Tạo nhóm các route liên quan với nhau.

2. **Dynamic Routes**: Một đoạn động có thể được tạo bằng cách đặt tên thư mục trong dấu ngoặc vuông [folderName].

3. **Loading UI và Streaming**:
   - `loading.js`: Là một tệp đặc biệt giúp tạo giao diện tải dữ liệu có ý nghĩa với React suspense.
   - Streaming cho phép chia nhỏ HTML của trang thành các phần nhỏ và gửi dần các phần đó từ server đến client.

4. **Error Handling**: Quy ước tệp `error.js` cho phép xử lý các lỗi runtime không mong muốn trong các route lồng nhau.

5. **Route Handlers**: Cho phép bạn tạo các bộ xử lý route tùy chỉnh cho một route cụ thể bằng cách sử dụng yêu cầu và phản hồi web.
   - Route Handlers được định nghĩa trong tệp `route.js` hoặc `route.ts`.

<a name="7"></a>
### 7. SEO trong Next JS

**SEO in Next.js**

Next.js cung cấp các tối ưu hóa SEO tích hợp như render phía server (server-side rendering) và chia nhỏ mã tự động (automatic code splitting), giúp cải thiện khả năng hiển thị trên công cụ tìm kiếm. Các nhà phát triển cũng có thể sử dụng thẻ meta và dữ liệu có cấu trúc để tăng cường SEO hơn nữa.

<a name="8"></a>
### 8. API Routes trong Next JS

**API Routes in Next.js**

Next.js cho phép bạn tạo các API routes để xử lý logic phía server tách biệt với logic chính của ứng dụng. Các API routes được lưu trữ trong thư mục `pages/api` và có thể được truy cập thông qua các yêu cầu HTTP.

<a name="9"></a>
### 9. Data fetching trong Next JS

Dưới đây là bản dịch và tóm tắt nội dung về việc lấy dữ liệu trong Next.js:

**Lấy dữ liệu trong Next.js**

Có bốn cách để lấy dữ liệu:

1. **Trên server, với `fetch`**:
   - Next.js mở rộng API web `fetch` gốc để cho phép bạn cấu hình hành vi caching và revalidating cho mỗi yêu cầu trên server. Sử dụng `fetch` với `async/await` trong các thành phần server.

2. **Trên server, với các thư viện bên thứ ba**:
   - Trong trường hợp bạn sử dụng thư viện bên thứ ba không hỗ trợ hoặc không cung cấp `fetch` (ví dụ: cơ sở dữ liệu, CMS, hoặc ORM client), bạn có thể cấu hình hành vi caching và revalidating của các yêu cầu đó bằng cách sử dụng tùy chọn cấu hình Route Segment và hàm `cache` của React.

3. **Trên client, với Route Handlers**:
   - Nếu bạn cần lấy dữ liệu trong một thành phần client, bạn có thể gọi một Route Handler từ client. Route Handlers thực thi trên server và trả về dữ liệu cho client. Điều này hữu ích khi bạn không muốn tiết lộ thông tin nhạy cảm cho client, chẳng hạn như API tokens.

4. **Trên client, với các thư viện bên thứ ba**:
   - Lấy dữ liệu trên client với các thư viện bên thứ ba như SWR và React Query. Các thư viện này cung cấp API của chúng để memoizing yêu cầu, caching, revalidating, và mutating dữ liệu.

<a name="10"></a>
### 10. Requesting Data trong Next JS

1. **Client-side**: Next.js tích hợp tốt với các thư viện như `fetch` hoặc `axios` để thực hiện các yêu cầu API trực tiếp từ trình duyệt. Cách tiếp cận này lý tưởng cho việc lấy dữ liệu không cần xử lý phía server.

2. **Server-side**: Các hàm như `getStaticProps` và `getServerSideProps` cho phép bạn lấy dữ liệu trên server trước khi trang được render. Điều này hữu ích cho nội dung động cần được cá nhân hóa cho từng người dùng.

**getStaticProps vs. getServerSideProps**:
- **getStaticProps**: Hàm này lấy dữ liệu tại thời điểm build, làm cho các trang của bạn được tạo tĩnh. Điều này lý tưởng cho nội dung ít thay đổi và ưu tiên thời gian tải nhanh.
- **getServerSideProps**: Hàm này lấy dữ liệu trên mỗi yêu cầu, làm cho các trang của bạn được render phía server. Điều này cung cấp trải nghiệm động nhất nhưng có thể có một chút chi phí hiệu suất so với `getStaticProps`.

**Caching Data**: Caching lưu trữ dữ liệu để không cần phải lấy lại từ nguồn dữ liệu cho mỗi yêu cầu.

**Revalidating Data**: Revalidating dữ liệu là quá trình xóa dữ liệu cache và lấy dữ liệu mới nhất. Dữ liệu cache có thể được revalidate theo hai cách:
- Revalidation dựa trên thời gian.
- Revalidation theo yêu cầu.

**Fetching Data **

```jsx
// pages/posts.js

'use client';
import { useState, useEffect } from 'react';

interface Data {
  // Define the shape of your data here
  id: number;
  body: string;
  // ... other properties
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2/');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data</h1>
      <p>ID: {data.id}</p>
      <p>Name: {data.body}</p>
      {/* ... display other data */}
    </div>
  );
}
```

<a name="11"></a>
### 11. NextJS không có những tính năng nào?

<a name="12"></a>
### 12. NextJS App router là gì?

<a name="13"></a>
### 13. Kết luận

<a name="14"></a>
### 14. Câu hỏi thường gặp - Bắt đầu với Next.js


*Bài tiếp theo [NX3 Getting Started](session_03_Started.md)*