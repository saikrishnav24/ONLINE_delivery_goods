import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Map1 from "./Map2"

const Destination = ({ onNextClick, onPrevClick, deliveryData, dataa, details }) => {
    const [address, setAddress] = useState("")
    const [destinationLocation, setDestinationLocation] = useState()
    const [dest, setDest] = useState({
        name: "",
        phone: "",
        // Address:""

    });

    useEffect(() => {
        if (deliveryData) {
            setDest({ ...dest, name: deliveryData.Destination.name, address: deliveryData.Destination.address, phone: deliveryData.Destination.phone })
        }
    }, [])
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setDest({ ...dest, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // e.stopPropagation();
        // console.log("deliveryData"+deliveryData)
        // console.log("Destination-Address",+address)
        console.log({ "NAME": dest.name, "PHONENO": dest.phone, "ADDRESS": address, "LATLANG": destinationLocation })
        return false;
    };
    function checkFormValidation() {
        if (dest.name && dest.name.length >= 3 && address && address.length >= 5 && dest.phone && dest.phone.length === 10 && !isNaN(dest.phone)) {
            return true;
        } else {
            window.alert("Please enter the valid details.");
            return false;

        }
    }
    const addressHandle = (z) => {
        setAddress(z)
        //   setDest({ ...dest, address: z });
    }
    const zxc = (k) => {
        setDestinationLocation(k)
    }

    return (
        <div className="container-fluid" id="grad1">
            <div className="row justify-content-center mt-0">
                <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h1>Destination Details</h1>
                        <div className="row">
                            <div className="col-md-12 mx-0">
                                <form id="msform" onSubmit={handleSubmit}>
                                    <ul id="progressbar">
                                        <li class="active" id="source"><strong>Source</strong></li>
                                        <li class="active" id="destination"  ><strong>Destination</strong></li>
                                        <li id="submit" >Submit<strong></strong></li>
                                        <li id="confirm" ><strong>Confirm</strong></li>
                                    </ul>
                                    <fieldset>
                                        <div className="form-card">
                                            <h2 className="fs-title">Destination Details</h2>
                                            <input type="text" name="name" placeholder="Name" value={dest.name} onChange={handleChange} required />
                                            <input type="text" name="phone" placeholder="PhoneNo" value={dest.phone} onChange={handleChange} required pattern="/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/" min="10" />
                                            <Map1 maper1={addressHandle} maper2={zxc} />
                                        </div>
                                        <button name="previous" type="button" className="btn btn-secondary" onClick={() => onPrevClick(dataa)}>Previous</button>
                                        <button name="submit" type="submit" className="btn btn-primary" onClick={() => {
                                            if (checkFormValidation()) {
                                                onNextClick({ ...dest, address, destinationLocation });
                                            }
                                        }}>Next</button>
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
export default Destination;


