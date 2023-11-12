import React, { FC } from 'react';

import Logo from '../../assets/icons/logo.svg';
import './Header.scss';

const Header: FC = () => {
	return (
		<header className='header__container global-indent'>
			<img src={Logo} alt='logo' />
			<nav>
				<ul className='header__list'>
					<li className='header__list_item'>
						<a className='header__item_link' href='/'>Главная</a>
					</li>
					<li className='header__list_item'>
						<a className='header__item_link' href='/' >Каталог</a>
					</li>
					<li className='header__list_item'>
						<a className='header__item_link' href='/'>О нас</a>
					</li>
				</ul>
			</nav>
			<button className='header__btn'>
				<p className='header__btn_text gradient-text'>Click</p>
			</button>
		</header>
	);
};

export { Header };
