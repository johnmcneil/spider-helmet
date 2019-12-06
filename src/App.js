import React from 'react';
import './App.css';
import SpiderHelmet from './SpiderHelmet.js';

const syllables = ['jo','cat','leen','bo','cra','chur','nan','is','taki','do','ro','ba', 'bo', 'noo', 'tor', 'loop', 'bleep'];
const colors = ['black', 'green', 'red', 'blue', 'orange', 'lightseagreen', 'magenta', 'olive', 'plum', 'thistle', 'springgreen'  ];

class App extends React.Component {

constructor(props){
  super(props);
  this.state = { 
    spiders : [

    ]
  };
}

addSpider = () =>{

  this.setState((prevState,prevProps)=>{
    
    const numSyllables = 2;
    const nameLengthArray = Array.from(Array(numSyllables).keys());

    let name = nameLengthArray.map((item,index)=>{
      return syllables[Math.floor(Math.random()*syllables.length)];
    });

    name = name.join('');

    const respectfulName = `${name[0].toUpperCase()}${name.substring(1)}`;

    const hatColor = colors[Math.floor(Math.random()*colors.length)];

    const frequency = Math.random() * 880;


    const glowing = Math.round(Math.random());

    return prevState.spiders.push({ name : respectfulName , glowing : !!glowing , hatColor : hatColor, frequency: frequency });     

  });

}


removeSpider = (index) =>{

  this.setState((prevState,prevProps)=>{ 

    if ( index >= 0 ) {

      if ( window.confirm(`Do you really want to remove ${prevState.spiders[index].name}?`) ) {
        return {spiders : prevState.spiders.filter( (spider, i) => {
          if ( i === index ) { 
            return false
          } else { return true; }
        })}
      }

    } else {
      return {spiders : prevState.spiders.slice(0,-1) }; 
    }
  });

}

render(){

  return (
    <div className="App">
      <div className="ButtonHolder">
           <button key={'addSpider'} onClick={this.addSpider}>add spider</button>
           <button key={'removeSpider'} onClick={this.removeSpider}>remove spider</button>

      </div>

      <div className="SpiderHolder">
      {this.state.spiders.map((item,index)=>{ 
        return <SpiderHelmet 
                  onClick={()=>{ this.removeSpider(index); } } 
                  key={`${index}_${item.name}`} 
                  glowing={item.glowing}
                  frequency={item.frequency} 
                  hatColor={item.hatColor}>
                    {item.name}
                  </SpiderHelmet>
      })}
      </div>

    </div>
  );

}


}

export default App;
