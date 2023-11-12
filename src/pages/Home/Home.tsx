import React, { FC } from 'react';

import { Header } from '../../widgets';

import Capybara from '../../assets/capybara.png';
import './Home.scss';

const Home: FC = () => {
	return (
		<div className='home__container'>
			<Header />
			<main className='home__main global-indent'>
				<img className='home__main_img' src={Capybara} alt='capybara' />
				<div className='home__main_content'>
					<h1 className='home__content_title gradient-text'>Капибара</h1>
					<p className='home__content_description'>
						это травоядное млекопитающее, самый большой грызун из ныне существующих.
						В длину они достигают 1,35 метра, а вес может колебаться от 35 до 63 кг.
						Обитают капибары в основном у берегов Центральной и Южной Америки –
						они очень любят воду и половину своей жизни проводят в водоёмах.
					</p>
				</div>
			</main>
		</div>
	);
};

export { Home };
