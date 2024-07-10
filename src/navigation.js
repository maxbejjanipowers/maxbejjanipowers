import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Schedule',
      links: [
        {
          text: 'Events',
          href: getPermalink('/schedule'),
        },
        {
          text: 'Traditions',
          href: getPermalink('/traditions'),
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
      links: [
        {
          text: 'Bride and Groom',
          href: getPermalink('/about'),
        },
        {
          text: 'Bridesmaids',
          href: getPermalink('/bridesmaids'),
        },
        {
          text: 'Groomsmen',
          href: getPermalink('/groomsmen'),
        },
      ],
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
