import axios from "axios";
// import React from "react";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import "./Signup.css";
//import UserDashboard from "./UserDashboard";
// import { Link } from “react - router - dom”;
// import Button from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
//import JSONDATA from "./db.json";
import signupvideo from '../pages/bg/signupvideo.mp4';


const Signup = () => {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        getUser();
        console.log(data);

    }, []);
    const getUser = async () => {
        await axios.get("http://localhost:4000/posts")
            .then((res) => setData(res.data));
    };

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",

    });

    const [updateData, setUpdateData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        id: ""
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFormSubmit = async (e) => {
        let response = await axios.post("http://localhost:4000/posts", formData);

        if (response) {
            alert("Data submitted successfully");
        }
        else {
            alert("something went wrong");
        }
        setFormData({
            name: "",
            email: " ",
            mobile: " ",
            password: " ",
        });
        getUser();
    };
    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:4000/posts/" + id)
            .then((res) => alert("deleted success"));
        getUser();
    };

    const handleUpdate = async () => {
        await axios
            .put(`http://localhost:4000/posts/${updateData.id}`, updateData)
            .then((res) => {
                getUser()
            });
    };

    return (



        <div className="outer">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        {/* <div className=" signup" style={{ backgroundImage: "url(images/signup.jpg)" }}></div> */}
                        <h1 className="form-label">Guests Enrollment</h1>
                    </div>
                </div>
                <form class="px-md-2">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            value={formData.name}
                            onChange={(e) => setFormData({
                                ...formData, name: e.target.value
                            })}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput2"
                            value={formData.email}
                            onChange={(e) => setFormData({
                                ...formData, email: e.target.value
                            })}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">MobileNo</label>
                        <input type="number" class="form-control" id="exampleFormControlInput3"
                            value={formData.mobile}
                            onChange={(e) => setFormData({
                                ...formData, mobile: e.target.value
                            })}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Aadhar number</label>
                        <input type="password" class="form-control" id="exampleFormControlInput4"
                            value={formData.password}
                            onChange={(e) => setFormData({
                                ...formData, password: e.target.value
                            })}
                        />
                    </div>
                    {/* <div className="mb-3">
                <button className="btn btn-success" onClick={handleFormSubmit}>Add User</button>
            </div>{" "} */}
                    <button className="btn btn-success btn-lg mb-1" onClick={handleFormSubmit}>Submit</button>

                </form>
                <div id="data">
                    <h1 className="form-labell"> UserDashboard</h1>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((user) => (
                                <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td
                                        style={{ display: "flex", justifyContent: "Space-between" }}
                                    >
                                        <button className="btn btn-info"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal" onClick={() => {
                                                handleShow(); setUpdateData({
                                                    name: user.name,
                                                    email: user.email,
                                                    mobile: user.mobile,
                                                    password: user.password,
                                                    id: user.id
                                                })
                                            }}>Edit</button>
                                        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button> */}

                                        <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" value={updateData.name} onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })} placeholder="Enter name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput2" value={updateData.email} onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })} placeholder="Enter email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput3" className="form-label">Mobile Number</label>
                            <input type="number" className="form-control" id="exampleFormControlInput3" value={updateData.mobile} onChange={(e) => setUpdateData({ ...updateData, mobile: e.target.value })} placeholder="Enter number" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput4" value={updateData.password} onChange={(e) => setUpdateData({ ...updateData, password: e.target.value })} placeholder="Enter password" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => { handleClose(); handleUpdate() }}>
                            Update User
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/* <video className='videoTag' autoPlay loop muted>
                <source src={signupvideo} type='video/mp4' />
            </video> */}
        </div>
    );
};
export default Signup;
