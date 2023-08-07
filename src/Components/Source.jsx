import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Map1 from "./Map1";
import Navbar from './Navbar';

const Source = ({ onNextClick, deliveryData, props }) => {
    const [isPrimary, setIsPrimary] = useState(true);
    const [dataa, setDataa] = useState([]);
    const [Address,setAddress]=useState("")
    const [sourceLocation,setSourceLocation]=useState([])
    const [details, setDetails] = useState({
        Name: "",
        // Address: "",
        Phone_number: "",
    });
    useEffect(() => {
        axios
            .get("http://localhost:3000/posts")
            .then((response) => {
                setDataa(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(deliveryData, "dfdf");
        if (deliveryData && !deliveryData.Source.isPrimary) {
            setDetails({
                ...details,
                Name: deliveryData.Source.Name,
                // Address: deliveryData.Source.Address,
                Phone_number: deliveryData.Source.Phone_number
            });
        }
    }, []);
    const changeHandle = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    };
    const [primaryAddress, setPrimaryAddress] = useState({
        name2: "Sandhya",
        address2: "Hyderabad",
        phone2: "9087898078"
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(deliveryData);
        console.log("address123",+Address)
    };
    const [secondaryAddress, setSecondaryAddress] = useState({
        name1: "",
        address1: "",
        phoneno1: ""
    });

    const handleChange = (e) => {
        if (isPrimary) {
            setPrimaryAddress({ ...primaryAddress, [e.target.Name]: e.target.value });
        } else {
            if (e.target.Name === "Address") {
                setPrimaryAddress({ ...primaryAddress, Address: e.target.value });
            }
            setSecondaryAddress({ ...secondaryAddress, [e.target.name1]: e.target.value });
        }
    };
    const handleAddressTypeChange = (e) => {
        setIsPrimary(e.target.value === "primary");
    };
    const handleCancel = (e) => {
        e.preventDefault();
        window.location.reload();
    };
    const addressHandler=(data1)=>{
        setAddress(data1)
    }
    const lathandle=(p)=>{
        setSourceLocation(p)
    }
    return (
        <>
        <Navbar/>
            <div className="container-fluid" id="grad1">
                <div className="row justify-content-center mt-0">
                    <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                            <h1>Source Information</h1>
                            <div className="row">
                                <div className="col-md-12 mx-0">
                                    <form id="msform" onSubmit={handleSubmit}>
                                        <div>
                                            <ul id="progressbar">
                                                <li class="active" id="source"><strong>Source</strong></li>
                                                <li id="destination"><strong>Destination</strong></li>
                                                <li id="submit"><strong>Submit</strong></li>
                                                <li id="confirm"><strong>Confirm</strong></li>
                                            </ul>
                                        </div>
                                        <fieldset>
                                            <div
                                                className="form-card"
                                                style={{ direction: "flex", flexDirection: "row" }}>
                                                <div className="col  mx-5">
                                                    <label style={{ color: "black", position: "relative", padding: "20px" }}>Primary
                                                        <input type="radio" name="addressType" value="primary" checked={isPrimary} onChange={handleAddressTypeChange} />
                                                    </label>
                                                    <label style={{ color: "black", padding: "20px" }} className="label">Secondary
                                                        <input type="radio" name="addressType" className="mr" value="secondary" checked={!isPrimary} onChange={handleAddressTypeChange} />
                                                    </label>
                                                </div>
                                                {isPrimary ? (
                                                    <div className="row">
                                                        {dataa.map((value, i) => {

                                                            return (
                                                                <>
                                                                    <div className="col-md-4">
                                                                        <div className="form-outline">
                                                                            <label style={{ color: "black" }}><b>Name:</b>
                                                                                <input type="text" name="Name" value={value.Name} placeholder="Name" onChange={handleChange} />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 md-4">
                                                                        <div className="form-outline">
                                                                            <label style={{ color: "black" }}><b>Address:</b>
                                                                                <input type="text" name="Address" value={value.Address} placeholder="Address" onChange={handleChange} />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <label style={{ color: "black" }}><b>Phone:</b>
                                                                        <input type="tel" name="Phone_number" value={value.Phone_number} placeholder="PhoneNo" onChange={handleChange} />
                                                                    </label>
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                ) : (
                                                    <div className="row">
                                                        <div className="col">
                                                            <label style={{ color: "black" }}><b>Name:</b>
                                                                <input type="text" name="Name" value={details.Name} onChange={changeHandle} required minLength={3} />{" "}
                                                                
                                                            </label>
                                                        </div>
                                                        <label style={{ color: "black" }}><b>Phone:</b>
                                                            <input type="text" name="Phone_number" value={details.Phone_number} onChange={changeHandle} required />
                                                            
                                                        </label>
                                                        <div className="col">
                                                            <label style={{ color: "black" }}><b>Address:</b>
                                                            <Map1 maper={addressHandler} maper1={lathandle}/>
                                                                {/* <input type="text" name="Address" value={details.Address} onChange={changeHandle} required minLength={5} /> */}
                                                                
                                                            </label>
                                                        </div>
                                                        
                                                    </div>
                                                )}
                                            </div>
                                            <div></div>
                                            <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                                            <button type="submit"
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    if (isPrimary) {
                                                        onNextClick({ isPrimary: true, ...dataa[0] });
                                                    } else if (details.Name && details.Name.length >= 3 && Address && Address.length >= 5 && details.Phone_number && details.Phone_number.length === 10 && !isNaN(details.Phone_number)) {
                                                        onNextClick({ isPrimary: false, ...details ,Address,sourceLocation});
                                                    }
                                                }}>
                                                Next
                                            </button>                                
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Source;
