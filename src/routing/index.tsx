import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

const Router: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	);
};

export { Router };
