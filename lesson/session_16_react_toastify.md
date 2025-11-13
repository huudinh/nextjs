# NX16 React Toastify

React Toastify là một thư viện dành cho React giúp bạn tạo ra các thông báo dạng toast một cách nhanh chóng và dễ dàng. Toast là những thông báo nhỏ xuất hiện ở góc màn hình, thông báo cho người dùng về một sự kiện nào đó mà không làm gián đoạn trải nghiệm của họ.

https://www.npmjs.com/package/react-toastify

### Lợi ích của React Toastify
- **Dễ sử dụng**: Chỉ cần vài dòng code, bạn đã có thể hiển thị thông báo.
- **Tùy chỉnh cao**: Bạn có thể thay đổi vị trí, kiểu dáng, thời gian hiển thị và nhiều thứ khác.
- **Nhẹ và hiệu quả**: Thư viện nhỏ gọn, không ảnh hưởng nhiều đến hiệu suất của ứng dụng.
- **Hỗ trợ nhiều loại thông báo**: Bao gồm thông báo thành công, cảnh báo, lỗi, và thông tin.

### Cách sử dụng React Toastify
1. **Cài đặt thư viện**:
    ```bash
    npm install react-toastify
    ```

2. **Import và cấu hình**:
    ```javascript
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

    toast.configure({
      autoClose: 2000,
      draggable: false,
      position: toast.POSITION.TOP_LEFT
    });

    const notify = () => toast('Wow so easy!');

    const App = () => (
      <div className="App">
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
    ```

3. **Hiển thị thông báo**:
    - Sử dụng hàm `toast()` để hiển thị thông báo.
    - Bạn có thể tùy chỉnh thông báo với các loại như `toast.success()`, `toast.error()`, `toast.info()`, và `toast.warning()`.

React Toastify giúp bạn dễ dàng thêm các thông báo đẹp mắt và hiệu quả vào ứng dụng React của mình.

4. **Áp dụng Toast**
    - Cài đặt thư viện vào dự án my-nextjs-app
    - Mỗi khi thêm mới User thành công khiển thị thông báo
    - Nhắc lỗi khi thiếu thông tin tên User

### Sửa component CreateModal

Sửa file src/components/CreateModal.tsx

```typescript
'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (showModalCreate: boolean) => void;
  addNewUser: (name:string, age:number) => void;
}

function CreateModal(props: IProps) {
  const { showModalCreate, setShowModalCreate, addNewUser } = props;

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  const handleSubmit = () => {    
    if(!name){
      toast.error('Note empty name');
      return;
    }

    console.log('>> check data', name, age);
    addNewUser(name, age);
    handleCloseModal();
  }

  const handleCloseModal = () => {
    setName('');
    setAge(0);
    setShowModalCreate(false)
  }

  return (
    <>
      <Modal
        show={showModalCreate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="..." 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="..." 
                value={age} 
                onChange={(e) => setAge(parseInt(e.target.value))}              
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> handleSubmit()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
```

### Sửa ListData

Sửa file src/components/ListData.tsx

```typescript
'use client';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import CreateModal from './CreateModal';
import { ToastContainer, toast } from 'react-toastify';
interface IProps { 
  users: User[]; 
}

const ListData = (props:IProps) => {
  const [users, setUsers] = useState(props.users);

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);

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
  const sortedUsers = users.sort((a, b) => b.id - a.id);
  return (
    <div>
      <h1>User List</h1>
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
                <Button variant="primary">View</Button>
                <Button variant="warning" className="mx-3" onClick={() => updateUser(user.id, 'Dinh', 40)}>Edit</Button>
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

*Bài tiếp theo [NX17 Update User](session_17_update_user.md)*