import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const Submit = ({ onNextClick, onPrevClick, deliveryData, details,address,lat}) => {
    const { Source, Destination } = deliveryData;
    useEffect((e) => {
        //getDetails()
        console.log(deliveryData)
    }, [])
    // useEffect(() => {
    //     axios.post("http://ec2-13-235-67-132.ap-south-1.compute.amazonaws.com:8001/login/").then(response => {
    //         console.log(response)
    //     })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

    return (
        <div className="container-fluid" id="grad1">
            <div className="row justify-content-center mt-0">
                <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h1>Submit Details</h1>
                        <div className="row">
                            <div className="col-md-12 mx-0">
                                <form id="msform">
                                    <ul id="progressbar">
                                        <li className="active" id="source"><strong>Source</strong></li>
                                        <li id="destination" class="active" ><strong>Destination</strong></li>
                                        <li id="submit" class="active" ><strong>Submit</strong></li>
                                        <li id="confirm" ><strong>Confirm</strong></li>
                                    </ul>
                                    <fieldset>
                                        <div className="form-card">
                                            <h2 className="fs-title">Source Details</h2>

                                            <label style={{ color: 'black' }}><b>Name:</b> {Source.Name}</label><br />
                                            <label style={{ color: 'black' }}><b>Address:</b> {Source.Address}</label><br />
                                            <label style={{ color: 'black' }}><b>Phoneno:</b>{Source.Phone_number}</label><br />
                                        </div>
                                        <div className="form-card">
                                            <h2 className="fs-title">Destination Details</h2>
                                            <label style={{ color: 'black' }} ><b>Name:</b>{Destination.name}</label><br />
                                            <label style={{ color: 'black' }}><b>Address:</b>{Destination.address}</label><br />
                                            <label style={{ color: 'black' }}><b>Phoneno:</b>{Destination.phone}</label><br />
                                            {/* <label style={{ color: 'black' }}><b>Phoneno:</b>{Destination.lat}</label><br /> */}

                                            {/* {console.log({latlng,lat,lng})} */}
                                            <br></br>
                                        </div>
                                        <button name="previous" type="button" className="btn btn-secondary" onClick={() => onPrevClick(details)}>Previous</button>
                                        <button name="next" type="button" className="btn btn-primary" onClick={() => onNextClick(details)}>Submit</button>
                                        
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Submit;
























