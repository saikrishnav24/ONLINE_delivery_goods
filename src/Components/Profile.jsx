import React, { useState, useEffect } from 'react';
// import { useState } from "react";
// import {  useNavigate } from "react-router-dom";
import abc from './pic.png';
// import Swal from "swal"
import axios from "axios";
// import Navbar from "./Components/Navbar"; 
// import "./Components/Navbar.scss";
// import Swal from 'sweetalert2';
import { ToastContainer, toast } from "react-toastify";
// import { Navbar } from 'rsuite';
import Navbar from './Navbar';
const Profile = () => {
    // const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [save, setsave] = useState(false);
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [gender, setgender] = useState("")
    const [address, setaddress] = useState("")
    const [pincode, setpincode] = useState("")
    const handlesubmit = (e) => {
        e.preventdefault();
        // console.log(`${gender}`)
    }
    const savehandle = () => {
        // e.preventdefault()
        toast.success("Saved Successfully")
        setIsEditing(false)
        setsave(false)
        console.log({ "name": name, "email": email, "number": number, "gender": `${gender}`, "address": address, "pincode": pincode });

        // setTimeout(function() { window. location. replace('/'); }, 5000)
    }
    const edithandle = () => {
        setIsEditing(true)
        setsave(true)
        // setname("")
        // setemail("")
        // setnumber("")
        // // setgender("")
        // setaddress("")

        // setpincode("")

    }
    // const navigate = useNavigate();

    // const loginNavigate = (e) => {
    //     navigate('/user');
    //     window.location.reload();
    // }
    // Swal.fire({
    //     title: 'Do you want to save the changes?',
    //     showDenyButton: true,
    //     showCancelButton: true,
    //     confirmButtonText: 'Save',
    //     denyButtonText: `Don't save`,
    //   }).then((result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
    //       Swal.fire('Saved!', '', 'success')
    //     } else if (result.isDenied) {
    //       Swal.fire('Changes are not saved', '', 'info')
    //     }
    //   })
    // const swalWithBootstrapButtons = Swal.mixin({
    //     customClass: {
    //       confirmButton: 'btn btn-success',
    //       cancelButton: 'btn btn-danger'
    //     },
    //     buttonsStyling: true
    //   })

    //   swalWithBootstrapButtons.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonText: 'Yes, delete it!',
    //     cancelButtonText: 'No, cancel!',
    //     reverseButtons: true
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       swalWithBootstrapButtons.fire(
    //         'Deleted!',
    //         'Your file has been deleted.',
    //         'success'
    //       )
    //     } else if (
    //       /* Read more about handling dismissals below */
    //       result.dismiss === Swal.DismissReason.cancel
    //     ) {
    //       swalWithBootstrapButtons.fire(
    //         'Cancelled',
    //         'Your imaginary file is safe :)',
    //         'error'
    //       )
    //     }
    //   })
    const [dataa, setDataa] = useState({});
    // useEffect(() => {
    //     //call API
    //     axios.get('http://ec2-13-233-41-227.ap-south-1.compute.amazonaws.com:8001/userinfo', {
    //         // headers: {
    //         //    'Content-Type': 'application/json',
    //         //    "Access-Control-Allow-Headers": '*',
    //         //   }
    //     })
    //         .then(response => {
    //             setDataa(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);
    // const handleSubmit = () => {
    //     Swal.fire({
    //         title: 'Do you want to order from this address?',
    //         // text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes'


    //     }).then((result) => {
    //         if (result.value) {
    //             //   Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //             window.location.href = "/destination";
    //         }
    //         else {
    //             window.location.href = "/home"
    //         }
    //     });
    // };



    return (
        <>
            <Navbar />
            <div className='xyz'>

                <div className='end '>

                    {/* <Link to="/changepassword" style={{ color: 'black', textDecoration: "none" }}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    Changepassword

                </Link> */}
                </div>


                <div className='flex'>
                    <div className="rm">
                        <img src={abc} alt='dele' height="500" width="500" />
                    </div>
                    <div className="col-md-5">
                        <div className='yy'>
                            <h2>Edit Profile !</h2>
                        </div>
                        <div >
                            <form onSubmit={handlesubmit}>
                                <div className='no'>
                                    <div className="mb-2" id="formBasicName">
                                        <label>Name</label>
                                        {!isEditing &&
                                            (<div className="">
                                                <input value={name} className='form-control' required placeholder="Enter name" />
                                            </div>)}
                                        {isEditing &&
                                            (<input type="Name" value={name} onChange={(t) => (setname(t.target.value))} id="userName" required placeholder="Enter name" className='form-control' />)
                                        }

                                    </div>
                                    <div className="mb-2" id="formBasicEmail">
                                        <label> Email </label>
                                        {!isEditing &&
                                            (<div className="">
                                                <input value={email} className='form-control' required placeholder="Enter email" />
                                            </div>)}
                                        {isEditing &&
                                            <input type="Email" value={email} onChange={(e) => (setemail(e.target.value))} id="userEmail" required placeholder="Enter email" className='form-control' />
                                        }
                                    </div>
                                    <div className="mb-2" id="formBasicnumber">
                                        <label> Phone number </label>
                                        {!isEditing &&
                                            (<div className="">
                                                <input value={number} className='form-control' required placeholder="Enter phonenumber" />
                                            </div>)}
                                        {isEditing &&
                                            <input type="number" value={number} onChange={(a) => { if (a.target.value.length <= 10) { (setnumber(a.target.value)) } }} required placeholder="Enter phonenumber" className='form-control' />
                                        }
                                    </div>
                                    <div >
                                        <label>Gender :</label>
                                        {!isEditing &&
                                            <input type="radio" value="male" name="gender" onChange={(x) => (setgender(x.target.value))} checked={gender === 'male'} />
                                        }
                                        {isEditing &&
                                            <input type="radio" value="male" name="gender" onChange={(x) => (setgender(x.target.value))} checked={gender === 'male'} />}Male
                                        {!isEditing &&
                                            <input type="radio" value="female" name="gender" onChange={(y) => (setgender(y.target.value))} checked={gender === 'female'} />}
                                        {isEditing &&
                                            <input type="radio" value="female" name="gender" onChange={(y) => (setgender(y.target.value))} checked={gender === 'female'} />}Female
                                    </div>
                                    <div className="mb-2" id="formBasicAddress">
                                        <label> Address </label>
                                        {!isEditing &&
                                            (<div className="">
                                                <input value={address} className='form-control' required placeholder="Enter address" />
                                            </div>)}
                                        {isEditing &&
                                            <textarea value={address} onChange={(b) => (setaddress(b.target.value))} rows="4" cols="10" required placeholder="Enter address" className='form-control'></textarea>
                                        }
                                    </div>

                                    <div className="mb-2" id="formBasicnumber">
                                        <label> Pincode </label>
                                        {!isEditing &&
                                            (<div className="">
                                                <input value={pincode} className='form-control' required placeholder="Enter pincode" />
                                            </div>)}
                                        {isEditing &&
                                            <input type="number" value={pincode} onChange={(e) => { if (e.target.value.length <= 6) { (setpincode(e.target.value)) } }} required placeholder="Enter pincode" className='form-control' />
                                        }
                                    </div>



                                </div>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover

                                />
                                {save &&
                                    <button className='btn btn-primary' type='submit' onClick={savehandle}>
                                        Save
                                    </button>
                                }
                            </form>
                            <div className='cc'>
                                {!isEditing &&
                                    <button className='btn btn-primary' onClick={edithandle} >
                                        Edit
                                    </button>
                                }

                                {/* {save &&
                                <button className='btn btn-primary' type='submit' >
                                    Save
                                </button>
                            } */}
                            </div>

                            <div className='m'>
                                {/* <button className='btn btn-primary' onClick={handleSubmit}>
                                Next
                                <i class="bi bi-arrow-right"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Profile;

