import React, { useState, useEffect } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import logo from "./sk.png";
// import uuu from "./adashlogo.png";
const Agentdash = (props) => {
  const direct = useNavigate()

  const [value, setValue] = useState("")
  const [data, setData] = useState([{
    DeliveryId: 1223311,
    Ordertype: "Groceries",
    CustomerName: "umang",
    SourceAddress: "durgam cheruvu",
    DestinationAddress: "begumpet",
    Quantity: 1,
    isSelectedAcc: false,
    isSelectedRej: true
  },
  {
    DeliveryId: 1223312,
    Ordertype: "Files",
    CustomerName: "arun",
    SourceAddress: "jbs",
    DestinationAddress: "Durgam cheruvu",
    Quantity: 3,
    isSelectedAcc: false,
    isSelectedRej: true
  },
  {
    DeliveryId: 1223313,
    Ordertype: "Clothes",
    CustomerName: "sdssdssd",
    SourceAddress: "jubliee hills",
    DestinationAddress: "raidurg",
    Quantity: 2,
    isSelectedAcc: false,
    isSelectedRej: true

  },
  {
    DeliveryId: 1223314,
    Ordertype: "Sweets",
    CustomerName: "c",
    SourceAddress: "shamshabad",
    DestinationAddress: "uppal",
    Quantity: 4,
    isSelectedAcc: false,
    isSelectedRej: true

  },
  {
    DeliveryId: 1223315,
    Ordertype: "Chocolates",
    CustomerName: "sdssdssd",
    SourceAddress: "tarnaka",
    DestinationAddress: "hitech city",
    Quantity: 2,
    isSelectedAcc: false,
    isSelectedRej: true

  },
  {
    DeliveryId: 1223315,
    Ordertype: "Chocolates",
    CustomerName: "d",
    SourceAddress: "Radidurg",
    DestinationAddress: "Durgam cheruvu",
    Quantity: 2,
    isSelectedAcc: false,
    isSelectedRej: true

  }])
  // const serach = data.filter((e) => e.CustomerName.toLowerCase().includes(value.toLowerCase()))
  // setData(serach)
  //console.log(serach)
  const [dat, setDat] = useState([]);
  //  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [display, setDisplay] = useState(false);
  const [data1, setData1] = useState([]);
  const [report, setReport] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [log,setLog]=useState(false)
  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    // setShow(true);
  };

  const toastSuccess = (i) => {
    let a = [...data1]
    let b = a[i].order_id
    props.dis(b)
    localStorage.setItem("ORDERID", b)
    // setYesDisabled(true)
    // setNoDisabled(false)
    // let obj = [...data]
    // setData([...data1, data[i].isSelectedAcc = true])
    // console.log(data[i].isSelectedAcc)
    // props.display(data[i])
    // console.log("laddu" + data[i])
    toast.success('Wooh! Delivery Accepted.');
    // setTimeout(function() { window.location.replace('/confirmscreen'); }, 2000)


    // # when clicked Accept button post call here...
    axios.post(`http://ec2-3-111-51-229.ap-south-1.compute.amazonaws.com:8001/orderapproved`, {
      "order_id": b,
      "order_status": "accepted"
    },
      { headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` } }

    )
      .then((res) => {
        //  setData1(res.data.data.message)
        console.log(res)
        direct('/confirmscreen')


      })
      .catch(() => {
        alert("errror")
      })
  }
  const toastError = (i) => {
    let a = [...data1]
    let b = a[i].order_id
    props.dis(b)
  // /  setData([...data, data[i].isSelectedAcc = true])
    // console.log(data[i].isSelectedAcc)

    // setNoDisabled(true)
    // setYesDisabled(false)

    axios.post(`http://ec2-3-111-51-229.ap-south-1.compute.amazonaws.com:8001/orderapproved`,{
      "order_id":b,
      "order_status":"rejected"
    },
    {headers:{Authorization: `Bearer ${localStorage.getItem("Token")}`}}
    )
    .then((res)=> {
      console.log(res)
    toast.error('Oops! Delivery Rejected.');
    setTimeout(function() { window.location.replace('/agentdash'); }, 2000)
    window.location.reload(false);
    })
    .catch(()=> {
      alert("error")
    })
  }
  
  // #first data retrive here in agent dashboard from users and displays list of orders.

  useEffect(() => {
    //call API
    axios.get('http://ec2-3-111-51-229.ap-south-1.compute.amazonaws.com:8001/successorder',
      { headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` } }
    )
      .then(response => {
        setData1(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  // #when clicked accepted orders api get call here
  const reporthandle = () => {
    setReport(true)
  }

  const policyhandle = () => {
    setPolicy(true)
  }

  const loghandle=()=> {
    setLog(true)
  }
  
  // const Acchandle = () => {
  //   setDisplay(true)



    // const closehandle=()=> {
    //   setReport(false)
    // }
    //     const Acchandle=()=> {

    // }
  

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




      <div className='bgj'>
        <div className="blur">
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
                    <button onClick={reporthandle} className='btn btn-outline-secondary'>Report</button>
                  </div>

                  <div className='gap'></div>

                  <div class="nav-option option4">
                    <img src=
                      "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                      class="nav-img"
                      alt="institution" />
                    {/* <button onClick={polhandle}></button> */}
                    <button onClick={policyhandle} className='btn btn-outline-secondary'>Policy</button>
                    {/* <h3> Policies</h3> */}
                  </div>
                  <div className='gap'></div>

                  <div class="nav-option logout">
                    <img src=
                      "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                      class="nav-img"
                      alt="logout" />
                    {/* <h3>Logout</h3> */}
                    <button onClick={loghandle} className='btn btn-outline-secondary'>Logout</button>
                  </div>
                  {/* </div> */}
                </div>
                {/* </ul> */}
              </div>
            </div>
            <div className='col-10'>
              <div className=''>
                <div className="tab">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Delivery Id</th>
                        <th scope="col">Order-type</th>
                        {/* <th scope="col">Customer Name</th> */}
                        <th scope="col">Source Address</th>
                        <th scope="col">Destination Address</th>
                        <th scope="col">Quantity</th>
                        {/* <th scope='col'>Status</th> */}
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {data1.map((v, i) => {
                        {
                          display && (localStorage.getItem("ORDERID" == v.order_id))
                          {
                            return (<tr key={i}>
                              <td className='tbname'>{v.order_id}</td>
                              <td onClick={() => hanldeClick(v)}>{v.order_type[0]}</td>
                              {/* <td onClick={() => hanldeClick(v)}>{v.CustomerName}</td> */}
                              <td onClick={() => hanldeClick(v)}>{v.source_address}</td>
                              <td onClick={() => hanldeClick(v)}>{v.destination_address}</td>
                              {/* <td onClick={()=> hanldeClick(v)}>{v.order_status}</td> */}
                              <td onClick={() => hanldeClick(v)}>{v.qty}</td>
                              <td>
                                <div>
                                  <button type="button" onClick={() => toastSuccess(i)} class="btn btn-success">Accept</button>
                                  <button type="button" onClick={() => toastError(i)} class="btn btn-danger">Reject</button>
                                </div>

                              </td>
                            </tr>)
                          }
                        }
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12">
                  <div className="">

                  </div>
                </div>
              </div>
              <div class="row">
                <div className='col-3'></div>
                <div class="col-sm-2">
                  <div class="well1">
                    <div class="text">
                      <h2 class="topic-heading">{data1.length}</h2>
                      <h2 class="request-name">Wait-list</h2>
                    </div>

                  </div>
                </div>


                <div className='col-3'></div>
              </div>


            </div>

            <ToastContainer style={{ marginTop: "80px" }}
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
          </div>
        </div>
      </div>
      {report && <One />}
      {policy && <Two />}
      {log && <Logout/>}
    </>
  )
}
export default Agentdash;
const One = ({ closehandle }) => {
  return (
    <>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className='agentside'>
            <h1 className='report mb-3'>Report?</h1>
            <p className='repo1 mb-4'> &#8594;  If any occurance happen during ordering of a item can directly report to <span style={{ color: 'blue', textDecoration: 'underline' }}>onlinedeliverygoods@gmail.com</span></p>
            <p className='repo1 mb-4'> &#8594;  Doing suspicious activities in the website can leads to block the user account permanently blocked</p>
            <p className='repo1 mb-4'> &#8594;  During exploring of the website if any bug occurs can report to the respective mail will be rewarded.</p>
            <p className='repo1 mb-4'> &#8594;  This website is user-friendly if any third party application causes we will avoid the use of login</p>
            <p className='repo1 mb-5'> &#8594;  Can report whatever you feels of website, we are happy to find a solution.</p>
            <div className='center mb-3'>
              <button className='btn btn-danger' onClick={closehandle}>Close</button>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  )
}
const Two = () => {
  return (
    <>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className='agentside'>
            <h1 className='report'>Policies</h1>
            <div className="row">
              <div className="col-6 mb-3">
                <center>
                  <h4 className='mb-4'>Do's</h4>
                </center>
                <p className='repo1 m-3'>&#8594; Agent should aware of orders.</p>
                <p className='repo1 m-3'>&#8594; Agent should delivery with in the time</p>
                <p className='repo1 m-3'>&#8594; Agent should aware of orders.</p>
                <p className='repo1 m-3'>&#8594; Behave properly with customers</p>
                <p className='repo1 m-3'>&#8594; Must be sanitized and dressed properly</p>

              </div>
              <div className="col-6">
                <center>
                  <h4 className='center mb-4'>Dont's</h4>
                </center>
                <p className='repo1 m-3'>&#8594; Agent should not speak non-verbal language</p>
                <p className='repo1 m-3'>&#8594; Without informing the receiver and order delivery should be avoided</p>
                <p className='repo1 m-3'>&#8594; Don't be rude with customers while delivering.</p>
                <p className='repo1 m-3'>&#8594; Avoid of doing scams while delivering the orders.</p>
              </div>
            </div>
            <center>
              <button className='btn btn-outline-danger'>Close</button>
            </center>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  )
}
const Logout=()=> {
  return (
    <>
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
      <div className="agentside1">
        <h3 className='report1 mt-3'>Are you sure you want to logout?</h3>
        <center>
        <button className='btn btn-outline-danger m-5'>Logout</button>
        <button className='btn btn-outline-success m-5'>Cancel</button>
        </center>
      </div>
      </div>
      <div className="col-4"></div>
    </div>
    </>
  )
}