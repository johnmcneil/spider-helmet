import React from 'react';

const SpiderHelmet = (props) => {

	let spiderCss = {};

	if(props.glowing){

		spiderCss = {
			color:"green",
			boxShadow: "inset 10px 10px 10px rgba(50,200,0,.5)"
		}

	};

	return(<p style={spiderCss}>{props.children}</p>);

}

export default SpiderHelmet;