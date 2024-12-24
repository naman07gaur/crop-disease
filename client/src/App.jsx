// import React from "react";
// import DiseaseDetectionForm from "./components/DiseaseDetectionForm";
// const App = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-white bg-blue-500 p-4">
//         Crop Idenfication & Disease Detection
//       </h1>
//       <DiseaseDetectionForm />
//     </div>
//   );
// };

// export default App;

import React from "react";
import DiseaseDetectionForm from "./components/DiseaseDetectionForm";
const App = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 flex items-center">
        {/* <img
          src="https://source.unsplash.com/50x50/?logo,plant"
          alt="Logo"
          className="rounded-full mr-4"
        /> */}
        <h1 className="text-3xl font-bold text-white">
        AgroScan
        </h1>
      </header>
      <DiseaseDetectionForm />
    </div>
  );
};

export default App;
