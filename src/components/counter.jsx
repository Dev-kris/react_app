import React, { Component } from 'react';

class Counter extends Component {
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

  render() {
    return (
      <div>
        <h4>Title {this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-warning btn-sm m-1"
        >
          -
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-1"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2';
    classes += this.props.counter.value === 0 ? ' bg-info' : ' bg-primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;

    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
