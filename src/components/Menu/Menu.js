import React from 'react';
import './Menu.css';

import { Button } from 'antd';

function Menu(props = {}) {
	const { text = 'Hello World' } = props;

	return (
		<div>
			ANTD
			<Button type='primary'>Primary Button</Button>
		</div>
	);
}

export default HelloWorld2;
