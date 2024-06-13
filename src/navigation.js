import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      
      text: 'Inicio',
      href: '/',
      
    },
    
    {
      text: 'Talleres',
      links: [
        {
          text: 'Ver talleres',
          href: getPermalink('/#features'),
        },
       /*  {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        }, */
      ],
    },
    {
      text: 'Participantes',
      links: [
        {
          text: 'Romel Gutierrez',
          href: getPermalink('/landing/romel'),
        },
        {
          text: 'Morelia Oblitas',
          href: getPermalink('/landing/morelia'),
        },
        {
          text: 'Darwin Condori',
          href: getPermalink('/landing/darwin'),
        },
       /*  {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        }, */
      ],
    },
    {
      text: 'Ponencias',
      links: [
        {
          text: 'Lista de ponentes',
          href: getBlogPermalink(),
        },
       /*  {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        }, */
      ],
    },
    {
      text: 'Programa_General',
      href: '/programa',
    },
  ],
  
  actions: [{ text: 'Inscríbete YA!', href: '/contact',  }],
};

export const footerData = {
  links: [
    {
      title: 'Ponencias',
      links: [
        { text: 'Innovación', href: '/blog' },
        { text: 'Emprendimiento', href: '/blog' },
        { text: 'Otros', href: '/blog' },
      ],
    },
    {
      title: 'Talleres',
      links: [
        { text: 'FIA', href: '#features' },
        { text: 'SA', href: '#features' },
        { text: 'Otros', href: '#features' },
      
      ],
    },
    {
      title: 'Participantes',
      links: [
        { text: 'Romel Gutierrez', href: '/landing/romel' },
        { text: 'Morelia Oblitas', href: '/landing/morelia' },
        { text: 'Darwin Condori', href: '/landing/darwin' },
        
      ],
    },
    {
      title: 'Progmara general',
      links: [
        { text: 'Jueves 30', href: '/programa' },
        { text: 'Viernes 31', href: '/programa' },
        { text: 'Deporte', href: '/programa' },
        
      ],
    },
  ],
  secondaryLinks: [
    { text: 'UPeU', href: getPermalink('/') },
    { text: 'Ingenieria de Sistemas', href: getPermalink('/') },
  ],
  socialLinks: [
   /*  { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }, */
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
};
