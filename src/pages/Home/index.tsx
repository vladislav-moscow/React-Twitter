import React from 'react';
import Navigation from '../../Modules/Navigation';
import './Home.scss';

function Home() {
	return (
		<section className="home">
			<Navigation />
			<section className="home__posts">
				<section className='status'>
					<h2 className="status-title">Главная</h2>
					<div className="status__img-wrapper">
						<img src="" alt="face" className="status__img" />
					</div>
					<div className="status__input"></div>
					<div className="status__icon"></div>
				</section>
			</section>
			<aside className="home__aside"></aside>
		</section>
	);
}

export default Home;