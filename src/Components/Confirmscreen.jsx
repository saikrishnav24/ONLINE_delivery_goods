import React, { useState } from "react";
import logo from "./sk.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Agentdash from "./Agentdash";
const Confirmscreen = (props) => {
  const redirect = useNavigate()
  const [dat, setDat] = useState([])
  const [index1, setIndex1] = useState(props.display1);
  const [sinfo, setSinfo] = useState([]);
  const [dinfo, setDinfo] = useState([]);


  console.log(props.display1)
  const clickhandle = () => {
    // console.log(`https://www.google.com/maps/dir/?api=1&origin=${sinfo[0].location[0]},${sinfo[0].location[1]}&destination=${dinfo[0].location[0]},${dinfo[0].location[1]}`)
    // `https://www.google.com/maps/dir/?api=1&origin=${sinfo.location[0]},${sinfo.location[1]}&destination=${dinfo.location[0]},${dinfo.location[1]}`)
    // let gh = [...dat]
    console.log(`https://www.google.com/maps/dir/?api=1&origin=${sinfo[0].location[0]},${sinfo[0].location[1]}&destination=${dinfo[0].location[0]},${dinfo[0].location[1]}`)

    let y = `https://www.google.com/maps/dir/?api=1&origin=${sinfo[0].location[0]},${sinfo[0].location[1]}&destination=${dinfo[0].location[0]},${dinfo[0].location[1]}`
    window.open(

      y, '_blank'
    );

  }
  const dato = [{
    lat: 17.41796,
    long: 78.38853,
    lat1: 17.44278,
    long1: 78.38741
  }]
  const op = () => {
    let gh = [...dato]
    console.log(`https://www.google.com/maps/dir/?api=1&origin=${sinfo[0].location[0]},${sinfo[0].location[1]}&destination=${dinfo[0].location[0]},${dinfo[0].location[1]}`)

    let y = `https://www.google.com/maps/dir/?api=1&origin=${gh[0].lat},${gh[0].long}&destination=${gh[0].lat1},${gh[0].long1}`
    window.open(
      y, '_blank'
    );
  }
  const handleclick = () => {
    alert('Thankyou for your confirmation')
    redirect("/agentdash")
  }

  // console.log("ppppppppppppppp" + index1)
  // #when clicked accept it will disabel in Agentdash board and redirect to confirm screen and view full details of the Order.
  useEffect(() => {
    axios.get(`http://ec2-3-111-51-229.ap-south-1.compute.amazonaws.com:8001/agent_dash_board_source_destination/${props.dis1}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` } }
    ).then((response) => {
      setSinfo([response.data.message.source_info])
      setDinfo([response.data.message.Destination_info])
      setDat(response)
      console.log(response.data.message)
    })
      .catch(error => {
        console.log(error)
      })
  }, [])

  // useEffect(()=> {
  //   axios.get('http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/user_order_info/',)
  //   .then((res)=>setDat(res))
  // },[])
  console.log(dat)
  console.log('dataaaaaa' + `${props.dis1}`)
  return (
    <>
      <nav className="fixed-nav-bar">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <a className="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </nav>


      <div className='bgj'>
        <div className="">
          <div className="o1">
            <div className="row">
              <div className="col-12">
                <h1 className="overview">Order Over-View</h1>
              </div>
            </div>
          </div>

          <div className="row">
            {/* <div className="col-12"> */}
            <div className="col-2"></div>
            {/* <div className="d-flex flex-row justify-content-end"> */}
            <div className="col-4">
              <div className="cs">
                <h1 className="srcinf">Source Information</h1>
                {sinfo && sinfo.map((i, j) => {
                  return (
                    <>
                      <h5 className="sname">Name : <span style={{ color: '#3D9970' }}>{i.name}</span> </h5>
                      <h5 className="sname">Address : <span style={{ color: '#3D9970' }}>{i.address}</span> </h5>
                      <h5 className="sname">Ph.No: <span style={{ color: '#3D9970' }}>{i.phone}</span></h5>
                    </>
                  )
                })}
              </div>
            </div>
            <div className="col-4">
              <div className="cs">
                <h5 className="srcinf mt-4">Destination Information</h5>
                {dinfo && dinfo.map((i, j) => {
                  return (
                    <>
                      <h5 className="sname">Name : <span style={{ color: '#3D9970' }}>{i.name}</span></h5>
                      <h5 className="sname">Address : <span style={{ color: '#3D9970' }}>{i.address}</span></h5>
                      <h5 className="sname">Ph.No: <span style={{ color: '#3D9970' }}>{i.phone}</span></h5>
                    </>
                  )
                })}
              </div>
            </div>

            <div className="col-2"> </div>
            {/* </div> */}
            {/* </div> */}
          </div>
          <br />
          <br />
          <br />

          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="container-table">

              

              <table className="table">
                <thead>

                  <tr>
                    <th class="text-center">
                    </th>
                    <th>Delivery Id</th>
                    <th>Source Address</th>
                    <th>Destination Address</th>
                    <th>View Google Maps</th>
                  </tr>
                </thead>
                <tbody class="table-body">
                            <tr class="cell-1">
                              <td>{props.dis1}</td>
                              {sinfo && sinfo.map((i, j) => {
                                return (
                                  <td>{i.address}</td>
                                )
                              })}

                              <td>
                                {dinfo && dinfo.map((i, j) => {
                                  return (
                                    <td>{i.address}</td>
                                  )
                                })}
                                <td><button class="btn btn-outline-primary" onClick={clickhandle}>Maps</button></td>
                              </td>
                            </tr>

                          </tbody>
              </table>
              </div>
            </div>
            <div className="col-2"></div>
          </div>














          <div className="row">
            <div className="col-1"></div>
            <div className="col-9">
              <div className="container1">
                <div class="d-flex justify-content-center row">
                  <div class="col-md-12">
                    <div class="rounded">
                      <div class="table-responsive table-borderless">
                        <table class="table">
                          <thead>
                            <tr>
                              <th class="text-center">
                              </th>
                              <th>Delivery Id</th>
                              <th>Source Address</th>
                              <th>Destination Address</th>
                              <th>View Google Maps</th>
                            </tr>
                          </thead>
                          <tbody class="table-body">
                            <tr class="cell-1">
                              <td>{props.dis1}</td>
                              {sinfo && sinfo.map((i, j) => {
                                return (
                                  <td>{i.address}</td>
                                )
                              })}

                              <td>
                                {dinfo && dinfo.map((i, j) => {
                                  return (
                                    <td>{i.address}</td>
                                  )
                                })}
                                <td><button class="btn btn-outline-primary" onClick={clickhandle}>Maps</button></td>
                              </td>
                            </tr>

                          </tbody>
                        </table>
                        <div className="d-flex flex-coloumn justify-content-end">
                          <button className="btn btn-primary" onClick={handleclick}>Delivery</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1"></div>
          </div>

        </div>
      </div>
    </>
  )
}
export default Confirmscreen;