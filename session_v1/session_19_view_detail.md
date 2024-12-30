# NX19 View Detail

Để đọc một user cụ thể dựa trên ID, bạn cần thêm một trường hợp xử lý trong phương thức `GET` để kiểm tra xem có ID được cung cấp trong yêu cầu hay không. Nếu có, bạn sẽ tìm và trả về user tương ứng. Dưới đây là mã đã được cập nhật để thực hiện điều này:


### Sửa Backend pages/api/users.ts

```typescript
// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data.json');

const readData = () => {
  const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(jsonData);
};

const writeData = (data: User) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id, name, age } = req.body;

  let users = readData();

  switch (method) {
    case 'GET':
      if (req.query.id) {
        // Trả về user cụ thể dựa trên ID
        const userId = parseInt(req.query.id as string, 10);
        const user = users.find((user: User) => user.id === userId);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } else {
        // Trả về danh sách user
        res.status(200).json(users);
      }      
      break;
    case 'POST':
      // Thêm một user mới
      const maxId = users.reduce((max:number, user:User) => (user.id > max ? user.id : max), 0);
      const newUser = { id: maxId + 1, name, age };
      users.push(newUser);
      writeData(users);
      res.status(201).json(newUser);
      break;
    case 'PUT':
      // Sửa một user
      const userIndex = users.findIndex((user: User) => user.id === id);
      if (userIndex !== -1) {
        users[userIndex] = { id, name, age };
        writeData(users);
        res.status(200).json(users[userIndex]);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      break;
    case 'DELETE':
      // Xóa một user
      const updatedUsers = users.filter((user: User) => user.id !== id);
      if (updatedUsers.length !== users.length) {
        users = updatedUsers;
        writeData(users);
        res.status(200).json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}

```

### Giải thích:
1. **Kiểm tra ID trong yêu cầu GET**: Kiểm tra xem có ID được cung cấp trong yêu cầu GET hay không (`req.query.id`).
2. **Tìm user theo ID**: Nếu có ID, tìm user tương ứng trong danh sách `users` và trả về user đó. Nếu không tìm thấy, trả về thông báo lỗi.
3. **Trả về danh sách user**: Nếu không có ID trong yêu cầu GET, trả về toàn bộ danh sách user.

### Sửa file app/admin/users/[id]/page.tsx

```javascript
'use client'
import useSWR, { Fetcher } from 'swr'
import Link from 'next/link'

const ViewDetailUser = ({ params } : { params: { id: string } }) => {
    const fetcher:Fetcher<User> = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(`/api/users?id=${params.id}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Failed to load user data</div>
    if (!data) return <div>No user data found</div>

    return (
        <div> 
            <p>Chi tiết <b>User</b> có id: {params.id}</p>
            <p>Họ tên: <b>{data.name}</b></p>
            <p>Tuổi: <b>{data.age}</b></p>
            <p><Link href="/admin/users/">Quay lại</Link></p>
        </div>
    )
}

export default ViewDetailUser;
```

### Giải thích:
1. **Xử lý lỗi**: Thêm kiểm tra `if (error)` để hiển thị thông báo lỗi nếu có lỗi xảy ra trong quá trình lấy dữ liệu.
2. **Kiểm tra dữ liệu**: Thêm kiểm tra `if (!data)` để hiển thị thông báo nếu không tìm thấy dữ liệu người dùng.

Cú pháp `{ params } : { params: { id: string } }` trong TypeScript là một cách để sử dụng destructuring và type annotation cùng nhau. Hãy cùng phân tích từng phần:

### Destructuring
Destructuring là một cú pháp cho phép bạn trích xuất các giá trị từ mảng hoặc đối tượng và gán chúng vào các biến riêng lẻ. Trong trường hợp này, `{ params }` là destructuring của đối tượng `props` để lấy thuộc tính `params`.

### Type Annotation
Type annotation là cách để chỉ định kiểu dữ liệu cho biến hoặc tham số trong TypeScript. Trong trường hợp này, `: { params: { id: string } }` là type annotation để chỉ định kiểu dữ liệu của `params`.

### Kết hợp Destructuring và Type Annotation
Khi kết hợp cả hai, bạn có thể trích xuất giá trị từ đối tượng và đồng thời chỉ định kiểu dữ liệu cho giá trị đó. Cụ thể trong trường hợp này:

- `{ params }` là destructuring để lấy thuộc tính `params` từ đối tượng `props`.
- `: { params: { id: string } }` là type annotation để chỉ định rằng `params` là một đối tượng có thuộc tính `id` là một chuỗi (string).

### Ví dụ
Dưới đây là một ví dụ đầy đủ để minh họa:

```typescript
type Props = {
  params: {
    id: string;
  };
};

const ViewDetailUser = ({ params }: Props) => {
  const { id } = params;
  return <div>User ID: {id}</div>;
};
```

Trong ví dụ này:
- `type Props` định nghĩa kiểu dữ liệu cho `props`, trong đó `params` là một đối tượng có thuộc tính `id` là một chuỗi.
- `{ params }: Props` sử dụng destructuring để lấy `params` từ `props` và đồng thời chỉ định kiểu dữ liệu cho `params`.

*Bài tiếp theo [NX20 View Detail](session_20_view_detail.md)*