import type { FC } from 'react';

import { cnMenuItem } from './MenuItem.classname';

import './MenuItem.css';
import { Image } from '../Image/Image';

export type MenuItemProps = {
	link: string;
	text: string;
};

const MenuItem: FC<MenuItemProps> = ({ link, text }) => {
	return (
		<li className={cnMenuItem()}>
			<Image link={link} />
			<p>{text}</p>
		</li>
	);
};

export { MenuItem };
