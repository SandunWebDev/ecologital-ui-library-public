import React from 'react';
import './Menu.css';

import { Menu, Avatar, Badge, Input, Dropdown, List } from 'antd';
import {
	MailOutlined,
	AppstoreOutlined,
	SearchOutlined as SearchIcon,
	MessageOutlined as MessageIcon,
	SettingOutlined as SettingsIcon,
	ProfileOutlined as UserProfileIcon,
	LoginOutlined as LogOutIcon,
	UserOutlined as UserIcon,
	BuildOutlined as OrganizationIcon,
	MenuOutlined as BurgerMenuIcon,
} from '@ant-design/icons';

const { SubMenu } = Menu;

import { Button } from 'antd';

const userMenu = (
	<div className='UserMenu'>
		<div className='UserMenu__backgroundPhoto'>
			<UserIcon />
		</div>

		<div className='UserMenu__top'>
			<Avatar>JD</Avatar>
			<div className='UserMenu__top__details'>
				<div className='UserMenu__top__details__title'>John Doe</div>
				<div className='UserMenu__top__details__subTitle'>Web Developer</div>
			</div>
		</div>

		<Menu>
			<Menu.Item icon={<UserProfileIcon />}>User Profile</Menu.Item>
			<Menu.Item icon={<LogOutIcon />}>Log Out</Menu.Item>
		</Menu>
	</div>
);

const settingsMenu = (
	<div className='UserMenu'>
		<div className='UserMenu__backgroundPhoto'>
			<SettingsIcon />
		</div>
		{/* <div className='UserMenu__top'>
			<Avatar>JD</Avatar>
			<div className='UserMenu__top__details'>
				<div className='UserMenu__top__details__title'>John Doe</div>
				<div className='UserMenu__top__details__subTitle'>Web Developer</div>
			</div>
		</div> */}
		<Menu>
			<Menu.Item icon={<UserProfileIcon />}>Account Settings</Menu.Item>
			<Menu.Item icon={<OrganizationIcon />}>Organization Settings</Menu.Item>
		</Menu>
	</div>
);

const messageMenu = (
	<div className='MessageMenu'>
		<div className='UserMenu__backgroundPhoto'>
			<SettingsIcon />
		</div>
		{/* <div className='UserMenu__top'>
			<Avatar>JD</Avatar>
			<div className='UserMenu__top__details'>
				<div className='UserMenu__top__details__title'>John Doe</div>
				<div className='UserMenu__top__details__subTitle'>Web Developer</div>
			</div>
		</div> */}
		{/* <Menu>
			<Menu.Item icon={<UserProfileIcon />}>Account Settings</Menu.Item>
			<Menu.Item icon={<OrganizationIcon />}>Organization Settings</Menu.Item>
		</Menu> */}
		<List
			size='small'
			itemLayout='horizontal'
			dataSource={[
				{
					avatar: 'AB',
					title: 'New Company Added',
					subtitle: 'PizzaHut',
				},
				{
					avatar: 'CD',
					title: 'New Company Added',
					subtitle: 'KFC',
				},
			]}
			renderItem={(item) => (
				<List.Item>
					<List.Item.Meta
						avatar={<Avatar>{item.avatar}</Avatar>}
						title={<a href='https://ant.design'>{item.title}</a>}
						description={item.subtitle}
					/>
				</List.Item>
			)}
		/>
	</div>
);

function Menu2(props = {}) {
	const { text = 'Hello World', pageTitle = 'ECOLOGITAL' } = props;

	return (
		<div className='Menu'>
			<div className='Menu____left'>
				<div className='Menu__mobileMenu'>
					<BurgerMenuIcon />
				</div>

				<div className='Menu__title'>
					<span className='Menu__title__logo'>
						<img
							src='https://users.neurolage.com/inc/img/witmeg.png'
							alt='company-logo'
						/>
					</span>
					<span className='Menu__title__text'>{pageTitle}</span>
				</div>
			</div>

			<div className='Menu____right'>
				<div className='Menu__search'>
					<Input size='large' placeholder='Search' prefix={<SearchIcon />} />
				</div>
				<div className='Menu__badge'>
					<Dropdown overlay={messageMenu} trigger={['click']}>
						<Badge count={5} className='aaa' size='large'>
							<MessageIcon />
						</Badge>
					</Dropdown>
				</div>
				<div>
					<Dropdown overlay={settingsMenu} trigger={['click']}>
						<SettingsIcon />
					</Dropdown>
				</div>
				<Dropdown overlay={userMenu} trigger={['click']}>
					<div className='Menu__avatar'>
						<Avatar>JD</Avatar>
					</div>
				</Dropdown>
			</div>
		</div>
	);
}

export default Menu2;
