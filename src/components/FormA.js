// import { useState } from "react";

// function FormA({ onSubmit, age }) {
//     const handleSubmit = (event) => {
//     };
//     return (
//         <form id="dc" onSubmit={handleSubmit}>
//             <h2>Form A</h2>
//             <label>
//                 Select DC Shows:
//                 <select  >
//                     <option value="">--Select--</option>
//                     <option value="The Flash">The Flash</option>
//                     <option value="Arrow">Arrow</option>
//                     <option value="Supergirl">Supergirl</option>
//                     <option value="Legends of Tomorrow">Legends of Tomorrow</option>
//                 </select>
//             </label>
//             <br />
//             <label>
//                 Enter your age:
//                 <input type="number" value={age} disabled />
//             </label>
//             <br />
//             <button id="submit-dc" type="submit">Submit</button>

//         </form>
//     );
// }
// export default FormA;

import React, { useState } from "react";

function FormA({ onSubmit, age }) {
  const [selectedShow, setSelectedShow] = useState("");

  const handleShowChange = (event) => {
    setSelectedShow(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedShow);
  };

  return (
    <form id="dc" onSubmit={handleSubmit}>
      <h2>Form A</h2>
      <label>
        Select DC Shows:
        <select value={selectedShow} onChange={handleShowChange}>
          <option value="">--Select--</option>
          <option value="The Flash">The Flash</option>
          <option value="Arrow">Arrow</option>
          <option value="Supergirl">Supergirl</option>
          <option value="Legends of Tomorrow">Legends of Tomorrow</option>
        </select>
      </label>
      <br />
      <label>
        Enter your age:
        <input type="number" value={age} disabled />
      </label>
      <br />
      <button id="submit-dc" type="submit" disabled={!selectedShow}>
        Submit
      </button>
    </form>
  );
}

export default FormA;
