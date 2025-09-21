import type { FC } from 'react';

import { cnButton } from './Button.classname';

import './Button.css';

export type ButtonProps = {
	text: string;
};

const Button: FC<ButtonProps> = ({ text }) => {
	return <button className={cnButton()}>{text}</button>;
};

export { Button };
