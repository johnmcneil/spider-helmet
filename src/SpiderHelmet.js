import React from 'react';
import styles from './SpiderHelmet.css';

console.log(styles);

const SpiderHelmet = (props) => {

	let spiderCss = {};

	if(props.glowing){

		spiderCss = {
			color:"green",
			boxShadow: "inset 0px 0px 33px rgba(50,200,0,.5)"
		}

	};

	return(<div className='spider' style={spiderCss}>

				<div className="spiderName">{props.children}</div>

				<svg viewBox="-55 -55 110 110" xmlns="http://www.w3.org/2000/svg">

				  <path d="M 0 0 C 0 0, 0 0, 50 50" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, 50 25" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, 50 0" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, 50 -25" stroke="black" fill="transparent"/>



				  <path d="M 0 0 C 0 0, 0 0, -50 50" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, -50 25" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, -50 0" stroke="black" fill="transparent"/>
				  <path d="M 0 0 C 0 0, 0 0, -50 -25" stroke="black" fill="transparent"/>


				  <circle cx="0" cy="0" r="25"/>

				</svg>
			</div>);

}

export default SpiderHelmet;