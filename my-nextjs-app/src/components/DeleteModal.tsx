'use client'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

interface IProps {
  showModalDelete: boolean;
  setShowModalDelete: (showModalDelete: boolean) => void;
  userDelete: User | null;
  setUserDelete: (setUserDelete:User | null) => void;
  deleteUser:(id:number) => void;
}

function DeleteModal(props: IProps) {
  const { showModalDelete, setShowModalDelete, userDelete, setUserDelete, deleteUser } = props;

  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    if(userDelete && userDelete.id){
      setId(userDelete.id);
      setName(userDelete.name);
      setAge(userDelete.age);
    }
  }, [userDelete]);

  const handleSubmit = () => {    
    if(!name){
      toast.error('Note empty name');
      return;
    }

    console.log('>> check data', name, age);
    deleteUser(id);
    handleCloseModal();
  }

  const handleCloseModal = () => {
    setUserDelete(null);
    setShowModalDelete(false);
  }

  return (
    <>
      <Modal
        show={showModalDelete}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="..." 
                value={name} 
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="..." 
                value={age} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="danger" onClick={()=> handleSubmit()}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;