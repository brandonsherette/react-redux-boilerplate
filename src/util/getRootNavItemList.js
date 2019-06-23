import { PageAbout, PageHome } from '~/pages';

export default function getRootNavItemList() {
  return [
    {
      title: 'Home',
      path: '/',
      component: PageHome,
    },
    {
      title: 'About',
      path: '/about',
      component: PageAbout,
    }
  ];
}