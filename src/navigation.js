import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Schedule',
      links: [
        {
          text: 'Events',
          href: getPermalink('/homes/schedule'),
        },
        {
          text: 'Traditions',
          href: getPermalink('/homes/traditions'),
        },
      ],
    },
    {
      text: 'Travel',
      href: getPermalink('/travel'),
    },
    {
      text: 'Gallery',
      href: getPermalink('/photos'),
    },
    {
      text: 'RSVP',
      href: getPermalink('/contact'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Registry',
      href: getPermalink('/registry'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#FAQs'),
    },
    {
      text: 'Livestream',
      href: getPermalink('/livestream'),
    },
  ],
};
