import React from 'react';

import {TopNav} from './reuse/topNav.jsx';
import {Author} from './reuse/author.jsx';
import {MainBudzik} from './budzik/mainBudzik.jsx';
import {Btn} from './reuse/button.jsx';

class Budzik extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            a:0,
            b:0,
            c:0,
            d:0,
            opacity1: 1,
            opacity2: 1,
            opacity3: 1,
            opacity4: 1,
            opacityR1: 0.3,
            opacityR2: 0.3,
            opacityR3: 0.3,
            opacityR4: 0.3,
            display: 'none'
        }
    }

    addA = (event) => {
        let a = this.state.a +1;
        let b = this.state.b;
        if ( a == 2) {
            this.setState({
                opacity1:0.3,
                opacityR1:1
            })
        }
        if (( a >= 2) && ( b > 4 )){
            this.setState({
                a : 2,
                b:4,
                opacity1:0.3,

                opacity2:0.3,
            })

        } else if (( a > 0) && (a <= 2)) {
            this.setState({
                a,
                opacity1:1,
                opacityR1:1
            })
        }

}
addB = (event) => {
let a = this.state.a;
let b = this.state.b +1;

    if (this.state.a == 2) {
        if ( b > 3) {
            this.setState({
                a: 0,
                b : 0,
                opacity1:1,
                opacity2:1,
                opacityR1:0.3,
                opacityR2:0.3
            })

        } else if (( b > 0) && (b <= 4)) {
            this.setState({
                b,
                opacity2:1,
                opacityR2:1
            })
        }
    } else if (( b > 9 ) && ( a == 0 )) {
        this.setState({
            opacity1:1,
            opacityR1:1,
            opacity2:1,
            opacityR2:0.3,
            a:1,
            b:0
        })
    } else if (( b > 9 ) && ( a == 1 )) {
        this.setState({
            opacity1:0.3,
            opacityR1:1,
            opacity2:1,
            opacityR2:0.3,
            a:2,
            b:0
        })


    }else  {
        if ( b >= 9) {
            this.setState({
                b : 9,
                opacity2:0.3
            })

        } else if (( b > 0) && (b <= 9)) {
            this.setState({
                b,
                opacity2:1,
                opacityR2:1
            })
        }
    }




}
addC = (event) => {
    let c = this.state.c +1;
    if ( c >= 5) {
        this.setState({
            c : 5,
            opacity3:0.3
        })

    } else if (( c > 0) && (c <= 5)) {
        this.setState({
            c,
            opacity3:1,
            opacityR3:1
        })
    }

}
addD = (event) => {
    let d = this.state.d +1;
    if ( d >= 9) {
        this.setState({
            d : 9,
            opacity4:0.3
        })

    } else if (( d > 0) && (d <= 9)) {
        this.setState({
            d,
            opacity4:1,
            opacityR4:1
        })
    }

}
/// remove
removeA = (event) => {
    let a = this.state.a -1;
    if ( a <= 0) {
        this.setState({
            a:0,
            opacity1:1,
            opacityR1:0.3
        })

    } else if ((a > 0) && (a<=9)){
        this.setState({
            a,
            opacity1:1

        })
    }

}
removeB = (event) => {
    let b = this.state.b -1;
    if ( b <= 0) {
        this.setState({
            b:0,
            opacity2:1,
            opacityR2:0.3
        })

    } else if ((b > 0) && (b<=9)){
        this.setState({
            b,
            opacity2:1

        })
    }

}
removeC = (event) => {
    let c = this.state.c -1;
    if ( c <= 0) {
        this.setState({
            c:0,
            opacity3:1,
            opacityR3:0.3
        })

    } else if ((c > 0) && (c<=9)){
        this.setState({
            c,
            opacity3:1

        })
    }

}
removeD = (event) => {
    let d = this.state.d -1;
    if ( d <= 0) {
        this.setState({
            d:0,
            opacity4:1,
            opacityR4:0.3
        })

    } else if ((d > 0) && (d<=9)){
        this.setState({
            d,
            opacity4:1

        })
    }

}
start = () => {
    this.setState({
        display:'block'
    })
    let date = new Date();
    let {a,b,c,d} = {...this.state};
    this.intervalTime = setInterval( () =>{
        let date = new Date();

        let hours = date.getHours().toString();
        let min = date.getMinutes().toString();
        let aClock = hours.charAt(0);
        let bClock = hours.charAt(1);
        let cClock = min.charAt(0);
        let dClock = min.charAt(1);

        if (( aClock == a ) && ( bClock == b) && ( cClock == c) && ( dClock == d)){
            console.log('ALARM');
            let endSound = new Audio('../sounds/bell.mp3');
            endSound.play();
            this.setState({
                display:'none'
            })
            clearInterval(this.intervalTime);
        }
    },2000)
}
stop = () =>{
    clearInterval(this.intervalTime);
    this.setState({
        display:'none'
    })
}
    render(){
        return (
            <div>
                <TopNav />
                <h2>BUDZIK</h2>
                    <div className='arrowUpContent'>
                        <div style={{opacity: this.state.opacity1}} className='arrowUp' onClick={this.addA}></div>
                        <div style={{opacity: this.state.opacity2}} className='arrowUp' onClick={this.addB}></div>
                        <div className='pustak'></div>
                        <div style={{opacity: this.state.opacity3}} className='arrowUp' onClick={this.addC}></div>
                        <div style={{opacity: this.state.opacity4}} className='arrowUp' onClick={this.addD}></div>
                    </div>
                <MainBudzik {...this.state}/>
                    <div className='arrowDownContent'>
                        <div style={{opacity: this.state.opacityR1}} className='arrowDown' onClick={this.removeA}></div>
                        <div style={{opacity: this.state.opacityR2}} className='arrowDown' onClick={this.removeB}></div>
                        <div className='pustak'></div>
                        <div style={{opacity: this.state.opacityR3}} className='arrowDown' onClick={this.removeC}></div>
                        <div style={{opacity: this.state.opacityR4}} className='arrowDown' onClick={this.removeD}></div>
                    </div>
                    <span className='alarm' style={{display:this.state.display}}>Alarm: {this.state.a}{this.state.b}:{this.state.c}{this.state.d}</span>
                <div className='buttons'>
                    <Btn action={this.start} name='Start'/>
                    <Btn  action={this.stop} name='Stop'/>

                </div>
                <div className='footer'>
                    <Author />
                </div>


            </div>
        )
    }
}














export {Budzik};
