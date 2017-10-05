import React from 'react';
import { Router,
        Route,
        Link,
        IndexLink,
        IndexRoute,
        hashHistory
        } from 'react-router';

import {TopNav} from "./reuse/topNav.jsx";
import {MainData} from "./header/mainData.jsx";
import {Btn} from './reuse/button.jsx';
import {Author} from './reuse/author.jsx';

class Main extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
        <div>
            <TopNav />
            <h2>TIMER</h2>
            <MainData />
            <div className='buttons'>
                <Link to='/stoper'><Btn name='Stoper'/></Link>
                <Link to='/minutnik'><Btn name='Minutnik' /></Link>
                <Link to='/budzik'><Btn name='Budzik' /></Link>
            </div>
            <div className='footer'>
                <Author />
            </div>
        </div>
        )
    }

}



export {Main};
