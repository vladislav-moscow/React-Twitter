import React from 'react';
import './Aside.scss';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  handleChange: (event:any) => any;
  searchText: string;
}

function Aside({handleChange, searchText} : Props) {
  return (
    <aside className="home-aside">
				<div className="home-aside__wrapper">
					<SearchIcon className='home-aside__icon'/>
					<input className='home-aside__search' type="text" onChange={handleChange} value={searchText} placeholder='Search...'/>
				</div>
				<div className="home-aside__current">
					<h2 className="home-aside__current-title">
						Актуальные темы для вас
					</h2>
					<div className="home-aside__current-wrapper">
						<div className="home-aside__current-topic">
							<div className="home-aside__current-content">
								<h4 className="home-aside__current-description aside-content">
									Спорт - Актуально
								</h4>
								<h3 className="home-aside__current-signature">
									#Viaplay
								</h3>
								<h4 className="home-aside__current-twit aside-content">
									Твитов: 10,3 тыс.
								</h4>
							</div>
							<div className="home-aside__current-menu">
								...
							</div>
						</div>
						<div className="home-aside__current-topic">
							<div className="home-aside__current-content">
								<h4 className="home-aside__current-description aside-content">
									Программирование - Актуально
								</h4>
								<h3 className="home-aside__current-signature">
									#FrontEndBoy
								</h3>
								<h4 className="home-aside__current-twit aside-content">
									Твитов: 96,1 тыс.
								</h4>
							</div>
							<div className="home-aside__current-menu">
								...
							</div>
						</div>
						<div className="home-aside__current-topic">
							<div className="home-aside__current-content">
								<h4 className="home-aside__current-description aside-content">
									Спорт - Актуально
								</h4>
								<h3 className="home-aside__current-signature">
									#Viaplay
								</h3>
								<h4 className="home-aside__current-twit aside-content">
									Твитов: 10,3 тыс.
								</h4>
							</div>
							<div className="home-aside__current-menu">
								...
							</div>
						</div>
					</div>
				</div>
				
			</aside>
  );
}

export default Aside;