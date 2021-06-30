import React from 'react';
import Temp from "./Temp";

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h2 className="h2">It is <strong>{this.state.date.toLocaleTimeString()}</strong>.</h2>
        </div>
      );
    }
  }
  export default Clock;