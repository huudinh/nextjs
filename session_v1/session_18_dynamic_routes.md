# NX18 Dynamic Routes

Dynamic Routes trong Next.js là một tính năng cho phép bạn tạo các đường dẫn (routes) động mà không cần biết trước tên của các đoạn đường dẫn (segments). Điều này rất hữu ích khi bạn muốn tạo các trang từ dữ liệu động, chẳng hạn như các bài viết blog, sản phẩm, hoặc người dùng.

### Cách hoạt động của Dynamic Routes
Trong Next.js, bạn có thể tạo các Dynamic Routes bằng cách sử dụng các đoạn đường dẫn động (dynamic segments) được điền vào lúc yêu cầu (request time) hoặc được prerendered tại thời điểm build.

### Cú pháp
Để tạo một Dynamic Route, bạn sử dụng dấu ngoặc vuông trong tên file. Ví dụ, để tạo một trang động cho các bài viết blog, bạn có thể tạo một file như sau:

```
pages/posts/[id].js
```

Trong file này, `[id]` là một đoạn đường dẫn động. Khi người dùng truy cập vào đường dẫn `/posts/1`, Next.js sẽ render trang `pages/posts/[id].js` với `id` là `1`.

### Ví dụ
Dưới đây là một ví dụ về cách sử dụng Dynamic Routes trong Next.js:

```javascript
// pages/posts/[id].js
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Post;
```

### Pre-rendering với getStaticPaths và getStaticProps
Để pre-render các trang động, bạn có thể sử dụng các hàm `getStaticPaths` và `getStaticProps`. Dưới đây là một ví dụ:

```javascript
// pages/posts/[id].js
import { useRouter } from 'next/router';

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = {
    id: params.id,
    title: `Post ${params.id}`,
    content: `This is the content of post ${params.id}.`,
  };

  return { props: { post } };
}

export default Post;
```

### Thêm mới slug app/admin/users/[id]

Tạo file page.tsx trong thư mục [id]

```typescript
const ViewDetailUser = () => {
    return (
        <div>
            Chi tiết user
        </div>
    )
}

export default ViewDetailUser;
```

### Thêm mới file app/admin/users/

Tạo file page.tsx trong thư mục app/admin/users/page.tsx

```typescript
'use client'
import styles from "../../page.module.css";
import ListData from "@/components/ListData";
import useSWR from 'swr'

const Users = () => {
    const fetcher = (url:string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR('/api/users', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })

  if (isLoading) return <div>Loading...</div>

    return (
        <>
            <h1 className={styles.description}>Danh sách người dùng</h1>
            <ListData users={data} />
        </>
    )
}

export default Users;
```

### Sửa file src/app/page.tsx

```typescript
import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.description}>Trang chủ</div>
    </>
  );
}

export default Home;

```

### Sửa components ListData.tsx

```typescript
'use client';
import Table from 'react-bootstrap/Table';
import Link from 'next/link'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import CreateModal from './CreateModal';
import UpdateModal from './UpdateModal';
import { ToastContainer, toast } from 'react-toastify';
interface IProps { 
  users: User[]; 
}

const ListData = (props:IProps) => {
  const [users, setUsers] = useState(props.users);

  const [userUpdate, setUserUpdate] = useState<User | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

  // Thêm user vào API
  const addUser = async (name: string, age: number) => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age }),
    });

    const newUser = await response.json();

    if (newUser){
      setUsers([...users, newUser]);
      toast.success('Create success');
    }
  };

  // Update user vào API
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
    toast.success('Create success');
  };

  // Xóa user khỏi API
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

  // Sắp xếp user theo ID giảm dần
  const sortedUsers = users.sort((a, b) => b.id - a.id);

  return (
    <div>      
      <Button 
        variant='primary' 
        onClick={() => {
          setShowModalCreate(true);
        }
      }>Add User</Button><br/><br/>
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
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <Link className='btn btn-primary' href={`/admin/users/${user.id}`}>View</Link>
                <Button variant="warning" className="mx-3" 
                  onClick={
                    () => {
                      setShowModalUpdate(true);
                      setUserUpdate(user);
                    }
                  }
                  >Edit</Button>
                <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <CreateModal 
        showModalCreate={showModalCreate} 
        setShowModalCreate={setShowModalCreate} 
        addNewUser={addUser}
      />

      <UpdateModal 
        showModalUpdate={showModalUpdate} 
        setShowModalUpdate={setShowModalUpdate} 
        userUpdate={userUpdate}
        setUserUpdate={setUserUpdate}
        update={updateUser}
      />

       <ToastContainer 
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
       />
    </div>
  );
}

export default ListData;
```


*Bài tiếp theo [NX18 Dynamic Routes](session_18_dynamic_routes.md)*