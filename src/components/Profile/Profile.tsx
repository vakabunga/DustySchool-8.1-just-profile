import type { FC } from 'react';

import { Image } from '../Image/Image';

import { cnProfile } from './Profile.classname';
import { cnImage } from '../Image/Image.classname';

import avatar from './../../assets/img/avatar.png';

import './Profile.css';

const Profile: FC = () => {
	return (
		<div className={cnProfile()}>
			<Image link={avatar} className={cnProfile(cnImage())} />
			<h2 className={cnProfile("name")}>Jane Doe</h2>
			<p className={cnProfile("bio")}>This is a small bio description to let users express themselves.</p>
		</div>
	);
};

export { Profile };
