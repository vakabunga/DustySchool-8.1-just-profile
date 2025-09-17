import type { FC } from 'react';

import { cnButton } from './Button.classname';

import './Button.css';

const Button: FC = () => {
	return <div className={cnButton()}></div>;
};

export { Button };
