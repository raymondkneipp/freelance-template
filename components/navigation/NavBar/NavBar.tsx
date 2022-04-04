import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Typography } from '../..';
import ActiveLink from './ActiveLink/ActiveLink';
import MenuButton from './MenuButton/MenuButton';

const NavBar: NextPage = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-300 py-4 sticky top-0 left-0 right-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2 rounded-xl">
              <Image
                src="/logo.svg"
                alt="Logo"
                width="45"
                height="45"
                layout="fixed"
              />
              <Typography variant="h4" color="primary" element="span">
                Brand
              </Typography>
            </a>
          </Link>

          <div
            className={`md:block ${
              show ? 'block' : 'hidden'
            } absolute top-full bg-white left-0 right-0 p-2 pt-0 border-b border-gray-300 md:relative md:border-0 md:p-0`}
          >
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:flex md:items-center md:space-x-4">
              <ActiveLink to="/">Home</ActiveLink>
              <ActiveLink to="/about">About</ActiveLink>
              <ActiveLink to="/services">Services</ActiveLink>
              <ActiveLink to="/contact">Contact</ActiveLink>
            </div>
          </div>

          <MenuButton show={show} setShow={setShow} />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
