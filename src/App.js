import React from 'react';
import './App.css';
import SpiderHelmet from './SpiderHelmet.js';

const syllables = ['jo','cat','leen','bo','cra','chur','nan','is','taki','do','ro','ba', 'bo', 'noo', 'tor', 'loop', 'bleep'];
const colors = ['black', 'green', 'red', 'blue', 'orange', 'lightseagreen', 'magenta', 'olive', 'plum', 'thistle', 'springgreen'  ];

const notes = [
	{name:'c#' ,freq:277.1826},
	{name:'d#' ,freq:311.1270},
	{name:'f#' ,freq:369.9944},
	{name:'g#' ,freq:415.3047},
	{name:'a#' ,freq:466.1638},
	{name:'c#2',freq:554.3653},
	{name:'d#2',freq:622.2540},
	{name:'f#2',freq:739.9888},
	{name:'g#2',freq:830.6094},
	{name:'a#2',freq:932.3275}
];

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

    const note = notes[Math.floor(Math.random()*notes.length)];
    
    const duration = Math.floor(Math.random()*900) + 100;

    const glowing = Math.round(Math.random());

    return prevState.spiders.push({ name : respectfulName , duration: duration, glowing : !!glowing , hatColor : hatColor, note: note });     

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

clickSpiderFromDom = (index = 0)=>{
	console.log('clickSpiderFromDom playing',index);
	const spider = document.getElementById(`spider_${index}`);

	if(spider){
		spider.click();
	}

}

playSong = (timestamp)=>{

	 let cumulativeDuration = 0;
	 this.state.spiders.map((spider,index)=>{

	 	cumulativeDuration += spider.duration;
	 	console.log('i will play spider_'+index+' at '+cumulativeDuration);
	 	window.setTimeout(()=>{ this.clickSpiderFromDom(index);  },cumulativeDuration);

	 });

}

render(){

  return (
    <div className="App">
      <div className="ButtonHolder">
           <button key={'addSpider'} onClick={this.addSpider}>add spider</button>
           <button key={'removeSpider'} onClick={this.removeSpider}>remove spider</button>
           <button key={'playSpider'} onClick={this.playSong}>play song</button>
      </div>

      <div className="SpiderHolder">
	      {this.state.spiders.map((item,index)=>{ 
	        return <SpiderHelmet 
	        		  id={`spider_${index}`} 
	                  key={`${index}_${item.name}`} 
	                  glowing={item.glowing}
	                  note={item.note}
	                  duration={item.duration}
	                  hatColor={item.hatColor}>
	                    {item.duration}
	               </SpiderHelmet>
	      })}
      </div>

    </div>
  );

}


}

export default App;
