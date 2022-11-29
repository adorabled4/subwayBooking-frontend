export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user', routes: [
          {name: '登录', path: '/user/login', component: './user/Login'},
          {name: '注册', path: '/user/register', component: './user/Register'}
        ]
      },
      {component: './404'},
    ],
  },
  {path: '/welcome', name: '首页', icon: 'smile', component: './Welcome'},
  {
    path: '/admin',
    name: '后台管理',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {path: '/admin/user', name: '用户管理', icon: 'smile', component: './Admin/UserManage'},
      {path: '/admin/order', name: '订单管理', icon: 'smile', component: './Admin/OrderManage'},
      {path: '/admin/station', name: '站点管理', icon: 'smile', component: './Admin/StationManage'},
      {component: './404'},
    ],
  },
  // {name: '查询表格', icon: 'table', path: '/list', component: './TableList'},
  {path: '/', redirect: '/welcome'},
  {component: './404'},
];
