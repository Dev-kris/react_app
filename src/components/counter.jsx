import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };
  /*
  styles = {
    fontSize: 40,
    fontWeight: 'bold',
  };
*/

  /*

constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
*/

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };
  render() {
    return (
      <div>
        <h4>Title {this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-warning btn-sm"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2';
    classes += this.state.value === 0 ? ' bg-warning' : ' bg-primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;

    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
