# NX8 Điều hướng trang Navigation

### Điều hướng trang Navigation trong nextjs là gì

Điều hướng trang (Navigation) trong Next.js liên quan đến việc quản lý các URL của ứng dụng web và điều hướng người dùng đến các trang khác nhau dựa trên yêu cầu của họ. Điều này được thực hiện thông qua một module gọi là Router.

### Cách sử dụng

Router trong Next.js cung cấp các chức năng định tuyến (routing) trên phía máy khách (client-side) và phía máy chủ (server-side) cho các ứng dụng web. Với Router trong Next.js, nhà phát triển web có thể dễ dàng tạo ra các ứng dụng web phía client và phía server-rendered với các tính năng như pre-fetching (tiền đọc) và code splitting (chia mã).

Để sử dụng Router trong Next.js, các nhà phát triển web có thể sử dụng các API đơn giản như push, replace và prefetch. 

Ví dụ, push cho phép chuyển hướng đến một URL mới, replace cho phép thay thế URL hiện tại với một URL mới và prefetch cho phép tiền đọc trang trước đó một cách động để cải thiện tốc độ tải trang.

Ngoài ra, bạn cũng có thể sử dụng component Link từ Next.js để tạo ra các liên kết điều hướng. Component này giúp tạo ra các liên kết có thể điều hướng người dùng đến các trang khác mà không cần tải lại trang.

### use client

Trong Next.js, 'use client' là một chỉ thị được sử dụng để xác định rõ ràng một component nên được render và thực thi trong môi trường trình duyệt của người dùng, thay vì trên máy chủ.

Điều này có nghĩa là, khi bạn sử dụng 'use client', bạn đang chỉ định cho Next.js biết rằng các hoạt động render của component cụ thể nên xảy ra ở phía client. Điều này phù hợp với mô hình render phía client, cho phép cập nhật động và tương tác mà không cần tải lại toàn bộ trang.

Component phía client rất hiệu quả trong các tình huống cần cập nhật động và tương tác thời gian thực. Chúng được render trực tiếp trong trình duyệt của người dùng, cung cấp giao diện phản hồi nhanh mà không cần tải lại toàn bộ trang. Điều này rất lý tưởng cho các yếu tố tương tác như biểu mẫu trực tiếp, tính năng chat và tiện ích động.

Vì vậy, 'use client' được sử dụng để đảm bảo rằng component Admin sẽ được render và thực thi ở phía client, cho phép nó tương tác với API trình duyệt và thực hiện các cập nhật động1. Hy vọng thông tin này giúp bạn hiểu rõ hơn về việc sử dụng 'use client' trong Next.js. 

### Ví dụ


```
/** 
  http://localhost:3000/
  /app/page.tsx 
**/

import Link from 'next/link';

const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={"/admin"}>Admin</Link>
        </li>
        <li>
          <Link href={"/admin/dashboard"}>DashBoard</Link>
        </li>
      </ul>

      <div className={styles.description}>Hello world</div>
    </>
  );
}

export default Home;
```

Trong đoạn mã này, bạn đã tạo một component Home và sử dụng component Link từ next/link để tạo ra các liên kết điều hướng đến trang “Admin” và “Dashboard”.

Cụ thể, khi người dùng nhấp vào liên kết “Admin”, họ sẽ được chuyển hướng đến trang /admin, và khi nhấp vào liên kết “DashBoard”, họ sẽ được chuyển hướng đến trang /admin/dashboard.

```
/** 
    http://localhost:3000/admin/
    /app/admin/page.tsx 
**/

'use client'

import { useRouter } from "next/navigation";

const Admin = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    }
    return (
        <>
            <button onClick={handleClick}>Back Home</button> 
            <br /><br />
            Admin
        </>
    )
}

export default Admin;
```

Đây là một đoạn mã mẫu về cách sử dụng điều hướng trang (Navigation) trong Next.js. Trong đoạn mã này, bạn đã tạo một component Admin và sử dụng hook useRouter từ next/navigation để tạo ra một hàm handleClick điều hướng người dùng về trang chủ (/).

Cụ thể, khi người dùng nhấp vào nút “Back Home”, họ sẽ được chuyển hướng về trang chủ nhờ vào hàm handleClick sử dụng phương thức push của router.

*Bài tiếp theo [NX9 Dàn Layout ](/session/session_09_layout.md)*