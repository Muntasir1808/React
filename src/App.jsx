// importing images are necessary for deployment, if not then image won't load
// import { useState, Fragment } from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
// import componentsImg from "./assets/components.png";
// import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";
// import CoreConcept from "./components/CoreConcept.jsx";
// import TabButton from "./components/TabButton.jsx";
// import { EXAMPLES } from "./data.js";

function App() {
  
  return (
    // <></> is an alternative to fragment in react. Fragment is used to remove redundant div from the html
    <>
      <Header></Header>
      <main>
       <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
