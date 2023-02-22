import Home from '../pages/home';
import Friends from '../pages/friends';
import Watch from '../pages/watch';
import BooksMark from '../pages/booksmark';
import Group from '../pages/group';
import config from '../config';

const routes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.watch, component: Watch },
    { path: config.routes.group, component: Group },
    { path: config.routes.booksmark, component: BooksMark },
];

export default routes;
