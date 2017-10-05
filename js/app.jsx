import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
        Route,
        Link,
        IndexLink,
        IndexRoute,
        hashHistory
        } from 'react-router';

import {Main} from './header.jsx';
import {Stoper} from './stoper.jsx';
import {Minutnik} from './minutnik.jsx';
import {Budzik} from './budzik.jsx';

class App extends React.Component {
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Main} />
                <Route path='/stoper' component={Stoper}/>
                <Route path='/minutnik' component={Minutnik} />
                <Route path='/budzik' component={Budzik} />
            </Router>
        )


    }
}
//
ReactDOM.render(<App />, document.getElementById('appReact'));
