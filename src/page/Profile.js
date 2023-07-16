import React, { useState } from 'react';
import Head from './Head';
import ProfileSidebar from './ProfileSidebar';
import ProfileContent from './ProfileContent';
import './Profile.css';

const Profile = () => {
  const [active, setActive] = useState(1);

  return (
    <div className='profile_head'>
      <Head />
      <div className='profile_bodyContaint'>
        <div className="profile_bodyLeftCol w-[335px]">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
    </div>
  )
}

export default Profile