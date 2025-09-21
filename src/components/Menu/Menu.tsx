import type { FC } from 'react';

import { cnMenu } from './Menu.classname';

import './Menu.css';

import { MenuItem } from '../MenuItem/MenuItem';

import AccountIcon from './../../assets/icons/account.svg';
import ChatIcon from './../../assets/icons/chat.svg';
import NotificationIcon from './../../assets/icons/notification.svg';
import StorageIcon from './../../assets/icons/storage.svg';
import HelpIcon from './../../assets/icons/help.svg';
import InviteIcon from './../../assets/icons/invite.svg';

import type { MenuItemProps } from '../MenuItem/MenuItem';

const menuItems: MenuItemProps[] = [
	{
		link: AccountIcon,
		text: 'Account',
	},
	{
		link: ChatIcon,
		text: 'Chat Settings',
	},
	{
		link: NotificationIcon,
		text: 'Notification',
	},
	{
		link: StorageIcon,
		text: 'Storage',
	},
	{
		link: HelpIcon,
		text: 'Help',
	},
	{
		link: InviteIcon,
		text: 'Invite a friend',
	},
];

const Menu: FC = () => {
	return (
		<ul className={cnMenu()}>
			{menuItems.map((item, index) => (
				<MenuItem key={index} {...item} />
			))}
		</ul>
	);
};

export { Menu };
