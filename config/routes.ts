export default [
  {
    path: '/',
    redirect: '/test/welcome',
  },
  {
    path: '/test/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './test/welcome/index',
  },
  {
    path: '/test/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './test/admin/index'
  },
  {
    path: '/test/table',
    name: 'table',
    icon: 'table',
    component: './test/table/index',
  },
  {
    path: '/test/wallet',
    name: 'wallet',
    icon: 'smile',
    component: './test/wallet/index',
  },
  {
    component: './error/404',
  },
];
