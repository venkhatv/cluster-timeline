import express from 'express';
import cacheControl from './middleware/cacheControl';
import notFound from './middleware/notFound';


const router = express.Router();
router.use(cacheControl);

const setupRoutes = (routes) => {
  routes.forEach((baseroute) => {
    const baseurl = baseroute.url;
    baseroute.routes.forEach((route) => {
      const url = baseurl.concat(`${route.url}`);
      const method = (route.method || 'get').toLowerCase();
      router[method](url, route.policies, route.controller);
    });
  });

  router.use('*', notFound);
  return router;
};

export default setupRoutes;

