import type { FC } from 'react';

import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Profile } from './components/Profile/Profile';
import { cnApp } from './App.classname';

import './App.css';

const App: FC = () => {
	return (
		<div className={cnApp()}>
			<Header />
			<Profile />
			<Menu />
			<Button text="Logout" />
		</div>
	);
};

export { App };
