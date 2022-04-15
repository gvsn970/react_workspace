import ClassComponet from "./ClassComponet";
import React from "react";
import FunctionalAndClassComponet from "./FunctionalAndClassComponet";

class App extends React.Component {
  state = {
    name: "Surya",
    age: 28,
  };
  render() {
    return (
      <div>
        <center>
          <h1>
            <ClassComponet name={this.state.name} age={this.state.age} />
          </h1>
          <h2>
            <FunctionalAndClassComponet />
          </h2>
        </center>
      </div>
    );
  }
}
// const functNme=()=>{

//   return(
//     <div>
//       <center><h1><ClassComponet/></h1></center>
//     </div>
//   );
// }

export default App;
