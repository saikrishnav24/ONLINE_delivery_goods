import { useState } from "react";
import axios from "axios";
import "./City.scss";

var data = require("./MOCK_DATA.json");
export default function City() {
  const [selectedCity, setSelectedCity] = useState("");

  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search", searchTerm);
  };
  axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
 
  return (
    <>
    <div className="">
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
          {data
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
            ))}
        </div>
      </div>
        </div>
        </div>
    </>
  );
}







