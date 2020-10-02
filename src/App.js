import React from 'react';
import './App.css';
import SpiderHelmet from './SpiderHelmet.js';

const syllables = ['jo','cat','leen','bo','cra','chur','nan','is','taki','do','ro','ba', 'bo', 'noo', 'tor', 'loop', 'bleep'];
const colors = ['black', 'green', 'red', 'blue', 'orange', 'lightseagreen', 'magenta', 'olive', 'plum', 'thistle', 'springgreen'];
const instruments = ['sine'];
const notes = [
	{name:'C4#', freq:277.1826},
	{name:'D4#', freq:311.1270},
	{name:'F4#', freq:369.9944},
	{name:'G4#', freq:415.3047},
	{name:'A4#', freq:466.1638},
	{name:'C5#', freq:554.3653},
	{name:'D5#', freq:622.2540},
	{name:'F5#', freq:739.9888},
	{name:'G5#', freq:830.6094},
	{name:'A5#', freq:932.3275}
];

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = { 
    spiders : [

    ]
  };
}

addSpider = () => {
  this.setState((prevState,prevProps)=>{
    
    const numSyllables = 2;
    const nameLengthArray = Array.from(Array(numSyllables).keys());

    let name = nameLengthArray.map((item,index)=>{
      return syllables[Math.floor(Math.random()*syllables.length)];
    });

    name = name.join('');

    const respectfulName = `${name[0].toUpperCase()}${name.substring(1)}`;

    const hatColor = colors[Math.floor(Math.random()*colors.length)];

    const glowing = Math.round(Math.random());

    const note = notes[Math.floor(Math.random()*notes.length)];
    const instrument = instruments[Math.floor(Math.random()*instruments.length)];
    const duration = Math.floor(Math.random()*200) + 200;



    return prevState.spiders.push({ name : respectfulName , instrument:instrument , duration: duration, glowing : !!glowing , hatColor : hatColor, note: note });     
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
	 	console.log(`i will play spider ${index} at ${cumulativeDuration}`);
	 	window.setTimeout(()=>{ this.clickSpiderFromDom(index);  },cumulativeDuration);

	 });

}

render() {

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
	                  instrument={item.instrument}
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