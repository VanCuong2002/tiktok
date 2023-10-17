//Layouts
import { HeaderOnly } from '~/components/Layouts';
import routesConfig from '~/config/routes';

//Pages
import Home from '~/pages/Home/index.js';
import Following from '~/pages/Following/index.js';
import Profile from '~/pages/Profile/index.js';
import Upload from '~/pages/Upload/index.js';
import Search from '~/pages/Search/index.js';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
