import React, { FC } from 'react';

import Logo from '../../assets/icons/logo.svg';
import './Header.scss';

const Header: FC = () => {
	return (
		<header className='header__container global-indent'>
			<img src={Logo} alt='logo' />
			<nav>
				<ul className='header__links'>
					<li className='header__links_link'>
						<a>Главная</a>
					</li>
					<li className='header__links_link'>
						<a>Каталог</a>
					</li>
					<li className='header__links_link'>
						<a>О нас</a>
					</li>
				</ul>
			</nav>
			<button className='header__btn'>
				<p className='header__btn_text'>Click</p>
			</button>
		</header>
	);
};

export { Header };
