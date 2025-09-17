import type { FC } from 'react';

import { cnMenuItem } from './MenuItem.classname';

import './MenuItem.css';

const MenuItem: FC = () => {
	return <li className={cnMenuItem()}></li>;
};

export { MenuItem };
