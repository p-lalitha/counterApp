import React, { Component } from 'react';

class Counter extends Component {
  state={
    count:0
  };

  handleAdd = () => {
    this.setState({count: this.state.count+1})
  }

  handleReset = () => {
    this.setState({count: 0})
  }

  handleSub = () => {
    this.setState({count: this.state.count-1})
  }

  styles = {
    marginRight:7
  };

  pStyle = {
    display:"inline",
    marginRight: 5
  };

  divMargin = {
    marginTop: "15%",
    marginLeft: "30%",
    marginRight: "30%"
  };

  headingStyle = {
    textAlign: "center",
    backgroundColor:"#17a2b8",
    padding: 5,
    color:"#fff"
  };

  render(){
    return(
      <React.Fragment>
        <div style = {this.headingStyle}>
          <h1>Counter App Using React JS </h1>
        </div>
        <div style = {this.divMargin}>
          <h1>
            <p style = {this.pStyle}>counter:</p>
            <span className="badge badge-secondary">{this.state.count}</span>
          </h1>
          <button style = {this.styles}
            onClick={this.handleAdd}
            className="btn btn-success"
          >
            Add
          </button>
          <button style = {this.styles}
            onClick={this.handleReset}
            className="btn btn-primary"
          >
            Reset
          </button>
          <button style = {this.styles}
            onClick={this.handleSub}
            className="btn btn-danger"
          >
            Substract
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
