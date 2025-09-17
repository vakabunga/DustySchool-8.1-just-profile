import type { FC } from 'react';

import { cnMenu } from './Menu.classname';

import './Menu.css';

const Menu: FC = () => {
	return <ul className={cnMenu()}></ul>;
};

export { Menu };
