import React from 'react';

class HelloPureComponent extends React.PureComponent {

    render() {
        const iam = this.props.iam;
        const myNumber = this.props.mynumber;

        return <p>- Hello ReactJS using {iam} with mynumber*2={myNumber*2} </p>; 
    }
  }
  
  export default HelloPureComponent;