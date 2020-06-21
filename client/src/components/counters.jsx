import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends Component {
  render() {
    const { onDecrement, onDelete, onIncrement, counter, onReset } = this.props;
    return (
      <div>
        <button onReset={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          //pass a reference to the child component which is our counter component
          //pass another prop
          <Counter
            key={counter.id}
            onDecrement={onDecrement}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
