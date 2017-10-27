import React from 'react';


class MainData extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                date: new Date(),

            }
    }



    componentDidMount(){
        const date = this.state.date;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds() +1;
        let lineSeconds = document.querySelector('.seconds');
        let lineMinutes = document.querySelector('.minutes');
        let lineHours = document.querySelector('.hour');
        lineSeconds.style.transform = `rotate(${((seconds / 60) *360) -90}deg)`;
        lineMinutes.style.transform = `rotate(${((minutes / 60) *360) -90}deg)`;
        lineHours.style.transform = `rotate(${((hours / 12) *360) -90}deg)`;
        this.setState({
            date: new Date()
        })

        this.interval = setInterval( () => {
            const date = this.state.date;
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds() +1;
            let lineSeconds = document.querySelector('.seconds');
            let lineMinutes = document.querySelector('.minutes');
            let lineHours = document.querySelector('.hour');
            lineSeconds.style.transform = `rotate(${((seconds / 60) *360) -90}deg)`;
            lineMinutes.style.transform = `rotate(${((minutes / 60) *360) -90}deg)`;
            lineHours.style.transform = `rotate(${((hours / 12) *360) -90}deg)`;
            this.setState({
                date: new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return (
            <div className="main">
                <div className="clock">
                    <div className="hour"></div>
                    <div className="minutes"></div>
                    <div className="seconds"></div>
                </div>
            </div>
        )
    }

}

export {MainData};
