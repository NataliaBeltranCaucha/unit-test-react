import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ClickCount:0,
      disabled : true
    };
    this.ClickMe = this.ClickMe.bind(this);
  }

  ClickMe(){
    this.setState({
      ClickCount:this.state.ClickCount + 1
    });
  }

  render() {
    return (
        <div>
          <button id="ClickMe" className="click-me" onClick={this.ClickMe}>Click Me</button>
          <p> Veces que damos click {this.state.ClickCount}</p>
          <button id="disabled" className="click-me" disabled={this.state.disabled}>Disabled</button>
        </div>
    )
  }
}

export default App;
