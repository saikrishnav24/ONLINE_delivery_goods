import React, { useState, useEffect } from 'react';
import logo from "./sk.png";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Acceptscreen = () => {
    const [acce, setacce] = useState([])
    useEffect(() => {
        console.log(`${localStorage.getItem("Token")}`)
        axios.get(`http://ec2-3-111-51-229.ap-south-1.compute.amazonaws.com:8001/orderstatus_userdata?status=accepted`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("Token")}` } }

            // {headers:{Authorization:`${localStorage.getItem("Token")}`}}
        ).then((res) => {
            setacce(res.data.message)
            console.log(res.data.message)
        })
            .catch(error => {
                console.log(error)
            })
        // http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/orderstatus_userdata

    }, [])

    return (
        <>

            <nav className="fixed-nav-bar">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <a className="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav justify-content-between">

                            <li className="nav-item mr-5">
                                <Link to="/acceptscreen">
                                    <button >Accepted</button>
                                </Link>
                                {/* <a className="hi nav-link" onClick={Acchandle} ><p><span style={{ color: "black", pointer: 'cursor' }}>Accepted Orders</span></p></a> */}
                            </li>

                            {/* <li className="nav-item">
                <button >Pending</button>
                {/* <a className="hi nav-link" to={Link} href="/previous" ><p className="qb"><span style={{ color: "black" }}>Pending Orders</span></p></a> */}
                            {/* </li> * */}

                            <li className="nav-item">
                                <Link to="/rejectscreen"><button>Rejected</button></Link>
                                {/* <a className="hi nav-link" to={Link} href="/previous" ><p className="qb"><span style={{ color: "black" }}>Rejected Orders</span></p></a> */}
                            </li>
                        </ul>
                    </div>

                </nav>
            </nav>
            <div className='row'>
                <div className='col-2 sidenav hidden-xs'>
                    <div className='size'>
                        {/* <ul className="nav nav-pills nav-stacked"> */}
                        <div className="nav-upper-option">
                            {/* <div className="d-flex flex-column justify-content start"> */}

                            <div class="nav-option option1">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                                    class="nav-img"
                                    alt="dashboard" />
                                <h3><Link to="/agentdash"><span style={{ color: '#FFFFFF', textDecoration: 'none' }}>Dashboard</span></Link></h3>
                                {/* <h3>Dashboard</h3> */}
                            </div>
                            <div className='gap'></div>
                            <div class="nav-option option2">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                                    class="nav-img"
                                    alt="articles" />
                                <Link to='/previous'><button className='btn btn-outline-secondary'>Previous</button></Link>
                            </div>
                            <div className='gap'></div>

                            <div class="nav-option option3">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                                    class="nav-img"
                                    alt="report" />
                                {/* <h3> Report</h3> */}
                                <button  className='btn btn-outline-secondary'>Report</button>
                            </div>

                            <div className='gap'></div>

                            <div class="nav-option option4">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                                    class="nav-img"
                                    alt="institution" />
                                {/* <button onClick={polhandle}></button> */}
                                <button className='btn btn-outline-secondary'>Policy</button>
                                {/* <h3> Policies</h3> */}
                            </div>
                            <div className='gap'></div>

                            <div class="nav-option logout">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                                    class="nav-img"
                                    alt="logout" />
                                {/* <h3>Logout</h3> */}
                                <button className='btn btn-outline-secondary'>Logout</button>
                            </div>
                            {/* </div> */}
                        </div>
                        {/* </ul> */}
                    </div>
                </div>


















































































                {/* <nav class="fixed-nav-bar">
                <nav class="navbar navbar-expand-lg navbar-dark ">
                    <a class="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                        </ul>
                    </div>
                </nav>
            </nav>

            <div className="bgj">

                {/* <div className="gap"> */}
                {/* <div className="row"> */}
                <div className="col-10">
                <div className='tab'>
                    {/* <h1>welcome to Accept screen</h1> */}
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Order ID</th>
                                <th scope='col'>Order Type</th>
                                <th scope='col'>Source destination</th>
                                <th scope='col'>Destination</th>
                                <th scope='col'>Quantity</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {acce && acce.map((i, k) => {
                                return (
                                    <tr key={k}>
                                        <td>{i.order_id}</td>
                                        <td>{i.order_type}</td>
                                        <td>{i.source_address}</td>
                                        <td>{i.destination_address}</td>
                                        <td>{i.qty}</td>
                                        <td><button className='btn btn-primary'>View</button></td>
                                        {/* <td><Link to='/confirmscreen'><button>View</button></Link></td> */}
                                    </tr>
                                )
                            })}



                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}
            {/* </div>  */}



        </>
    )
}
export default Acceptscreen;