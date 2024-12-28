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