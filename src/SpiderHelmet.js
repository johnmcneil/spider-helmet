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

				<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				  <circle cx="50" cy="50" r="25"/>
				</svg>
			</div>);

}

export default SpiderHelmet;