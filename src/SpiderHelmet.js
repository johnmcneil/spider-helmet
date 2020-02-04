import React from 'react';
import './SpiderHelmet.css';
import Pizzicato from 'pizzicato';

const SpiderHelmet = (props) => {

	let spiderCss = {};

	if(props.glowing){

		spiderCss = {
			color:"green",
			boxShadow: "inset 0px 0px 33px rgba(50,200,0,.5)"
		}

	};


	let sound = new Pizzicato.Sound({ 
	        source: 'wave',
	        options: { type: props.instrument , frequency: props.note.freq }
	});

	let playSpider = function(){
		sound.stop(); sound.play(); window.setTimeout( () => { sound.stop() }, props.duration );	
	}

	return(<div id={props.id} onClick={()=>{ playSpider(); }} className='spider' style={spiderCss}>

				<div className="spiderName">{props.children} - {props.note.name}</div>

				<svg viewBox="-55 -55 110 110" xmlns="http://www.w3.org/2000/svg">

				  <rect x="-12" y="-34" width="25" height="10" fill={props.hatColor} />
				  <rect x="-7" y="-48" width="14" height="15" fill={props.hatColor} />

				  <path d="M 0 0 C 0 0, 0 0, 50 50" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, 50 25" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, 50 0" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, 50 -25" stroke="black" fill="transparent"/>

				  <path d="M 0 0 C 0 0, 0 0, -50 50" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, -50 25" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, -50 0" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, -50 -25" stroke="black" fill="transparent"/>

				  <circle cx="0" cy="0" r="25"/>

				<text text-anchor="middle" fill="white">{props.note.name}</text>
				</svg>
			</div>);

}

export default SpiderHelmet;