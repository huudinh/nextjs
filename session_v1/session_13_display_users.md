# NX13 Display List Users

### Tạo kiểu dữ liệu users

- Tạo file src/types/backend.d.ts

Đoạn mã này định nghĩa một interface `IUser` trong TypeScript. Interface là một cách để định nghĩa cấu trúc của một đối tượng, giúp đảm bảo rằng các đối tượng tuân theo một cấu trúc nhất định. Dưới đây là giải thích chi tiết về từng phần của đoạn mã:

```typescript
interface IUser {
    id: number;
    name: string;
    age: number;
};
```

#### Giải thích từng phần:
- **interface IUser**: Định nghĩa một interface có tên là `IUser`.
- **id: number**: Thuộc tính `id` có kiểu dữ liệu là `number` (số).
- **name: string**: Thuộc tính `name` có kiểu dữ liệu là `string` (chuỗi).
- **age: number**: Thuộc tính `age` có kiểu dữ liệu là `number` (số).

#### Mục đích:
Interface `IUser` này có thể được sử dụng để đảm bảo rằng các đối tượng người dùng (user) có các thuộc tính `id`, `name`, và `age` với các kiểu dữ liệu tương ứng. Ví dụ:

```typescript
const user: IUser = {
    id: 1,
    name: 'John Doe',
    age: 30
};
```

Trong ví dụ trên, đối tượng `user` tuân theo cấu trúc của interface `IUser`, đảm bảo rằng nó có các thuộc tính `id`, `name`, và `age` với các kiểu dữ liệu đúng. Điều này giúp tăng tính nhất quán và an toàn khi làm việc với các đối tượng trong TypeScript.

### Update lại backend

```typescript
// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';

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

### Sửa lại file /app/page.tsx

```typescript
'use client';
import ListData from "@/components/ListData";
import styles from "./page.module.css";
import useSWR from 'swr'

const Home = () => {

  const fetcher = (url:string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR('/api/users', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  // console.log(data);

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <div className={styles.description}>Danh sách người dùng</div>
      {data && <ListData users={data} />}
    </>
  );
}

export default Home;

```

### Hiển thị  danh sách user sửa file src/components/ListData.tsx

```typescript
'use client';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

interface IProps { 
  users: User[]; 
}

const ListData = (props:IProps) => {
  const [users, setUsers] = useState(props.users);

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
  // console.log(users);
  return (
    <div>
      <h1>User List</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <Button variant="primary">View</Button>
                <Button variant="warning" className="mx-3" onClick={() => updateUser(user.id, 'Dinh', 40)}>Edit</Button>
                <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant='primary' onClick={() => addUser('New User', 30)}>Add User</Button>
    </div>
  );
}

export default ListData;
```

*Bài tiếp theo [NX14 Design Modal Add User](session_14_add_user.md)*

