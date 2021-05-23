const c1 = () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/jinlong/Desktop/mygridsome/my-project/frontend/src/templates/ProjectPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/jinlong/Desktop/mygridsome/my-project/frontend/src/templates/JournalPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/jinlong/Desktop/mygridsome/my-project/frontend/src/pages/Journal.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/jinlong/Desktop/mygridsome/my-project/frontend/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/jinlong/Desktop/mygridsome/my-project/frontend/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/jinlong/Desktop/mygridsome/my-project/frontend/src/pages/Index.vue")

export default [
  {
    path: "/project/1/",
    component: c1
  },
  {
    path: "/project/2/",
    component: c1
  },
  {
    path: "/project/3/",
    component: c1
  },
  {
    path: "/project/4/",
    component: c1
  },
  {
    path: "/journal/1/",
    component: c2
  },
  {
    path: "/journal/2/",
    component: c2
  },
  {
    path: "/journal/3/",
    component: c2
  },
  {
    path: "/journal/4/",
    component: c2
  },
  {
    path: "/journal/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
