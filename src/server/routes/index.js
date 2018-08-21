import { getClusterData, getClusterList, getTestData } from '../api/clusterController';

const routes = [{
  url: '/test',
  routes: [{
    url: '',
    method: 'get',
    controller: getTestData,
    policies: [],
  }],
}, {
  url: '/clusterList',
  routes: [{
    url: '/:id',
    method: 'get',
    controller: getClusterList,
    policies: [],
  }, {
    url: '',
    method: 'get',
    controller: getClusterList,
    policies: [],
  }],
}, {
  url: '/cluster',
  routes: [{
    url: '/:id',
    method: 'get',
    controller: getClusterData,
    policies: [],
  }, {
    url: '',
    method: 'get',
    controller: getClusterData,
    policies: [],
  }, {
    url: '/:id/:blockId',
    method: 'get',
    controller: getClusterData,
    policies: [],
  }],
}];

export default routes;
