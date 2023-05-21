// import React, { useEffect, useState } from "react";
// import FormA from "./FormA";
// import FormB from "./FormB";
// import Summary from "./Summary";

// const App = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({});
//   const [age, setAge] = useState("");

//   return (
//     <div>
//       {(step === 1 || !age) && (
//         <div id="start-page">

//           <h1>Step 1: Select Form Type and Enter Age</h1>
//           <label>
//             Enter your age:
//             <input value={age} />
//           </label>
//           <br />
//           <label>
//             Select Form Type:
//             <select onChange={(e) => setStep(parseInt(e.target.value))}>
//               <option value={1}>--Select--</option>
//               <option value={2}>Form A</option>
//               <option value={3}>Form B</option>
//             </select>
//           </label>
//           <br />


//         </div>
//       )}
//       {step === 2 && (
//         <div>
//           <FormA age={age} />
//         </div>
//       )}
//       {step === 3 && (
//         <div>
//           <FormB age={age} />
//         </div>
//       )}
//       {(step === 2 || step === 3) && age ? (
//         <button id="go-back" onClick={() => setStep(1)}>Go Back</button>
//       ) : null}

//       {step === 4 && (
//         <div>
//           <Summary />
//           <button id="start-over">Start Over</button>
//         </div>
//       )}
//     </div>
//   );

import React, { useState } from "react";
import "../styles/App.css";
import FormA from "./FormA";
import FormB from "./FormB";
import Summary from "./Summary";

const App = () => {
  const [formType, setFormType] = useState("");
  const [age, setAge] = useState("");
  const [selectedShow, setSelectedShow] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFormTypeChange = (e) => {
    setFormType(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleShowChange = (e) => {
    setSelectedShow(e.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleGoBack = () => {
    setFormType("");
    setAge("");
    setSelectedShow("");
    setSubmitted(false);
  };

  const handleStartOver = () => {
    setFormType("");
    setAge("");
    setSelectedShow("");
    setSubmitted(false);
  };

  return (
    <div>
      {!submitted ? (
        <div id="start-page">
          <h2>Select Form Type:</h2>
          <select value={formType} onChange={handleFormTypeChange}>
            <option value="">Select an option</option>
            <option value="Form A">Form A</option>
            <option value="Form B">Form B</option>
          </select>
          <br />
          <h2>Enter Age:</h2>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
          />
        </div>
      ) : formType === "Form A" ? (
        <FormA
          age={age}
          selectedShow={selectedShow}
          handleShowChange={handleShowChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <FormB
          age={age}
          selectedShow={selectedShow}
          handleShowChange={handleShowChange}
          handleSubmit={handleSubmit}
        />
      )}
      {!submitted && (
        <button
          id="go-back"
          onClick={handleGoBack}
          style={{ display: submitted ? "none" : "block" }}
        >
          Go Back
        </button>
      )}
      {!submitted && (
        <button
          id="submit-marvel"
          onClick={handleSubmit}
          disabled={!selectedShow}
          style={{ display: submitted ? "none" : "block" }}
        >
          Submit (Marvel)
        </button>
      )}
      {!submitted && (
        <button
          id="submit-dc"
          onClick={handleSubmit}
          disabled={!selectedShow}
          style={{ display: submitted ? "none" : "block" }}
        >
          Submit (DC)
        </button>
      )}
    </div>
  );
};

export default App;

// }

// export default App;
