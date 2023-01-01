interface Route {
  href: string;
  label: string;
}

export const HOME: Route = {
  href: "/",
  label: "Home"
}

export const ABOUT: Route = {
  href: "/about",
  label: "About Us"
}

export const SERVICES: Route = {
  href: "/services",
  label: "Services"
}

export const CONTACT: Route = {
  href: "/contact",
  label: "Contact Us"
}

export const NAV_ROUTES: Route[] = [
  HOME, ABOUT, SERVICES, CONTACT
]
