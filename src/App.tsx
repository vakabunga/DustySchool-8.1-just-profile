import type { FC } from 'react';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Profile } from './components/Profile/Profile';

import './App.css';

const App: FC = () => {
	return (
		<div>
			<Header />
			<Profile />
			<Menu />
			<Footer />
		</div>
	);
};

export { App };
