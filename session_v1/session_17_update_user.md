# NX17 Update User

### Tạo components UpdateModal

Tạo file src/components/UpdateModal.tsx

```typescript
'use client'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

interface IProps {
  showModalUpdate: boolean;
  setShowModalUpdate: (showModalUpdate: boolean) => void;
  userUpdate: User | null;
  setUserUpdate: (setUserUpdate:User | null) => void;
  update:(id:number, name:string, age:number) => void;
}

function UpdateModal(props: IProps) {
  const { showModalUpdate, setShowModalUpdate, userUpdate, setUserUpdate, update } = props;

  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    if(userUpdate && userUpdate.id){
      setId(userUpdate.id);
      setName(userUpdate.name);
      setAge(userUpdate.age);
    }
  }, [userUpdate]);

  const handleSubmit = () => {    
    if(!name){
      toast.error('Note empty name');
      return;
    }

    console.log('>> check data', name, age);
    update(id, name, age);
    handleCloseModal();
  }

  const handleCloseModal = () => {
    setName('');
    setAge(0);
    setUserUpdate(null);
    setShowModalUpdate(false);
  }

  return (
    <>
      <Modal
        show={showModalUpdate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
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
          <Button variant="warning" onClick={()=> handleSubmit()}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
```

### Sửa components ListData

Sửa file src/components/ListData.tsx

```Typescript
'use client';
import Table from 'react-bootstrap/Table';
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
                <Button variant="warning" className="mx-3" 
                  onClick={
                    () => {
                      setShowModalUpdate(true);
                      setUserUpdate(user);
                    }
                  }
                  >Edit</Button>
                {/* <Button variant="warning" className="mx-3" onClick={() => updateUser(user.id, 'Dinh', 40)}>Edit</Button> */}
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