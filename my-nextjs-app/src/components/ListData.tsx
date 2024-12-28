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