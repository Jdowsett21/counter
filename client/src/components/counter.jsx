import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.formatColor()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
          disable={this.props.counter.value === 0}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  formatColor() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
}

export default Counter;

//jsx elements must have at least one parent.  they all get compiled to react create element
//two elements side by side, doesnt know how to compile it
//what is the type of react eleemt that should be returned, need to wrap it with a div
//state includes any data this component needs
//jsx expression are just like normal javascript functions
