import React, { Component} from 'react'

const MsToTime = (duration) => {

     let  seconds = (duration % 60);
      let minutes = Math.floor((duration / 60) % 60);
      let hours = Math.floor(duration / 3600);
  
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
  
      let time = hours + ":" + minutes + ":" + seconds;

    return time;
}
  

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds:0,
            pause: false
          }
        //   this.Start= this.Start.bind(this)
        //   this.Reset= this.Reset.bind(this)
        //   this.pauseTimer= this.pauseTimer.bind(this)
    }

    pauseTimer = ()=> {
        clearInterval(this.interval)
        this.setState({
            pause : false})
                      }

    Start = () =>{
        this.setState({pause:true})
        this.interval=setInterval(()=>{
        this.setState({
        seconds:this.state.seconds + 1
        });
        },1000)
        }


    TogglePlay=()=>{
        this.state.pause ? this.pauseTimer() : this.Start()
    }

    Reset = () =>{
        clearInterval(this.interval)
        this.setState({seconds:0})
    }

    render() { 
        return (<div>
            <h1>{MsToTime(this.state.seconds)}</h1>
            <button onClick={this.TogglePlay}>Start</button>
            <button onClick={this.Reset}>Reset</button>
        </div>  );
    }
}

 
export default Timer;