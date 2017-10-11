import React from 'react';
import { Router,
        Route,
        Link,
        IndexLink,
        IndexRoute,
        hashHistory
        } from 'react-router';

class TopNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            

        }
    }
    componentDidMount() {
        this.myInterval = setInterval(()=>{

            this.setState({
                date: new Date()
            })

        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
    render(){



        return (
            <div className="topNav">
                <Link to='/'><div className="home"><i className="demo-icon icon-home"></i></div></Link>
                <div className="time">{this.state.date.toLocaleTimeString()}</  div>
            </div>
        )
    }
}

export {TopNav};
