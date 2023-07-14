import React, { useState } from 'react';
import './Profile.css';
import Head from './Head';
import ProfileSidebar from './ProfileSidebar';
import ProfileContent from './ProfileContent';

const Profile = () => {
  const [active, setActive] = useState(1);
  return (
    <div className='p-5'>
      <Head />
      <div className='flex bg-[#f5f5f5] py-10'>
        <div className="w-[335px]">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
    </div>
  )
}

export default Profile