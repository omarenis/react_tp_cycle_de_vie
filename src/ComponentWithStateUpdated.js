import React, {Component} from 'react';


export default class ComponentWithStateUpdated extends Component
{
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }
  componentDidMount() {
    console.log('this is the messag aprés le mount ', this.state.message);
  }

  componentWillMount() {
    console.log("le message avant le mount ", this.state.message);
  }

  changeValueOfInput(event)
  {
    this.setState( {message: event.currentTarget.value});
  }

  render() {
    return(
      <form style={{display: 'flex', justifyContent: 'space-evenly'}} onSubmit={(event) => {
        event.preventDefault();
        console.log(this.state.message);
      }}>
        <label htmlFor={'message'}>type the input</label>
        <input id={'message'} onChange={(event) => this.changeValueOfInput(event)}/>
        <p>{this.state.message}</p>
      </form>
    )
  }
}
