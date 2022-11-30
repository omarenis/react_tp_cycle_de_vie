import React, {Component} from 'react';


export default class NewComponent extends Component
{
  componentDidMount() {
    console.log("this is the did mount function for the first component ")
  }

  componentWillMount() {
    console.log("this is the will mount function for first component")
  }

  render() {
    console.log("I'm the rendering function");
    return(<div style={{textAlign: 'center'}}>hello world</div>)
  }
}
