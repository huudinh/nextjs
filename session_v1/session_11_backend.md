# NX11 Cài đặt Backend API

Để tạo một API route quản lý user với các chức năng thêm, sửa, xóa trong Next.js bằng TypeScript, bạn có thể làm theo các bước sau:

### 1. Tạo thư mục `api`
Trong thư mục `pages` của dự án Next.js, tạo một thư mục mới có tên là `api`. Thư mục này sẽ chứa tất cả các API routes của bạn.

### 2. Tạo file API
Trong thư mục `api`, tạo một file mới có tên là `users.ts`:

```
pages/
  └── api/
      └── users.ts
```

### 3. Viết mã cho API Route
Trong file `users.ts`, bạn có thể viết mã để xử lý các yêu cầu API. Dưới đây là một ví dụ đơn giản:

```typescript
// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';

type User = {
  id: number;
  name: string;
  age: number;
};

let users: User[] = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Michael Johnson', age: 45 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id, name, age } = req.body;

  switch (method) {
    case 'GET':
      // Trả về danh sách user
      res.status(200).json(users);
      break;
    case 'POST':
      // Thêm một user mới
      const newUser: User = { id: users.length + 1, name, age };
      users.push(newUser);
      res.status(201).json(newUser);
      break;
    case 'PUT':
      // Sửa một user
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex !== -1) {
        users[userIndex] = { id, name, age };
        res.status(200).json(users[userIndex]);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      break;
    case 'DELETE':
      // Xóa một user
      const updatedUsers = users.filter(user => user.id !== id);
      if (updatedUsers.length !== users.length) {
        users = updatedUsers;
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

### 4. Gọi API Route
Bạn có thể gọi API route này từ bất kỳ đâu trong ứng dụng Next.js của bạn. Ví dụ, bạn có thể gọi API này từ một component React:

```typescript
import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  age: number;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = async (name: string, age: number) => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age }),
    });
    const newUser = await response.json();
    setUsers([...users, newUser]);
  };

  const updateUser = async (id: number, name: string, age: number) => {
    const response = await fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, age }),
    });
    const updatedUser = await response.json();
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = async (id: number) => {
    await fetch('/api/users', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
            <button onClick={() => updateUser(user.id, user.name, user.age)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addUser('New User', 30)}>Add User</button>
    </div>
  );
}
```

### Giải thích:

1. **Tạo thư mục `api`**: Thư mục này sẽ chứa tất cả các API routes của bạn.

2. **Tạo file API**: Tạo một file mới trong thư mục `api` để định nghĩa API route.

3. **Viết mã cho API Route**: Viết hàm xử lý yêu cầu API và trả về phản hồi JSON. Trong ví dụ này, API hỗ trợ bốn phương thức: `GET` để lấy danh sách user, `POST` để thêm một user mới, `PUT` để sửa một user, và `DELETE` để xóa một user.

4. **Gọi API Route**: Sử dụng `fetch` để gọi API route từ một component React và hiển thị dữ liệu nhận được.

Bằng cách này, bạn có thể dễ dàng tạo và sử dụng các API routes trong ứng dụng Next.js của mình để quản lý user với các chức năng thêm, sửa, xóa bằng TypeScript. Hãy thử và kiểm tra lại để đảm bảo rằng API route hoạt động như mong đợi.

*Bài tiếp theo [NX12 Cài đặt Backend ](session_11_backend.md)*

