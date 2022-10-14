// import axios from "axios";
// import React, { useEffect, useState } from "react";


// const UserDashboard = () => {
//     const [data, setData] = useState([{}]);
//     useEffect(() => {
//         getUser();
//         console.log(data);

//     }, []);
//     const getUser = async () => {
//         await axios.get("http://localhost:4000/posts")
//             .then((res) => setData(res.data));
//     };
//     const handleDelete = async (id) => {
//         await axios
//             .delete("http://localhost:4000/posts/" + id)
//             .then((res) => alert("deleted success"));
//         getUser();
//     };
//     return (
//         <div><h1>User UserDashboard</h1>
//             <table class="table table-dark table-hover">
//                 <thead>
//                     <tr>
//                         <th scope="col">ID</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Password</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data && data.map((user) => (
//                         <tr>
//                             <th scope="row">{user.id}</th>
//                             <td>{user.name}</td>
//                             <td>{user.password}</td>
//                             <td>{user.email}</td>
//                             <td
//                                 style={{ display: "flex", justifyContent: "Space-between" }}
//                             >
//                                 <button className="btn btn-info">Edit</button>

//                                 <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}

//                 </tbody>
//             </table>

//         </div>


//     )
// }

// export default UserDashboard;