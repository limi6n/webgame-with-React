import React, { PureComponet } from "react";

class Test extends PureComponet {
  state = {
    counter: 0,
    string: "hello",
    number: 1,
    boolean: true,
  };

  onClick = () => {
    this.setState({});
  };

  render() {
    console.log("랜더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Test;
