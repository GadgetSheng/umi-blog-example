export default {
  npmClient: "pnpm",
  apiRoute: {
    platform: 'vercel', // 部署到Vercel平台
  },
  routes: [
    { path: '/',component: 'index'},
    { path: '/login', component: 'login' },
    { path: '/posts/create',component: 'posts/create'},
    { path: '/posts/:postId',component: 'posts/post'},

  ],
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
};
