import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {firstName: ''}
  }
  handleOnChange(event) {
   this.setState({firstName: event.target.value})
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.firstName}!</h1>
        Please enter your name: <input type="text" value={this.state.firstName} 
        onChange={this.handleOnChange.bind(this)} />
      </div>
    );
  }
}
