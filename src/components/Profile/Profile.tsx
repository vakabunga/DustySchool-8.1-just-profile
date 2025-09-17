import type { FC } from 'react';

import { cnProfile } from './Profile.classname';

import './Profile.css';

const Profile: FC = () => {
	return <div className={cnProfile()}></div>;
};

export { Profile };
