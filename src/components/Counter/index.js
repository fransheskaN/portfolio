import React from "react";
import Dropdown from "../Dropdown";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="details">
        <span>2013</span>
        <h1>CABERNET SAUVIGNON</h1>
        <p>
          California- "Vivid aromas of blackberries, fresh plum and chocolate
          follow through to rich flavors of black cherries, fresh berry pie and
          notes of black tea. The wine is well structured with a juicy mouthfeel
          and a full, lingering finish."
        </p>
        <span className="price">$30.00</span>
        <hr></hr>
        <p>Size</p>
        <Dropdown></Dropdown>
        <p>Quantity</p>
        <div className="box">
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter - 1 });
            }}
            disabled={this.state.counter === 0}
          >
            -
          </button>
          <p>{this.state.counter}</p>
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter + 1 });
            }}
          >
            +
          </button>
        </div>
        <button className="cart">Add To Cart</button>
      </div>
    );
  }
}
export default Counter;
