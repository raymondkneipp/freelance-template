import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { NextSeo } from 'next-seo';
import {
  FaAngleRight,
  FaBookOpen,
  FaCog,
  FaHome,
  FaPhone,
} from 'react-icons/fa';
import { Centered, Container, Typography } from '../components';

interface Props {
  to: string;
  icon: IconType;
  page: string;
  description: string;
}

const LinkItem: NextPage<Props> = ({ to, icon, page, description }) => {
  return (
    <Link href={to}>
      <a className="flex items-center justify-between space-x-6 hover:bg-gray-100 py-2 px-4 rounded-xl transition-colors text-sky-700">
        {React.createElement(icon, { size: 30 })}
        <div className="flex-1 text-left">
          <Typography variant="h6" element="h3">
            {page}
          </Typography>
          <Typography variant="p">{description}</Typography>
        </div>
        <FaAngleRight size={20} />
      </a>
    </Link>
  );
};

const Custom404: NextPage = () => {
  return (
    <Container>
      <NextSeo title="404 Page Not Found" description="CHANGE ME" />
      <Centered>
        <div className="max-w-xl flex flex-col space-y-2 min-h-screen items-center justify-center text-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width="80"
            height="80"
            layout="intrinsic"
          />
          <Typography color="primary" variant="h6" element="h1">
            404 ERROR
          </Typography>
          <Typography variant="h1" element="h2">
            This page does not exist.
          </Typography>
          <Typography variant="p">
            The page you are looking for could not be found.
          </Typography>
          <div className="flex flex-col items-stretch w-full space-y-2 pt-12">
            <LinkItem
              to="/"
              icon={FaHome}
              page="Home"
              description="Go back to start"
            />
            <LinkItem
              to="/about"
              icon={FaBookOpen}
              page="About Us"
              description="Learn about our company"
            />
            <LinkItem
              to="/services"
              icon={FaCog}
              page="Services"
              description="View the services our company has to offer"
            />
            <LinkItem
              to="/contact"
              icon={FaPhone}
              page="Contact Us"
              description="Find a way to get ahold of us"
            />
          </div>
        </div>
      </Centered>
    </Container>
  );
};

export default Custom404;
