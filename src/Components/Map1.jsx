import React, { useState, useEffect } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

const Map1 = ({ maper ,maper1}) => {
  const [address, setAddress] = useState("");
  const [latlng, setlatlng] = useState([]);

  const handleChange = (address) => {
    setAddress(address);
  };

  useEffect(() => {
    if (latlng.length > 0) {
      console.log(`Source lat ${latlng[0]}, lng ${latlng[1]}`);
      maper(address);
      maper1(latlng)
    }
  }, [latlng]);

  const google = window.google;
  const hydBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(17.385044, 78.486671),
    new google.maps.LatLng(17, 78)
  );
  const searchOptions = {
    componentRestrictions: { country: ["in"] },
    bounds: hydBounds,
    radius: 2000
  };
 
  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setAddress(address); // set the selected address
        setlatlng([lat,lng]);
      })
      .catch(error => console.error('Error', error));
  };

  return (
    <div className="canvas" height="">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        searchOptions={searchOptions}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div >
            <fieldset>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input"
                })}
              />
            </fieldset>

            <div
              className="autocomplete-dropdown-container"
              style={{ height: "40px", width: "350px" }}
            >
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    className="input-suggestion"
                    {...getSuggestionItemProps(suggestion, {
                      style
                    })}
                  >
                    {suggestion.description.includes("Hyderabad") && (
                      <>
                        <i className="material-icons">location_on</i>{" "}
                        <span>{suggestion.description}</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default Map1;


// import React, { useState, useEffect } from "react";
// import PlacesAutocomplete from "react-places-autocomplete";
// import {
//   geocodeByAddress,
//   geocodeByPlaceId,
//   getLatLng,
// } from 'react-places-autocomplete';

// const Map1 = (props) => {
//   const [address, setAddress] = useState("");
//   const [latlang, setLatLang] = useState([]);
  
//   const handleChange = (address) => {
//     setAddress(address);
//     console.log({ address });
//   };

//   const google = window.google;
//   const hydBounds = new google.maps.LatLngBounds(
//     new google.maps.LatLng(17.385044, 78.486671),
//     new google.maps.LatLng(17, 78)
//   );

//   const searchOptions = {
//     componentRestrictions: { country: ["in"] },
//     bounds: hydBounds,
//     radius: 2000
//   };

//   useEffect(() => {
//     if (latlang.length > 0) {
//       console.log(latlang);
//     }
//   }, [latlang]);

  
//   const handleSelect = (address) => {
//     geocodeByAddress(address)
//       .then(results => {
//         setAddress(address); // set the address state to the selected address
//         return getLatLng(results[0]);
//       })
//       .then(({ lat, lng }) => setLatLang([lat, lng])) // set the latlang state to the latitude and longitude of the selected address
//       .catch(error => console.error('Error', error));
//   };
//   props.maper(address);

//   return (
//     <div className="canvas" height="">
//       <PlacesAutocomplete
//         value={address}
//         onChange={handleChange}
//         onSelect={handleSelect}
//         searchOptions={searchOptions}>
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div >
//             <fieldset>
//               <input
//                 {...getInputProps({
//                   placeholder: "Search Places ...",
//                   className: "location-search-input"
//                 })}
//               />
//             </fieldset>
//             <div className="autocomplete-dropdown-container" style={{ height: "40px", width: "350px" }}>
//               {loading && <div>Loading...</div>}
//               {suggestions.map((suggestion) => {
//                 const className = suggestion.active
//                   ? "suggestion-item--active"
//                   : "suggestion-item";
//                 const style = suggestion.active
//                   ? { backgroundColor: "#fafafa", cursor: "pointer" }
//                   : { backgroundColor: "#ffffff", cursor: "pointer" };
//                 return (
//                   <div
//                     className="input-suggestion"
//                     {...getSuggestionItemProps(suggestion, {
//                       style
//                     })}
//                   >
//                     {suggestion.description.includes("Hyderabad") && (
//                       <>
//                         <i className="material-icons">location_on</i>{" "}
//                         <span>{suggestion.description}</span>
//                       </>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     </div>
//   );
// };

// export default Map1;




// // import React, { useState } from "react";
// // import PlacesAutocomplete from "react-places-autocomplete";
// // import {

// //   geocodeByAddress,

// //   geocodeByPlaceId,

// //   getLatLng,

// // } from 'react-places-autocomplete';

// // const Map1 = (props) => {
// //   const [address, setAddress] = useState("");
// //   const handleChange = (address) => {
// //     setAddress(address);
// //     console.log({ address });
// //   };
// //   const google = window.google;

// //   const hydBounds = new google.maps.LatLngBounds(
// //     new google.maps.LatLng(17.385044, 78.486671),

// //     new google.maps.LatLng(17, 78)
// //   );
// //   const searchOptions = {
// //     componentRestrictions: { country: ["in"] },

// //     bounds: hydBounds,

// //     radius: 2000
// //   };
// //   geocodeByAddress(address)

// //     .then(results => getLatLng(results[0]))

// //     .then(({ lat, lng }) =>

// //       console.log('Source latitude and longitude', { lat, lng })

// //     );
// //   props.maper(address);
// //   // props.maper1(address)
// //   return (
// //     <div className="canvas" height="">
// //       <PlacesAutocomplete
// //         value={address}
// //         onChange={handleChange}
// //         onSelect={handleChange}
// //         searchOptions={searchOptions}
// //       >
// //         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
// //           <div >
// //             <fieldset>
// //             <input
// //               {...getInputProps({
// //                 placeholder: "Search Places ...",
// //                 className: "location-search-input"
// //               })}
// //               // style={{
// //               //   width: "180px",
// //               //   height: "40px",
// //               //   borderRadius: "10px",
// //               //   Autocomplete: "on"
// //               // }}
// //             />
// //             </fieldset>
// //             {/* <div>
// //             <input>
// //             </input>
// //             </div> */}

// //             <div
// //               className="autocomplete-dropdown-container"
// //               style={{ height: "40px", width: "350px" }}
// //             >
// //               {loading && <div>Loading...</div>}
// //               {suggestions.map((suggestion) => {
// //                 const className = suggestion.active
// //                   ? "suggestion-item--active"
// //                   : "suggestion-item";
// //                 // inline style for demonstration purpose
// //                 const style = suggestion.active
// //                   ? { backgroundColor: "#fafafa", cursor: "pointer" }
// //                   : { backgroundColor: "#ffffff", cursor: "pointer" };
// //                 return (
// //                   <div
// //                     className="input-suggestion"
// //                     {...getSuggestionItemProps(suggestion, {
// //                       style
// //                     })}
// //                   >
// //                     {suggestion.description.includes("Hyderabad") && (
// //                       <>
// //                         <i className="material-icons">location_on</i>{" "}

// //                         <span>{suggestion.description}</span>
// //                       </>
// //                     )}
// //                     {/* <i class="material-icons">location_on</i>{" "}
// //                     <span>{suggestion.description}</span> */}
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         )}
// //       </PlacesAutocomplete>
// //     </div>
// //   );
// // };

// // export default Map1;































