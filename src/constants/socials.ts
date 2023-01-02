import type { IconType } from 'react-icons'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

interface Social {
  name: string
  href: string
  icon: IconType
}

export const FACEBOOK: Social = {
  name: 'Facebook',
  href: 'https://facebook.com',
  icon: FaFacebook,
}

export const TWITTER: Social = {
  name: 'Twitter',
  href: 'https://twitter.com',
  icon: FaTwitter,
}

export const INSTAGRAM: Social = {
  name: 'Instagram',
  href: 'https://instagram.com',
  icon: FaInstagram,
}

export const SOCIALS: Social[] = [FACEBOOK, TWITTER, INSTAGRAM]
