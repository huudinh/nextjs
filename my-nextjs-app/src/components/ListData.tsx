'use client';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import CreateModal from './CreateModal';

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
    </div>
  );
}

export default ListData;