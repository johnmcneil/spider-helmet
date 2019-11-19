import React from 'react';
import './App.css';
import SpiderHelmet from './SpiderHelmet.js';

const syllables = ['jo','cat','leen','bo','cra','chur','nan','is','taki','do','ro','ba', 'bo', 'noo', 'tor', 'loop', 'bleep'];

class App extends React.Component {

constructor(props){
  super(props);
  this.state = { 
    spiders : [
      {name:'tom', glowing : false },
      {name:'charles', glowing : true },
      {name:'felicity', glowing : true },
      {name:'daren', glowing : false },
    ]
  };
}

addSpider = () =>{

  this.setState((prevState,prevProps)=>{
    
    const name = [0,0].map((item,index)=>{
      return syllables[Math.floor(Math.random()*syllables.length)];
    });

    const glowing = Math.round(Math.random());

    return prevState.spiders.push({ name , glowing : !!glowing});     

  });

}

removeSpider = () =>{
  
  this.setState((prevState,prevProps)=>{ 

    return {spiders : prevState.spiders.slice(0,-1) }; 

  });

}

render(){
  
  return (
    <div className="App">


      <button key={'addSpider'} onClick={this.addSpider}>add spider</button>
      <button key={'removeSpider'} onClick={this.removeSpider}>remove spider</button>
      {this.state.spiders.map((item,index)=>{ return <SpiderHelmet key={`${index}_${item.name}`} glowing={item.glowing}>{item.name}</SpiderHelmet>})}


    </div>
  );

}


}

export default App;
