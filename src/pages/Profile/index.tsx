import React, { useState } from "react";
import Aside from "../../Modules/Aside";
import Navigation from "../../Modules/Navigation";
import './Profile.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from "../../components/Button";

const Profile = () => {
  const [searchText, setSearchText] = useState<string>('');
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value)
	}

  
  
	

  return(
    <section className="profile">
      <Navigation/>
      <section className="profile-header">
        <div className="profile-header__heading">
          <h2 className="profile-header__heading-title">Владислав</h2>
          <h4 className="profile-header__heading-twits"> 0 Твитов</h4>
        </div>
        <div className="profile-header__images-module">
          <div className="profile-header__images-module-wrapper">
            <AccountCircleIcon className='profile-header__images-module-avatar'/>
          </div>
          
          <Button className="profile-header__images-module-btn" text={'Изменить профиль'}/>
        </div>
      </section>
      <Aside handleChange={handleChange} searchText={searchText} />
    </section>
  )
}

export default Profile;