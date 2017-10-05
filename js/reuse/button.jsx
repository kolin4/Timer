import React from 'react';
import { Router,
        Route,
        Link,
        IndexLink,
        IndexRoute,
        hashHistory
        } from 'react-router';


class Btn extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <button disabled={this.props.disabled} onClick={this.props.action} className='btn'>{this.props.name}</button>
        )
    }

}

export {Btn};
