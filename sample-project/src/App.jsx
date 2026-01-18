import React from "react";
import FAQs from "./components/FAQs/FAQs";
// import { STATE } from "./STATE";
// import Conditional_Rendering from "./Conditional_Rendering/index";
// import RegisterForm from "./components/Form/RegisterForm";
// import StateLifting from "./State_Lifting/child";

function App(){

  // let data = "Hello, data from parent"
  // const renderData = (childData) => {
  //   console.log(childData)
  // }

  return(
    <div>

      <FAQs />
      {/* <StateLifting parentData={data} renderData={renderData} /> */}
      {/* <RegisterForm /> */}
      {/* <STATE /> */}
      {/* <Conditional_Rendering /> */}
    </div>
  )
}

export default App;