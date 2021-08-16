import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BreadCrumb } from '../ui/BreadCrumb';
import { startCreatingCustomer, startDeletingCustomer, startGettingCustomers, startUpdatingCustomer } from '../../actions/customer';
import { Modal, ModalBody, ModalHeader, ModalFooter, Label } from 'reactstrap';
import { useForm } from '../../customHooks/useForm';

export const SampleCrud = () => {

    const [values, handleInputChange] = useForm({
        id: 0,
        documentId: '',
        firstName: '',
        lastName: ''
    });

    const { id, firstName, lastName, documentId } = values;

    const dispatch = useDispatch();

    const [datos, setDatos] = useState([]);

    const [modalInsert, setModalInsert] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    useEffect(() => {
        dispatch(startGettingCustomers(setDatos));
    }, [dispatch]);

    const openCloseModalInsert = () => {
        setModalInsert(!modalInsert);
    }

    const openCloseModalUpdate = () => {
        setModalUpdate(!modalUpdate);
    }

    const openCloseModalDelete = () => {
        setModalDelete(!modalDelete);
    }

    const handleCreate = () => {
        openCloseModalInsert();

        values.id = 0;
        values.firstName = '';
        values.lastName = '';
        values.documentId = '';
    }

    const handleUpdate = (cust) => {

        openCloseModalUpdate();

        values.id = cust.id;
        values.firstName = cust.firstName;
        values.lastName = cust.lastName;
        values.documentId = cust.documentId;

    }

    const handleDelete = (cust) => {
        openCloseModalDelete();

        values.id = cust.id;
        values.firstName = cust.firstName;
        values.lastName = cust.lastName;
        values.documentId = cust.documentId;
    }

    const createCustomer = () => {
        dispatch(startCreatingCustomer(datos, setDatos, values, 'Roy'))
        openCloseModalInsert();
    }

    const updateCustomer = () => {
        dispatch(startUpdatingCustomer(datos, setDatos, values, 'Roy'))
        openCloseModalUpdate();
    }

    const deleteCustomer = () => {
        dispatch(startDeletingCustomer(datos, setDatos, values, 'Roy'))
        openCloseModalDelete();
    }

    return (
        <div>

            <BreadCrumb />

            <div className="row mb-3">
                <div className="col-6">
                    <h3>Simple CRUD</h3>
                </div>
                <div className="col-6 d-flex flex-row-reverse">
                    <button className="btn btn-primary" onClick={handleCreate}>Create</button>
                </div>
            </div>

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Document</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map(cust => (
                        <tr key={cust.id}>
                            <th scope="row">{cust.id}</th>
                            <td>{cust.firstName}</td>
                            <td>{cust.lastName}</td>
                            <td>{cust.documentId}</td>
                            <td>
                                <button className="btn btn-primary mr-3" onClick={() => handleUpdate(cust)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(cust)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={modalInsert}>
                <ModalHeader>Insert a customer</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <Label>First Name:</Label>
                        <br />
                        <input type="text" className="form-control" placeholder="First Name" autoComplete="off" value={firstName} name="firstName" onChange={handleInputChange} required />
                        <br />
                        <Label>Last Name:</Label>
                        <br />
                        <input type="text" className="form-control" placeholder="Last Name" autoComplete="off" value={lastName} name="lastName" onChange={handleInputChange} required />
                        <br />
                        <Label>Document:</Label>
                        <br />
                        <input type="text" className="form-control" placeholder="Document" autoComplete="off" value={documentId} name="documentId" onChange={handleInputChange} required />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary mr-4" onClick={createCustomer}>Insert</button>
                    <button className="btn btn-danger" onClick={() => openCloseModalInsert()}>Cancel</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalUpdate}>
                <ModalHeader>Update a customer</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <Label>ID:</Label>
                        <br />
                        <input type="text" className="form-control" value={id} name="id" readOnly />
                        <br />
                        <Label>First Name:</Label>
                        <br />
                        <input type="text" className="form-control" placeholder="First Name" autoComplete="off" value={firstName} name="firstName" onChange={handleInputChange} required />
                        <br />
                        <Label>Last Name:</Label>
                        <br />
                        <input type="text" className="form-control" placeholder="Last Name" autoComplete="off" value={lastName} name="lastName" onChange={handleInputChange} required />
                        <br />
                        <Label>Document:</Label>
                        <br />
                        <input type="text" className="form-control" placeholder="Document" autoComplete="off" value={documentId} name="documentId" onChange={handleInputChange} required />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary mr-4" onClick={updateCustomer}>Update</button>
                    <button className="btn btn-danger" onClick={() => openCloseModalUpdate()}>Cancel</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalDelete}>
                <ModalBody>
                    <p>Are you sure you want to delete this customer? {firstName + ' ' + lastName}</p>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={deleteCustomer}>Yes</button>
                    <button className="btn btn-danger" onClick={() => openCloseModalDelete()}>No</button>
                </ModalFooter>
            </Modal>

        </div>
    );
}
