import React from 'react';

export const phone = '03-5254196';
export const bitPhone = '054-7505847';
export const email = 'tree@citytree.net';

export const whatsappGroupInviteLink = 'https://chat.whatsapp.com/FsTi2IrNA4uJTjk6k554O0';
export const phoneLink = <a href="tel:035254196">{phone}</a>;
export const emailLink = <a href={`mail:${email}`}>{email}</a>;
export const patreonUrl = 'https://www.patreon.com/CityTree';
export const whatsappUrl = 'https://wa.me/972547505847';
export const whatsappLink = <a href={whatsappUrl}>{bitPhone}</a>;
export const joinPatreonUrl = 'https://www.patreon.com/join/CityTree';
export const calendarUrl =
  'https://calendar.google.com/calendar/u/1/render?cid=fmhj0n2anv9prsoquhoc22g8m0%40group.calendar.google.com';
export const paypalUrl = 'https://www.paypal.me/citytree';
export const payboxUrl = 'https://payboxapp.page.link/ecdf8UhBJ6dG25Mu7';
export const facebookUrl = 'https://facebook.com/citytree';
export const youtubeUrl = 'https://www.youtube.com/user/citytreenet/';

export const airbnbUrl = 'https://www.airbnb.co.uk/rooms/3057651';
export const airbnbForm = '';

export const githubProject = 'https://github.com/ranbena/citytree';
export const ranbenaPage = 'https://github.com/ranbena/';

export enum PAGES {
  hineni = '/hineni',
  practicalEcologySummer = '/practical-ecology-summer',
  practicalEcologyWinter = '/practical-ecology-winter',

  // non-exsistent (coming soon modal)
  magicalEconomy = '/magical-economy',
  retreats = '/retreats',
  apprenticeship = '/apprenticeship',
  tours = '/tours',
  groupTours = '/tours#group',
  privateTours = '/tours#private',
  forageTours = '/tours#forage',
  magicTours = '/tours#magic',
  glossary = '/glossary',
  blog = '/blog',
  manifests = '/manifests',
  articles = '/articles',
  references = '/references',
  trees = '/trees',
  forestCity = '/forest-city',
  poetry = '/poetry',
  supporters = '/supporters',
  money = '/money',

  // temp external
  people = 'https://docs.google.com/document/d/e/2PACX-1vTjJy7kZ9ObbIz6E7oHKkxvF50gNUeo0Rapknf99YzxzYixFvLsao20QbhGnZ3LsEmr9e24qkXsHNq-/pub',
  employment = 'https://docs.google.com/document/d/e/2PACX-1vStK7lP26XAvT35LRbUlDs5mrJeniHmSrGHL53g2YYSPnxc00u395MMfjnx7GcbbcBf-pxCxJgqLkfC/pub',
}
