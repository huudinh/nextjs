# NX2 Cài đặt Nextjs

### Tạo ứng dụng

```
npx create-next-app@latest
```

Khi cài đặt, bạn sẽ thấy lời nhắc sau:

```
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```

Sau lời nhắc, create-next-app sẽ tạo một thư mục có tên dự án của bạn và cài đặt các phụ thuộc cần thiết.

### Cấu trúc dự án Next.js 

.next: đây là code “đã được dịch” của Next.js (cái mà browser chạy)

public: chứa static file (CSS/JS/images)

src/app : chứa source dự án

.eslintrc.json : config eslint (warning ở terminal :v)

.gitignore: các files ko push lên git remote

next.config.js : cấu hình Next.js

package.json : thông tin thư viện cài đặt

tsconfig.json : cấu hình compiler của typescript

### Chạy ứng dụng

```
npm run dev
```

Để Build ứng dụng static (html + css) bạn cấu hình file next.config.mjs

```
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: "build",
    output: "export",
  };

export default nextConfig;

```

sau đó gõ lệnh

```
npm run build
```

Code HTML, CSS sẽ xuất hiện trong thư mục build

*Bài tiếp theo [NX3 SPA & SSR](session_03_render.md)*