# NX11 Tích Hợp React Bootstrap

### React Bootstrap là gì

React Bootstrap là một thư viện React phổ biến, giúp bạn sử dụng Bootstrap trong các ứng dụng React. React Bootstrap thay thế JavaScript của Bootstrap bằng cách xây dựng lại từ đầu mỗi component như một component React thực sự, không cần phụ thuộc vào các thư viện không cần thiết như jQuery.

Mỗi component trong React Bootstrap đã được xây dựng từ đầu như một component React thực sự, không cần phụ thuộc vào jQuery. Đây là một trong những thư viện React lâu đời nhất, React-Bootstrap đã phát triển và phát triển cùng với React, khiến nó trở thành một lựa chọn tuyệt vời làm nền tảng giao diện người dùng của bạn.

React-Bootstrap cung cấp sẵn một bộ các React component với look-and-feel của Twitter Bootstrap component từ đó giúp việc tạo dựng UI cho React app dễ dàng hơn bao giờ hết. 

Bạn có thể tham khảo các React component tại đây https://react-bootstrap.netlify.app/docs/layout/grid

### Cài đặt React Bootstrap: 

Sử dụng lệnh sau để cài đặt React Bootstrap và các dependencies cần thiết:

```
npm install react-bootstrap bootstrap
```

### Thêm CSS của Bootstrap: 

Để sử dụng các kiểu trên Bootstrap, bạn cần tự tay nhập file CSS của nó vào tệp /src/layout.js

```
  /**
    /app/layout.tsx
  **/

  import 'bootstrap/dist/css/bootstrap.css'; 
```

### Sử dụng các component của React Bootstrap

```
  /**
    /app/layout.tsx
  **/

  import { Container } from "react-bootstrap";

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
```

```
  /**
    /app/admin/page.tsx
  **/

  'use client'

  import { useRouter } from "next/navigation";
  import { Button } from "react-bootstrap";

  const Admin = () => {
      const router = useRouter();

      const handleClick = () => {
          router.push("/");
      }
      return (
          <>
              <Button variant="danger" onClick={handleClick}>Back Home</Button> 
              <br /><br />
              Admin
          </>
      )
  }

  export default Admin;
```

*Bài tiếp theo [NX12 Tích Hợp React Bootstrap ](/session/session_12_bootstrap.md)*