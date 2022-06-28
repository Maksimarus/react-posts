import About from '../pages/About';
import Login from '../pages/Login';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

export const privateRoutes = [
  {path: '/posts', component: <Posts />, id: 1},
  {path: '/posts/:id', component: <PostIdPage />, id: 2},
  {path: '/about', component: <About />, id: 3},
];
export const publicRoutes = [{path: '/login', component: <Login />, id: 1}];
