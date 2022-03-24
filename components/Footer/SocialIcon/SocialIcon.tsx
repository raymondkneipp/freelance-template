import { NextPage } from 'next';
import React from 'react';
import { IconType } from 'react-icons';

interface Props {
  to: string;
  icon: IconType;
}

const SocialIcon: NextPage<Props> = ({ to, icon }) => {
  return (
    <a className="rounded-md p-2" href={to}>
      {React.createElement(icon, { size: 25 })}
    </a>
  );
};

export default SocialIcon;