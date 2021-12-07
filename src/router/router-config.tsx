import HomePage from '../components/HomePage/HomePage';
import ObjectPage from '../components/ObjectPage/ObjectPage';

const ROUTER_CONFIG = {
  HOME_PAGE: {
    path: '/',
    getPath: () => '/',
    exact: true,
    children: <HomePage />,
  },
  OBJECT_PAGE: {
    path: '/object',
    getPath: () => '/object',
    exact: true,
    children: <ObjectPage />,
  },
};

export default ROUTER_CONFIG;
