import React,{Component} from 'react';
import Myclass from './class_components/Myclass';
import Myhomeclass from './class_components/Myhomeclass';
import Myscore from './class_components/Myscore';
import Modalboot from './Modalboot';
class App extends Component{
  title="Indian Premier league";
  year=2023;
  name="IPL";
  render(){
    return(
      <div>
        <h1>{this.title}</h1>
        <hr/>
        <h2>Welcome to IPL</h2>
        <hr/>
        <Myclass matchname={this.name} myyear={this.year}/>
        <hr/>
        <Myhomeclass/>
        <hr/>
        <Myscore/>
        <hr/>
        <Modalboot/>
      </div>
    )
  }
}
export default App;