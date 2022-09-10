import React from "react";
import Navigation from "../../Modules/Navigation";
import './Profile.scss';

const Profile = () => {
  return(
    <section className="profile">
      <Navigation/>
      <section className="profile__post">
        Profile
      </section>
      <aside className="profile__aside">
        aside
      </aside>
    </section>
  )
}

export default Profile;