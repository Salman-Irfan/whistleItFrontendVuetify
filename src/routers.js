// import app 
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import AddPost from './views/AddPost.vue'
import PostDetails from './views/PostDetails.vue'
import EditPost from './views/EditPost.vue'
import { createRouter, createWebHistory } from 'vue-router';

// making routes
const routes = [
    // HomeView route
    {
        path: "/",
        component: HomeView,
        name: "HomeView",
    },
    // AboutView route
    {
        path: "/about",
        component: AboutView,
        name: "AboutView",
    },
    // add post route
    {
        path: "/add-post",
        component: AddPost,
        name: "add-post",
    },
    // post details route
    {
        path: "/post:id",
        component: PostDetails,
        name: "PostDetails",
    },
    // edit post route
    {
        path: "/edit-post:id",
        component: EditPost,
        name: "EditPost",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;