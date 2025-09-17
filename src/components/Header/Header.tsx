import type { FC } from 'react';

import { cnHeader } from './Header.classname';

import './Header.css';

const Header: FC = () => {
	return <div className={cnHeader()}></div>;
};

export { Header };
