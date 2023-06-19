import React,{Component} from'react';
class Myhomeclass extends Component{
    players=[
        {id:1,name:"Virat",age:36,city:"Delhi"},
        {id:2,name:"B",age:36,city:"Delhi"},
        {id:3,name:"C",age:32,city:"Banglore"},
        {id:4,name:"D",age:23,city:"Kochi"},
        {id:5,name:"E",age:25,city:"Kerala"},
        {id:6,name:"F",age:29,city:"Mumbai"}
    ]
    render(){
        return(
            <div>
                <h3>Royal Challengers Bengaluru Team</h3>
                <table border={1} width={500}>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.players.map((play,ind)=>
                        <tr key={ind}>
                            <td>{ind}</td>
                            <td>{play.name}</td>
                            <td>{play.age}</td>
                            <td>{play.city}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Myhomeclass;