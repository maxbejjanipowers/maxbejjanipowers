import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Schedule',
      links: [
        {
          text: 'Day Of',
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
      text: 'Bridal Party',
      href: getPermalink('/about'),
    },
    {
      text: 'Registry',
      href: getPermalink('/registry'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Livestream',
      href: getPermalink('/livestream'),
    },
  ],
};
