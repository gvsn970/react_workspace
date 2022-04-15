import React from "react";
class ClassComponet extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h1>
            Hello {this.props.name} {this.props.age}
          </h1>
        </center>
      </div>
    );
  }
}
export default ClassComponet;
