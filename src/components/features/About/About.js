import React from 'react';
import siteData from '../../../const';
import Link from 'next/link';

const About = () => {
  const aboutme = siteData.aboutme;
  return (
    <div>
        <h2>About</h2>
        <p>
          {aboutme}
        </p>
        <p>
          for detail: 
          <Link href="/profile">
            Profile
          </Link>
        </p>
    </div>
  )
}

export default About