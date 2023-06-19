import React,{Component} from'react';
class Myscore extends Component{
    constructor(props){
        super(props);
        this.state={score:0};
        this.state={wickets:0};
    }
    myupdate=()=>{
        this.setState({score:parseInt(prompt("Enter the Runs"))})
        this.setState({wickets:parseInt(prompt("Enter the Wickets"))})
    }
    my4run=()=>{
        this.setState({score:this.state.score+4})
    }
    my1run=()=>{
        this.setState({score:this.state.score+1})
    }
    my2run=()=>{
        this.setState({score:this.state.score+2})
    }
    my6run=()=>{
        this.setState({score:this.state.score+6})
    }
    mywicket=()=>{
        this.setState({wickets:this.state.wickets+1})
    }
    myreset=()=>{
        this.setState({score:0});
        this.setState({wickets:0}); 
    }
    render(){
        return(
            <div>
                <h3>The Score is: {this.state.score}-{this.state.wickets}</h3>
                <button onClick={this.myupdate}>Update Score</button> &nbsp;
                <button onClick={this.myreset}>Reset Score</button>&nbsp;
                <button onClick={this.my1run}>1 run</button>&nbsp;
                <button onClick={this.my2run}>2 runs</button>&nbsp;
                <button onClick={this.my4run}>4 runs</button>&nbsp;
                <button onClick={this.my6run}>6runs</button>&nbsp;
                <button onClick={this.mywicket}>Wicket</button>
            </div>

        )
    }
}
    export default Myscore;
    