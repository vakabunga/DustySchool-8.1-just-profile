import type { FC } from 'react';

import { cnHeader } from './Header.classname';
import { cnImage } from '../Image/Image.classname';
import arrowIcon from './../../assets/icons/arrow.svg';

import './Header.css';
import { Image } from '../Image/Image';

const Header: FC = () => {
	return (
		<div className={cnHeader()}>
				<Image link={arrowIcon} className={cnHeader(cnImage())} />
				<p className={cnHeader('text')}>Profile</p>
		</div>
	);
};

export { Header };
