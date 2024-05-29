# NX7 Giới thiệu về Routing

### App Routing

Next.js, framework JavaScript phổ biến cho phát triển ứng dụng web, cung cấp hệ thống routing mạnh mẽ và linh hoạt, giúp bạn dễ dàng tạo ra các ứng dụng web có cấu trúc rõ ràng và trải nghiệm người dùng mượt mà.

Kể từ Next.js 13 mang đến App Routing như một lựa chọn mới để khai báo route, giúp bạn tổ chức code và tái sử dụng logic routing hiệu quả hơn. Tuy nhiên, việc sử dụng thư mục app để khai báo route không bắt buộc và không thay thế cho việc khai báo route trong pages

### Lợi ích App Routing

- App Routing cho phép bạn định nghĩa logic routing trong các file riêng biệt trong thư mục app, giúp cho code dễ tổ chức và bảo trì hơn.

- Bạn có thể dễ dàng tái sử dụng logic routing giữa các trang khác nhau bằng cách import các file routing từ thư mục app

- App Routing cung cấp cú pháp mới ...params cho dynamic routes, giúp bạn truy cập các tham số route động một cách linh hoạt hơn.

### Định nghĩa Route (Page)

- Do NextJS là framework, bạn không cần phải tích hợp thư viện "react-router" như cách truyền thống, Nextjs đã tích hợp sẵn cho bạn

- Tất cả route trong ứng dụng, đều được định nghĩa bên trong thư mục "app"

- Tên thư mục viết thường không dùng các viết có chữ hoa hay thường, ví dụ folderName

### Các bước thực hiện

- route "/" => component render là "page.tsx" nằm ở ngoài cùng

- route "/admin" => cần tạo folder "admin" và tạo file page.tsx

- route "/admin/dashboard" => cần tạo folder "admin" => folder "dashboard" và tạo file page.tsx ở folder "dashboard"

- Mỗi folder, là 1 thành phần trên đường link URL. file page.tsx chính là giao diện component được render ứng với route đấy.

### Ví dụ

http://localhost:3000/

```
/** /app/page.tsx **/

const Home = () => {
  return (
    <>
      <ul>
        <li><a href="/admin">Admin</a></li>
        <li><a href="/admin/dashboard">DashBoard</a></li>
      </ul>

      <div className={styles.description}>Hello world</div>
    </>
  );
}

export default Home;
```


http://localhost:3000/admin/

```
/** /app/admin/page.tsx **/

const Admin = () => {
    return (
        <>
            Admin
        </>
    )
}

export default Admin;
```

http://localhost:3000/admin/dashboard

```
/** /app/admin/dashboard/page.tsx **/

const DashBoard = () => {
    return (
        <>
            DashBoard
        </>
    )
}

export default DashBoard;
```

*Bài tiếp theo [NX8 Giới thiệu về Routing ](/session/session_08_routing.md)*