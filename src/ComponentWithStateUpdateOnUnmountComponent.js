import React, {Component} from 'react';


export default class ComponentWithStateUpdateOnUnmountComponent extends Component
{
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  componentWillUnmount() {
    console.log('this component will be unmounted');
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('the component is updating himself');
  }

  changeValueOfInput(event)
  {
    this.setState( {message: event.currentTarget.value});
  }

  render() {
    console.log('render this component');
    return(
      <form style={{display: 'flex', justifyContent: 'space-evenly'}} onSubmit={(event) => {
        event.preventDefault();
        console.log(this.state.message);
      }}>
        <label htmlFor={'message'}>type the input with will unmount function</label>
        <input id={'message'} onChange={(event) => this.changeValueOfInput(event)}/>
        <p>{this.state.message}</p>
      </form>
    )
  }
}
