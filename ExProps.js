import React from 'react';
class ExProps extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return ( <div><b>Name:</b><em>{this.props.name}</em></div>);
    }
}
export default ExProps;