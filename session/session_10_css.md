# NX10 Sử Dụng CSS với Next.JS

Next.js hỗ trợ nhiều cách để sử dụng CSS, bao gồm CSS-in-JS, CSS Modules, và Styled Components. Dưới đây là một số cách phổ biến để sử dụng CSS trong Next.js:

### CSS-in-JS

CSS-in-JS là một kỹ thuật cho phép bạn viết CSS trực tiếp trong các component JavaScript của mình. Điều này giúp bạn có thể tạo ra các style CSS động và có phạm vi.

Next.js hỗ trợ CSS-in-JS thông qua thư viện styled-jsx, cũng như nhiều thư viện CSS-in-JS khác như styled-components.

```
function HelloWorld() {
  return (
    <div>
      Hello world
      <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </div>
  )
}

export default HelloWorld;
```

Trong ví dụ trên, chúng ta sử dụng styled-jsx để viết CSS trực tiếp trong component HelloWorld. Chúng ta có thể định nghĩa các style riêng biệt cho từng component, và cũng có thể định nghĩa các style toàn cục.

Nếu bạn muốn sử dụng styled-components, bạn sẽ cần cấu hình thêm trong next.config.js. Bạn cũng cần tạo một component để thu thập tất cả các quy tắc CSS được tạo ra trong quá trình render, và sử dụng hook useServerInsertedHTML để chèn các style này vào thẻ <head> trong layout gốc.

Lưu ý rằng, khi sử dụng CSS-in-JS, bạn cần đảm bảo rằng CSS của bạn được tải một cách hiệu quả và không gây ra hiện tượng FOUC (Flash of Unstyled Content). Điều này có nghĩa là CSS cần được tải và áp dụng ngay lập tức khi trang web tải, tránh gây ra hiện tượng nháy lên màn hình trước khi CSS được áp dụng.

### Styled Components

Styled Components là một thư viện CSS-in-JS phổ biến, cho phép bạn viết CSS trực tiếp trong các component JavaScript của mình. Điều này giúp bạn có thể tạo ra các style CSS động và có phạm vi.

Để sử dụng Styled Components trong Next.js, bạn cần thực hiện các bước sau:

Cài đặt styled-components: Sử dụng lệnh npm install styled-components.

Cấu hình styled-components trong next.config.js: Bạn cần chỉnh sửa file next.config.js và thêm vào đó phần cấu hình cho styled-components. 

```
module.exports = {
  compiler: {
    styledComponents: true,
  },
}
```

Tạo một global registry component: 

Component này sẽ thu thập tất cả các quy tắc CSS được tạo ra trong quá trình render.

```
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({ children, }: { children: React.ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}
```

Sử dụng StyledComponentsRegistry trong layout gốc: 

Bạn cần import StyledComponentsRegistry vào file layout gốc và sử dụng nó để bao quanh các component con

```
import StyledComponentsRegistry from './lib/registry'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          {props.children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
```

### Tailwind CSS

Tailwind CSS là một thư viện CSS utility-first giúp bạn xây dựng giao diện nhanh chóng và dễ dàng. Đây là cách bạn có thể cài đặt và sử dụng Tailwind CSS với Next.js:

Cài đặt Tailwind CSS: Sử dụng lệnh sau để cài đặt Tailwind CSS và các dependencies cần thiết:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Cấu hình Tailwind CSS: Thêm đường dẫn đến các file sẽ sử dụng class của Tailwind CSS vào file tailwind.config.js

```
/**  @type {import('tailwindcss').Config}  */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Thêm Tailwind CSS vào CSS toàn cục: Thêm các directive của Tailwind CSS vào file globals.css:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Sử dụng Tailwind CSS: Bây giờ bạn đã có thể sử dụng các class utility của Tailwind CSS để style cho các component của mình

```
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```
### CSS Modules

CSS Modules là một công cụ giúp giải quyết vấn đề về phạm vi CSS và xung đột tên lớp trong CSS. Next.js hỗ trợ sẵn CSS Modules.

Khi sử dụng CSS Modules, mỗi tên lớp CSS sẽ được biên dịch thành một tên lớp duy nhất khi chúng ta build ứng dụng. Điều này giúp tránh xung đột tên lớp giữa các component khác nhau.

Để sử dụng CSS Modules trong Next.js, bạn chỉ cần tạo một file CSS với phần mở rộng là .module.css. Sau đó, bạn có thể import file CSS này vào component của mình

```
// components/Button.module.css
.error {
  color: white;
  background-color: red;
}

// components/Button.js
import styles from './Button.module.css'

export function Button() {
  return (
    <button type="button" className={styles.error}>
      Destroy
    </button>
  )
}
```

Trong ví dụ trên, chúng ta tạo một file CSS Module tên là Button.module.css và định nghĩa một lớp CSS tên là .error. Sau đó, chúng ta import file CSS này vào component Button và sử dụng lớp .error

Lưu ý rằng, khi sử dụng CSS Modules, bạn không cần phải lo lắng về việc tên lớp .error sẽ xung đột với các file CSS khác. Mỗi tên lớp sẽ được biên dịch thành một tên duy nhất khi build ứng dụng.

*Bài tiếp theo [NX11 Sử Dụng CSS với Next.JS ](/session/session_11_css.md)*