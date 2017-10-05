import React from 'react';

class MainMin extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        let {a,b,c,d} = this.props;
        return (
            <div className='main'>
                <h1>{this.props.a}{this.props.b}:{this.props.c}{this.props.d}</h1>
            </div>
        )
    }

}


export {MainMin};
