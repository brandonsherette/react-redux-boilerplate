import PageHome from '~pages/Home';

export default function getRootNavItemList() {
  return [
    {
      title: 'Home',
      path: '/',
      component: PageHome,
    },
  ];
}