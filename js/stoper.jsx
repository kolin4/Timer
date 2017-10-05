import React from 'react';
import {TopNav} from './reuse/topNav.jsx';
import {MainTime} from './stoper/mainTime.jsx';

import {Author} from './reuse/author.jsx';
import {Btn} from './reuse/button.jsx';


class Stoper extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            a :0,
            b: 0,
            c: 0,
            d: 0,
            disabled: false
        }
    }

    clickStart = (event) => {
        // dorzycam clearInterval poniewaz przy paru kliknieciach na start interval przyspiesza.
        clearInterval(this.interval);
        this.interval = setInterval( () => {
            let {a,b,c,d,disabled} = this.state;
            d++;

            if ( d == 10 ){
                c++;
                d = 0;
            }
            if ( c == 6)  {
                b++,
                c = 0,
                d= 0
            }
            if ( b == 10){
                a++;
                b = 0;
            }

            if ( a == 10 ){
                a = 9;
                b = 9;
                c = 9;
                d = 9;
                disabled = true;
                clearInterval(this.interval);

            }

            this.setState({
                a,
                b,
                c,
                d,
                disabled,
            })

        },1000 )
    }
    clickStop = () => {

        clearInterval(this.interval);

    }
    clickReset = () =>{
        let {a,b,c,d} = this.state;
        clearInterval(this.interval);
        this.setState({
            a:0,
            b:0,
            c:0,
            d:0,
            disabled:false
        })
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return (
            <div>
                <TopNav />
                <h2>STOPER</h2>
                <MainTime {...this.state}/>
                <div className='buttons'>
                    <Btn disabled={this.state.disabled} action={this.clickStart} name='Start'/>
                    <Btn action={this.clickStop} name='Stop'/>
                    <Btn action={this.clickReset} name='Reset'/>
                </div>
                <div className='footer'>
                    <Author />
                </div>

            </div>

        )
    }
}



export {Stoper};
