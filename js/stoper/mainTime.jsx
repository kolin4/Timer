import React from 'react';

class MainTime extends React.Component{
    render(){
        let {a,b,c,d} = this.props;

        return (
            <div className='main'>
                <h1>{this.props.a}{this.props.b}:{this.props.c}{this.props.d}</h1>
            </div>
        )
    }
}


export {MainTime};
