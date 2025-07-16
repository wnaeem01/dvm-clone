export const socialLinks = {
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
    instagram: 'https://www.instagram.com',
    linkedin: 'https://www.linkedin.com',
    youtube: 'https://www.youtube.com',
}

export const socialSvgs = {
  facebook: `<span class="[&>svg]:h-3 [&>svg]:w-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
      <path d="M391.2 103.5H352.5v109.7h38.6zM285 103H246.4V212.8H285zM120.8 0 24.3 91.4V420.6H140.1V512l96.5-91.4h77.3L487.7 256V0zM449.1 237.8l-77.2 73.1H294.6l-67.6 64v-64H140.1V36.6H449.1z"/>
    </svg>
  </span>`,

  twitter: `<span class="[&>svg]:h-3 [&>svg]:w-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/>
    </svg>
  </span>`,

  instagram: `<span class="[&>svg]:h-3 [&>svg]:w-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
    </svg>
  </span>`,

  linkedin: `<span class="[&>svg]:h-3 [&>svg]:w-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
    </svg>
  </span>`,

  youtube: `<span class="[&>svg]:h-3 [&>svg]:w-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 488 512">
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
    </svg>
  </span>`
};

export const contact = '+1 (407)-557 6073';


export const navLinks = [
  { label: "Shop Now", href: "/shop" },
  { label: "Sell on DVM", href: "/sell" },
  { label: "Learn at Lunch", href: "/learn" },
  { label: "Buy Now", href: "/buy" },
  { label: "Special Offers", href: "/offers" },
  { label: "Virtual Expo", href: "/expo" },
  { label: "Blogs", href: "/blogs" },
  { label: "VetRep Finder", href: "/vetrep-finder" },
];

export const features = [
  {
    key:1,
    label: "Wide Selection",
    text: "Access a diverse range of veterinary products and supplies from trusted vendors.",
    svg: `<svg width="25" height="25" viewBox="0 0 24 24" fill="#ab45db" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 14s1.5-2 4-2 4 2 4 2"/>
      <line x1="9" y1="9" x2="9.01" y2="9"/>
      <line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>`
  },
  {
    key:2,
    label: "Trusted Vendors",
    text: "Purchase with confidence from reliable and reputable suppliers in the veterinary industry.",
    svg: `<svg width="25" height="25" viewBox="0 0 24 24" fill="#ab45db" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="7" width="18" height="14" rx="2" ry="2"/>
      <path d="M16 3h-8v4h8V3z"/>
    </svg>`
  },
  {
    key:3,
    label: "Direct Buying",
    text: "Buy directly from sellers without intermediaries, ensuring transparent and fair transactions.",
    svg: `<svg width="25" height="25" viewBox="0 0 24 24" fill="#ab45db" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/>
      <line x1="12" y1="3" x2="12" y2="15"/>
    </svg>`
  },
  {
    key:4,
    label: "24/7 Support",
    text: "Receive continuous support for any queries or issues, ensuring a smooth buying experience.",
    svg: `<svg width="25" height="25" viewBox="0 0 24 24" fill="#ab45db" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 8v4l3 3"/>
    </svg>`
  }
];
