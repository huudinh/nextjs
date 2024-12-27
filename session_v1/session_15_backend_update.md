# NX15 Backend Update

Để lưu trữ dữ liệu vào file `data.json` trong Next.js, bạn có thể sử dụng các module của Node.js như `fs` (file system) để đọc và ghi dữ liệu vào file. Dưới đây là cách bạn có thể cập nhật mã của mình để lưu trữ dữ liệu vào file `data.json`:

### 1. Tạo file `data.json`
Tạo một file `data.json` trong thư mục gốc của dự án và thêm dữ liệu mẫu vào đó:

```json
[
  { "id": 1, "name": "John Doe", "age": 28 },
  { "id": 2, "name": "Jane Smith", "age": 34 },
  { "id": 3, "name": "Michael Johnson", "age": 45 }
]
```

### 2. Cập nhật mã trong `pages/api/users.ts`
Sử dụng module `fs` để đọc và ghi dữ liệu vào file `data.json`:

```typescript
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
      // Trả về danh sách user
      res.status(200).json(users);
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

1. **Đọc dữ liệu từ file**: Sử dụng `fs.readFileSync` để đọc dữ liệu từ file `data.json` và chuyển đổi nó thành đối tượng JavaScript bằng `JSON.parse`.

2. **Ghi dữ liệu vào file**: Sử dụng `fs.writeFileSync` để ghi dữ liệu vào file `data.json` sau khi chuyển đổi đối tượng JavaScript thành chuỗi JSON bằng `JSON.stringify`.

3. **Cập nhật các phương thức API**: Cập nhật các phương thức `GET`, `POST`, `PUT`, và `DELETE` để đọc và ghi dữ liệu từ file `data.json`.

Bằng cách này, bạn có thể lưu trữ dữ liệu vào file `data.json` trong Next.js và quản lý dữ liệu người dùng một cách dễ dàng. Hãy thử và kiểm tra lại để đảm bảo rằng mọi thứ hoạt động như mong đợi.


*Bài tiếp theo [NX15 Design Modal Add New](session_15_add_new.md)*

