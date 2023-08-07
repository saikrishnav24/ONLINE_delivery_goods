import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./Popular.scss";
import axios from "axios";
import Navbar from './Navbar';
// var data = require("./MOCK_DATA");

const Popular = (onClick) => {
    const [selectedCity, setSelectedCity] = useState("");

  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search", searchTerm);
  };
    const handleClick=()=>{
    }
    const [data, setData] = useState({});
    useEffect(() => {
      //call API
      axios.get('http://ec2-13-235-67-132.ap-south-1.compute.amazonaws.com:8001/cityList',
      { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}

      )
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    return (
        <>
    <Navbar/>
    <div class="whole">
      <div className="Main">
        <h2>Select Your City</h2>
      </div>

      <div className="void">
        <div>
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="input"
            
          />

          
          

          <a href="#" class="button">
            <button type="button">Search</button>
          </a>
          {/* {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();
              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))} */}
        </div>
      </div>
      <div>
        <h2>Popular Cities</h2>
      </div>
        </div>
        <div className="card-container">
            <div style={{display:"flex"}}>
           
                    <div>
                        <Link to="/primary1">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9YFjAlXIhoTve0TEYdxJZs_ui1qjgA1DDA&usqp=CAU"
                        className="card-img-top"
                        alt="Hyderabad"
                        width="100px"
                        height="100px"  onClick={handleClick}
                    />
                    </Link>
                    
                    
                        <p>Hyderabad</p>
                    </div><br>
                    </br>
                    <div>
                    <img
                        src="data:image/jpeg;base64,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"
                        className="card-img-top"
                        alt="Delhi"
                        width="100px"
                        height="100px" onClick={handleClick}
                    />
                        <p>Delhi-NCR</p>
                    </div>
                    <div >
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8FZSQGH2CJwv7hXhVbl1I_fyFToghoBHKA&usqp=CAU"
                        className="card-img-top"
                        alt="Mumbai"
                        width="100px"
                        height="100px" onClick={handleClick}
                    />
                    <p>Mumbai</p>
                    </div> 
                    <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1g7uFIESsY8ehtIPOnh8B_i95D0opdunsA&usqp=CAU"
                        className="card-img-top"
                        alt="Banglore"
                        width="100px"
                        height="100px"  onClick={handleClick}
                    />         
                        <p>Banglore</p>
                    </div>
                    <div>
                    <img
                        src="data:image/jpeg;base64,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"
                        className="card-img-top"
                        alt="Chandigarh"
                        width="100px"
                        height="100px" onClick={handleClick}
                    />
                        <p>Chandigarh</p>
                    </div><br/>
                   
                    <div>
                    <img
                        src="data:image/png;base64,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"
                        className="card-img-top"
                        alt="Pune"
                        width="100px"
                        height="100px"  onClick={handleClick}
                    />
                        <p>Pune-MR</p>
                    </div>
                    <div>
                    <img
                        src="data:image/png;base64,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"
                        className="card-img-top"
                        alt="Chennai"
                        width="100px"
                        height="100px"  disabled onClick={handleClick}
                    />
                        <p>Chennai</p>
                    </div>
            </div>
        </div>   
        </>
    )
}
export default Popular;
