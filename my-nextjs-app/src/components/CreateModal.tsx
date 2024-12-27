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