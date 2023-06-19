import React,{Component} from 'react';
class Myclass extends Component{
    teams=["RCB","CSK","MI","RR","KKR"];
    render(){
        return(
            <div>
                <ul>
                    <h2>Teams of {this.props.matchname} {this.props.myyear}</h2>
                    {this.teams.map((val,indx)=>
                    <li key={indx}>{val}</li>
                    )}
                </ul>
            </div>
        )
    }
}
export default Myclass;