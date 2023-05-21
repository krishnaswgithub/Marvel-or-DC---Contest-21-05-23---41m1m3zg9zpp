// import { useState } from "react";
// function Summary({ formData }) {
//     return (
//         <div id="summary">
//             <h2>Summary</h2>
//             <p>Form Type: </p>
//             <p>Age: </p>

//             <p>DC Shows: </p>

//             <p>Marvel Shows: </p>

//         </div>
//     );
// }
// export default Summary;


import React from "react";

function Summary({ formData }) {
  const { formType, age, dcShow, marvelShow } = formData;

  return (
    <div id="summary">
      <h2>Summary</h2>
      <p>Form Type: {formType}</p>
      <p>Age: {age}</p>
      <p>DC Shows: {dcShow}</p>
      <p>Marvel Shows: {marvelShow}</p>
    </div>
  );
}

export default Summary;
