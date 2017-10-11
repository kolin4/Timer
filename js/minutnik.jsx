import React from 'react';
import {TopNav} from './reuse/topNav.jsx';
import {Author} from './reuse/author.jsx';
import {MainMin} from './minutnik/mainMin.jsx';

import {Btn} from './reuse/button.jsx';




class Minutnik extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            a:0,
            b: 0,
            c: 0,
            d: 0,
            opacity1: 1,
            opacity2: 1,
            opacity3: 1,
            opacity4: 1,
            opacityR1: 0.3,
            opacityR2: 0.3,
            opacityR3: 0.3,
            opacityR4: 0.3,
            tab:[],

        }
    }
    addA = (event) => {
        let a = this.state.a +1;
        if ( a >= 9) {
            this.setState({
                a : 9,
                opacity1:0.3
            })

        } else if (( a > 0) && (a <= 9)) {
            this.setState({
                a,
                opacity1:1,
                opacityR1:1
            })
        }

}
addB = (event) => {
    let b = this.state.b +1;
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
// timer fnc
startTime = (event) =>{
    let tempA = this.state.a;
    let tempB = this.state.b;
    let tempC = this.state.c;
    let tempD = this.state.d;
    let tempTab = [];

    tempTab.push(tempA, tempB, tempC, tempD);
    this.setState({
        tab:tempTab
    })



clearInterval(this.interval);

    this.interval = setInterval( () => {
        let {a,b,c,d,disabled} = {...this.state};
        d--;
        this.setState({
            opacity1: 0.3,
            opacity2: 0.3,
            opacity3: 0.3,
            opacity4: 0.3,
            opacityR1: 0.3,
            opacityR2: 0.3,
            opacityR3: 0.3,
            opacityR4: 0.3,
        })

        if (( a > 0) && ( b > 0) && ( c == 0 ) && ( d < 0)){
            if (( b == 0 ) && ( c == 0 ) && ( d == 0 )) {

                this.setState({
                    a:a-1,
                    b:9,
                    c:5,
                    d:9,

                })
            } else if ( b > 0){

                this.setState({
                    b:b-1,
                    c:5,
                    d:9
                })
            }

        } else if (( a > 0) && (b == 0) && ( c== 0) && (d < 0)){
            this.setState({
                a:a-1,
                b:9,
                c:5,
                d:9
            })



        }else if (( b > 0 ) && ( c >= 0 ) && ( d < 0))  {
            if( c == 0 ){

                this.setState({
                    b:b-1,
                    c:5,
                    d:9
                })
            } else {
                this.setState({
                    c:c-1,
                    d:9
                })
            }
        } else if (( d < 0 ) && (c > 0)){

        this.setState({
            d:9,
            c:c-1,

        })



        }else if (( d <= 0) && ( c == 0) && ( b == 0 ) && ( a == 0 ))  {
            clearInterval(this.interval);
            this.setState({
                d:0,
                opacity1:1,
                opacity2:1,
                opacity3:1,
                opacity4:1,
                opacityR1:0.3,
                opacityR2:0.3,
                opacityR3:0.3,
                opacityR4:0.3,
            })
            let endSound = new Audio('./sounds/bell.mp3');
            endSound.play();
        } else {

            this.setState({
                d
            })
    }




},1000)
}
stopTime = (event) =>{
    clearInterval(this.interval);
    let {a,b,c,d} = {...this.state}
    if ( a >= 9) {
        this.setState({
            opacity1:0.3,
            opacityR1:1
        })

    } else if (( a > 0) && (a <= 9)) {
        this.setState({
            opacity1:1,
            opacityR1:1
        })
    } else {
        this.setState({
            opacity1:1,
            opacityR1:0.3
        })
    }


    if ( b >= 9) {
        this.setState({
            opacityR2:1,
            opacity2:0.3
        })

    } else if (( b > 0) && (b <= 9)) {
        this.setState({
            opacity2:1,
            opacityR2:1
        })
    } else {
        this.setState({
            opacity2:1,
            opacityR2:0.3
        })

    }


        if ( c >= 5) {
            this.setState({
                opacityR3:1,
                opacity3:0.3
            })

        } else if (( c > 0) && (c <= 5)) {
            this.setState({
                opacity3:1,
                opacityR3:1
            })
        } else {
            this.setState({
                opacity3:1,
                opacityR3:0.3
            })

        }

        if ( d >= 9) {
            this.setState({
                opacityR4:1,
                opacity4:0.3
            })

        } else if (( d > 0) && (d <= 9)) {
            this.setState({
                opacity4:1,
                opacityR4:1
            })
        } else {
            this.setState({
                opacity4:1,
                opacityR4:0.3
            })

        }


}
resetTime = (event) => {
    let a = this.state.tab[0];
    let b = this.state.tab[1];
    let c = this.state.tab[2];
    let d = this.state.tab[3];
    this.setState({
        a,
        b,
        c,
        d
    })
    clearInterval(this.interval);

    if ( c >= 5) {
        this.setState({
            opacityR3:1,
            opacity3:0.3
        })

    } else if (( c > 0) && (c <= 5)) {
        this.setState({
            opacity3:1,
            opacityR3:1
        })
    } else {
        this.setState({
            opacity3:1,
            opacityR3:0.3
        })

    }

    if ( d >= 9) {
        this.setState({
            opacityR4:1,
            opacity4:0.3
        })

    } else if (( d > 0) && (d <= 9)) {
        this.setState({
            opacity4:1,
            opacityR4:1
        })
    } else {
        this.setState({
            opacity4:1,
            opacityR4:0.3
        })

    }

}

resetDb = () =>{
    this.setState({
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

    })
}
componentWillUnmount(){
    clearInterval(this.interval);
}
    render(){
        return(
            <div>
                <TopNav />
                <h2>MINUTNIK</h2>
                    <div className='arrowUpContent'>
                        <div style={{opacity: this.state.opacity1}} className='arrowUp' onClick={this.addA}></div>
                        <div style={{opacity: this.state.opacity2}} className='arrowUp' onClick={this.addB}></div>
                        <div className='pustak'></div>
                        <div style={{opacity: this.state.opacity3}} className='arrowUp' onClick={this.addC}></div>
                        <div style={{opacity: this.state.opacity4}} className='arrowUp' onClick={this.addD}></div>
                    </div>
                <MainMin {...this.state}/>
                    <div className='arrowDownContent'>
                        <div style={{opacity: this.state.opacityR1}} className='arrowDown' onClick={this.removeA}></div>
                        <div style={{opacity: this.state.opacityR2}} className='arrowDown' onClick={this.removeB}></div>
                        <div className='pustak'></div>
                        <div style={{opacity: this.state.opacityR3}} className='arrowDown' onClick={this.removeC}></div>
                        <div style={{opacity: this.state.opacityR4}} className='arrowDown' onClick={this.removeD}></div>
                    </div>
                <div className='buttons'>
                    <Btn disabled={this.state.disabled} action={this.startTime} name='Start'/>
                    <Btn  action={this.stopTime} name='Stop'/>
                    <button className='btn' onDoubleClick={this.resetDb} onClick={this.resetTime} >Reset</button>

                </div>
                <div className='footer'>
                    <Author />
                </div>
            </div>
        )
    }

}


export {Minutnik};
