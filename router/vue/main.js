// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Index = {
  computed: {
    myName() {
      return 'Hi, I\'m at ' + this.$route.path;
    },
  },
  template: `
    <main class="index">
      <PageTitle :title="myName" />
      <hr>
      <SiteTree />
    </main>
  `,
};

const PageA = {
  computed: {
    myName() {
      return 'Now at ' + this.$route.path;
    },
  },
  template: `
    <main class="page-a">
      <PageTitle :title="myName" />
      <hr>
      <SiteTree />
    </main>
  `,
};

const PageB = {
  computed: {
    myName() {
      return 'This is ' + this.$route.path;
    },
  },
  template: `
    <main class="page-b">
      <PageTitle :title="myName" />
      <hr>
      <SiteTree />
    </main>
  `,
};

// components
Vue.component('PageTitle', {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  template: `
    <h1 class="page-title">
      {{ title }}
    </h1>
  `,
});

Vue.component('SiteTree', {
  template: `
    <section class="site-tree">
      <SiteTreeNode
        path="/index"
      />
      <SiteTreeNode
        path="/page-a"
        child
      />
      <SiteTreeNode
        path="/page-b"
        last-child
      />
    </section>
  `,
});

Vue.component('SiteTreeNode', {
  props: {
    path: {
      type: String,
      default: '',
    },
    child: {
      type: Boolean,
      default: false,
    },
    lastChild: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isCurrentPath() {
      return this.path === this.$route.path;
    },
  },
  template: `
    <div class="site-tree-node">
      <span v-if="child">├</span>
      <span v-if="lastChild">└</span>
      <RouterLink
        :class="{disabled: isCurrentPath}"
        :to="path"
      >
        {{ path }}
      </RouterLink>
    </div>
  `,
});

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  {
    path: '/index',
    component: Index,
  },
  {
    path: '/page-a',
    component: PageA,
  },
  {
    path: '/page-b',
    component: PageB,
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  el: '#app',
  router,
  template: `
    <router-view />
  `,
});
