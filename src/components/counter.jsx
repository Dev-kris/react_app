import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
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

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2';
    classes += this.state.count === 0 ? ' bg-warning' : ' bg-primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
