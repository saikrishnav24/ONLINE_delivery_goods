import {Link} from "react-router-dom";
const Confirm=()=>{
    return(
        <>
        <div className="container-fluid" id="grad1">
            <div className="row justify-content-center mt-0">
                <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h2>Confirm!</h2>
                        <div className="row">
                            <div className="col-md-12 mx-0">
                                <form id="msform">
                                <ul id="progressbar">
                                        <Link to="/source"><li className="active" id="source"><strong>Source</strong></li></Link>
                                        <Link to="/destination"><li className="active" id="destination"  ><strong>Destination</strong></li></Link>
                                        <Link to="/submit"><li className="active" id="submit" ><strong>Submit</strong></li></Link>
                                        <Link to="/confirm"><li className="active" id="confirm" ><strong>Confirm</strong></li></Link>
                                    </ul>
                                    <fieldset>
                                    <div className="form-card">
                                                <h2 className="fs-title text-center">Success</h2>
                                                <br></br>
                                                <div className="row justify-content-center">
                                                    <div className="col-3">
                                                        <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image" />
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="row justify-content-center">
                                                    <div className="col-7 text-center">
                                                        <h5>Successful</h5>
                                                    </div>
                                                </div>
                                            </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Confirm;