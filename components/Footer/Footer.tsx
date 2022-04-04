import { NextPage } from 'next';
import Image from 'next/image';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaRegCopyright,
} from 'react-icons/fa';
import {
  Container,
  DescriptionList,
  DescriptionListItem,
  Tall,
  Typography,
} from '..';
import PageLink from './PageLink/PageLink';

const Footer: NextPage = () => {
  return (
    <footer className="py-10 bg-gray-100">
      <Container>
        <Tall
          master={
            <>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={45}
                height={45}
                layout="fixed"
              />
              <Typography variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                optio? Odio repudiandae ipsa ipsam non id iusto, incidunt ullam
              </Typography>
            </>
          }
          slave={
            <div className="flex flex-wrap justify-around gap-6 col-span-2">
              <DescriptionList header="PAGES">
                <DescriptionListItem>
                  <PageLink to="/" page="Home" />
                </DescriptionListItem>
                <DescriptionListItem>
                  <PageLink to="/about" page="About" />
                </DescriptionListItem>
                <DescriptionListItem>
                  <PageLink to="/services" page="Services" />
                </DescriptionListItem>
                <DescriptionListItem>
                  <PageLink to="/contact" page="Contact" />
                </DescriptionListItem>
              </DescriptionList>
              <DescriptionList header="LEGAL">
                <DescriptionListItem>
                  <PageLink to="/privacy-policy" page="Privacy Policy" />
                </DescriptionListItem>
                <DescriptionListItem>
                  <PageLink to="/terms-of-use" page="Terms of Use" />
                </DescriptionListItem>
                <DescriptionListItem>
                  <PageLink to="/not-found" page="404" />
                </DescriptionListItem>
              </DescriptionList>
              <DescriptionList header="SOCIAL">
                <DescriptionListItem icon={FaFacebook}>
                  <PageLink to="https://www.facebook.com/" page="Facebook" />
                </DescriptionListItem>
                <DescriptionListItem icon={FaInstagram}>
                  <PageLink
                    to="https://www.instagram.com/?hl=en"
                    page="Instagram"
                  />
                </DescriptionListItem>
                <DescriptionListItem icon={FaTwitter}>
                  <PageLink to="https://twitter.com/?lang=en" page="Twitter" />
                </DescriptionListItem>
                <DescriptionListItem icon={FaLinkedin}>
                  <PageLink to="https://www.linkedin.com/" page="LinkedIn" />
                </DescriptionListItem>
                <DescriptionListItem icon={FaTiktok}>
                  <PageLink to="https://www.tiktok.com/en/" page="TikTok" />
                </DescriptionListItem>
              </DescriptionList>
            </div>
          }
        />

        <div className="space-x-1 flex items-center justify-center text-gray-600 pt-10">
          <FaRegCopyright />
          <Typography variant="p">
            2022 Brand, Inc. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
