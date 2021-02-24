import React from 'react';
import './HelloWorld2.css';

function HelloWorld2(props = {}) {
	const { text = 'Hello World' } = props;

	return (
		<h1 style={{ color: 'red' }} className='HelloWorld2'>
			{text}
		</h1>
	);
}

export default HelloWorld2;
