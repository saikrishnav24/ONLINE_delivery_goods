import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Other.scss";

const Next = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="other">
        <h2>Other Cities</h2>
        <a href="/primary1"  className="sow" onClick={(Amaravathi) => {}}>
          Amaravathi
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(ArunachalPradesh) => {}}>
          Arunachal Pradesh
        </a>
        <br />
        <a href="/primary1" className="sow" onClick={(AndhraPradesh) => {}}>
          AndhraPradesh
        </a>
        <br />
        <a href="/primary1" className="sow" onClick={(Assam) => {}}>
          Assam
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Bihar) => {}}>
          Bihar
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Chandigarh) => {}}>
          Chandigarh
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Chattisgarh) => {}}>
          Chattisgarh
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(DadraNgrHaveli) => {}}>
          DadraNgrHaveli
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Delhi) => {}}>
          Delhi
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Goa) => {}}>
          Goa
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Gujarat) => {}}>
          Gujarat
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Gangtok) => {}}>
          Gangtok
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Haryana) => {}}>
          Haryana
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(HimachalPradesh) => {}}>
          HimachalPradesh
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(JammuKashmir) => {}}>
          JammuKashmir
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Jharkhand) => {}}>
          Jharkhand
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Karnataka) => {}}>
          Karnataka
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Kerala) => {}}>
          Kerala
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Ladakh) => {}}>
          Ladakh
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(MadhyaPradesh) => {}}>
          MadhyaPradesh
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Maharasthtra) => {}}>
          Maharastra
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Manipur) => {}}>
          Manipur
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Meghalaya) => {}}>
          Meghalaya
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Mizoram) => {}}>
          Mizoram
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Nagaland) => {}}>
          Nagaland
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Odisha) => {}}>
          Odisha
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Puducherry) => {}}>
          Puducherry
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Punjab) => {}}>
          Punjab
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Rajasthan) => {}}>
          Rajasthan
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Sikkim) => {}}>
          Sikkim
        </a>
        <br />
        <a href="/primary1"   className="sow" onClick={(TamilNadu) => {}}>
          TamilNadu
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(UttarPradesh) => {}}>
          UttarPradesh
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(Uttarkhand) => {}}>
          Uttarkhand
        </a>
        <br />
        <a href="/primary1"  className="sow" onClick={(WestBengal) => {}}>
          WestBengal
        </a>
        <br />
      </div>
      <div>
        <Link to="/primary1">
          <button name="next" className="btn btn-primary">
            Next
          </button>
        </Link>
      </div>
    </>
  );
};
export default Next;
