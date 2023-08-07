import React, { useState ,useEffect} from 'react';
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import abc from './pic.png';
// import Swal from "swal"
import Swal from 'sweetalert2';
import axios from "axios";
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";

const Create = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [save, setsave] = useState(false);
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [gender, setgender] = useState("")
    const [address, setaddress] = useState("")
    const [pincode, setpincode] = useState("")
    const savehandle = () => {
       toast.success("Saved successfully")
        console.log({ "name": name, "email": email, "number": number, "gender": gender, "address": address, "pincode": pincode });
    }
 

    const [dataa, setDataa] = useState({});
    useEffect(() => {
        const headers = { 'Authorization': 'Bearer token' };
        
        axios.get('http://ec2-13-235-67-132.ap-south-1.compute.amazonaws.com:8001/userinfo', 
        { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}
        )
          .then(response => {
            setDataa(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    const handleSubmit = () => {
        Swal.fire({
            title: 'Do you want to order from this address?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
            

        }).then((result) => {
            if (result.value) {
                //   Swal.fire("Deleted!", "Your file has been deleted.", "success");
                window.location.href = "/source";
            }
            else {
                window.location.href = "/home"
            }
        });
    };
       
            

        // }).then((result) => {
        //     if (result.value) {
        //         //   Swal.fire("Deleted!", "Your file has been deleted.", "success");
        //         window.location.href = "/source";
        //     }
        //     else {
        //         window.location.href = "/home"
        //     }
        // });
    // };



    return (

        <div className='xyz'>
            {/* <div className='end '>

                <Link to="/changepassword" style={{ color: 'black', textDecoration: "none" }}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    Changepassword

                </Link>
            </div> */}
           

            <div className='flex'>
                <div className="rm">
                    <img src={abc} alt='dele' height="500" width="500" />
                </div>
                <div className="col-md-5">
                    <div className='yy'>
                        <h1>Create your Profile !</h1>
                    </div>
                    <div >
                        <form>
                            <div className='no'>
                                <div className="mb-2" id="formBasicName">
                                    <label>Name</label>
                                  
                                  
                                        <input type="Name" value={name} onChange={(t) => (setname(t.target.value))} id="userName" placeholder="Enter name" className='form-control' />
                                    

                                </div>
                                <div className="mb-2" id="formBasicEmail">
                                <label> Email </label>
                                        <input type="Email" value={email} onChange={(e) => (setemail(e.target.value))} id="userEmail" placeholder="Enter email" className='form-control' />
                                    
                                </div>
                                <div className="mb-2" id="formBasicnumber">
                                    <label> Phone number </label>
                                 
                                        <input type="number" value={number} onChange={(a) => { if (a.target.value.length <= 10) { (setnumber(a.target.value)) } }} placeholder="Enter phonenumber" className='form-control' />
                                    
                                </div>
                                <div >
                                    <label>Gender</label>

                                    <input type="radio" name="gender" value="male" />Male

                                    <input type="radio" name="gender" value="female" />Female

                                </div>
                                <div className="mb-2" id="formBasicAddress">
                                    <label> Address </label>
                                  
                                        <textarea value={address} onChange={(b) => (setaddress(b.target.value))} rows="4" cols="10" placeholder="Enter address" className='form-control'></textarea>
                                    
                                </div>
                               
                                <div className="mb-2" id="formBasicnumber">
                                    <label> Pincode </label>
                                    
                                        <input type="number" value={pincode} onChange={(e) => { if (e.target.value.length <= 6) { (setpincode(e.target.value)) } }} placeholder="Enter pincode" className='form-control' />
                                    
                                </div>


                                
                            </div>
                        </form>
                        <br>
                        </br>
                        <div className='cc'>
                          
                                <button className='btn btn-primary' onClick={savehandle} >
                                    Save
                                </button>
                            
                        </div>
                        
                        <div className='m'>
                            <button className='btn btn-primary' onClick={handleSubmit}>
                                Next
                                <i class="bi bi-arrow-right"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>

    )
}
export default Create;


