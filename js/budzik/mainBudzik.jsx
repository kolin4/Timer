import React from 'react';

class MainBudzik extends React.Component{
    render(){
        return(
            <div className='main'>
                <h1>{this.props.a}{this.props.b}:{this.props.c}{this.props.d}</h1>
            </div>


        )

    }
}
export {MainBudzik};
